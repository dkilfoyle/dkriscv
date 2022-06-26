import { Table, TableContainer, Td, Th, Tr, Tbody, Thead, Button, HStack, ButtonGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComputerContext } from "../../App";
import { getBytes } from "../../utils/bits";

export const Ram = (props: { highlightRange?: [number, number] }) => {
  const style = (i) =>
    props.highlightRange && i >= props.highlightRange[0] && i <= props.highlightRange[1] ? { backgroundColor: "#d4fafa" } : {};

  const computer = useContext(ComputerContext);
  const memory = computer.mem;

  const [memFormat, setMemFormat] = useState("bytes");
  const formatMem = (i) => {
    switch (memFormat) {
      case "bytes":
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
      case "decimal":
        return <Td>{memory.localRead(i * 4, 4)}</Td>;
      case "unsigned":
        return <Td>{memory.localRead(i * 4, 4) >>> 0}</Td>;
      case "string":
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

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Address</Th>
            <Th>
              <ButtonGroup size="xs" isAttached variant="outline">
                <Button onClick={() => setMemFormat("bytes")} size="xs">
                  B
                </Button>
                <Button onClick={() => setMemFormat("decimal")} size="xs">
                  D
                </Button>
                <Button onClick={() => setMemFormat("unsigned")} size="xs">
                  U
                </Button>
                <Button onClick={() => setMemFormat("string")} size="xs">
                  S
                </Button>
              </ButtonGroup>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          {[...Array(memory.data.length / 4)].map((x, i) => (
            <Tr key={i} style={style(i)}>
              <Td>{(i * 4).toString(16).padStart(8, "0")}</Td>
              {formatMem(i)}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
