import { HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { ComputerContext } from "../../App";
import { useFormat } from "../../utils/useFormat";

export const Bus = (props) => {
  const { FormatSelector, formatFn } = useFormat();
  const computer = useContext(ComputerContext);
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={2}>
              <HStack>
                <span style={{ paddingLeft: 10 }}>Bus</span>
                <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td align="center">addr</td>
            <td className="value">{formatFn(computer.bus.lastAddress)}</td>
          </Tr>
          <Tr>
            <td align="center">data</td>
            <td className="value">{formatFn(computer.cpu.loadData)}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
