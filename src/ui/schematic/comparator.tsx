import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

export const Comparator = (props) => {
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Comp</Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td>op</td>
            <td>00000</td>
          </Tr>
          <Tr>
            <td>a</td>
            <td>00000</td>
          </Tr>
          <Tr>
            <td>b</td>
            <td>00000</td>
          </Tr>
          <Tr>
            <td>taken</td>
            <td>00000</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
