import { Table, TableContainer, Td, Th, Tr, Tbody, Thead } from "@chakra-ui/react";

const formatHex = (x: number) => `0x${x.toString(16).padStart(8, "0")}`;

export const Memory = (props) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Address</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          {props.memory.map((mem, i) => (
            <Tr key={i}>
              <Td>{formatHex(i * 4)}</Td>
              <Td>{formatHex(mem)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
