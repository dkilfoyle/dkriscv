import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

export const Bus = (props) => {
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Bus</Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td>addr</td>
            <td>00000</td>
          </Tr>
          <Tr>
            <td>data</td>
            <td>00000</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
