import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

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
            <td align="center">pc</td>
            <td align="right" style={{ paddingRight: "20px" }}>
              {props.pc}
            </td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
