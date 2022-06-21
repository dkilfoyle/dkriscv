import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

export const PC = (props: { pc: number }) => {
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>PC</Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td>pc</td>
            <td>{props.pc}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
