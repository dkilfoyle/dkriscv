import {
  Table,
  TableContainer,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Button,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComputerContext } from "../../App";
import { memSize } from "../../simulator/System";
import { getBytes } from "../../utils/bits";
import { useFormat } from "../../utils/useFormat";

export const Stack = (props: { highlightRange?: [number, number] }) => {
  const style = (i) => {
    if (i === computer.cpu.getX(8)) return { backgroundColor: "#A5D6A7" };
    return props.highlightRange && i >= props.highlightRange[0] && i <= props.highlightRange[1]
      ? { backgroundColor: "#d4fafa" }
      : {};
  };

  const { computer } = useContext(ComputerContext);
  const memory = computer.mem;

  // const [memFormat, setMemFormat] = useState("bytes");
  const { FormatSelector, formatFn, format } = useFormat("8", "8DUS");

  const formatMem = (i) => {
    switch (format) {
      case "8":
        return (
          <Td>
            <HStack>
              <span>
                {memory
                  .localRead(i * 4 + 3, 1)
                  .toString(16)
                  .padStart(2, "0")}
              </span>
              <span>
                {memory
                  .localRead(i * 4 + 2, 1)
                  .toString(16)
                  .padStart(2, "0")}
              </span>
              <span>
                {memory
                  .localRead(i * 4 + 1, 1)
                  .toString(16)
                  .padStart(2, "0")}
              </span>
              <span>
                {memory
                  .localRead(i * 4, 1)
                  .toString(16)
                  .padStart(2, "0")}
              </span>
            </HStack>
          </Td>
        );
      case "D":
        return <Td>{memory.localRead(i * 4, 4)}</Td>;
      case "U":
        return <Td>{memory.localRead(i * 4, 4) >>> 0}</Td>;
      case "S":
        return (
          <Td>
            {getBytes(memory.localRead(i * 4, 4)).reduce((prev, cur) => {
              prev += String.fromCharCode(cur);
              return prev;
            }, "")}
          </Td>
        );
    }
  };

  const stackSizeWords = (memSize - computer.cpu.getX(2)) / 4 + 1;
  const stackAddresses = [...Array(stackSizeWords)].map((_, i) => memSize - i * 4);

  return (
    <TableContainer className="ramTable">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Stack</Th>
            <Th>
              <FormatSelector />
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          {stackAddresses.map((addr) => (
            <Tr key={addr} style={style(addr)}>
              <Td>{addr.toString(16).padStart(8, "0")}</Td>
              {formatMem(addr)}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
