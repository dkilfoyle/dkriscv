import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { Instruction } from "../../assemblers/riscv/Instruction";
import { formatHex } from "../../utils/bits";

export const IR = (props: { ir: Instruction }) => {
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>IR</Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td>instr</td>
            <td>{formatHex(props.ir.machineCode)}</td>
          </Tr>
          <Tr>
            <td>fn</td>
            <td>{props.ir.opName}</td>
          </Tr>
          <Tr>
            <td>rs1</td>
            <td>{props.ir.params.rs1}</td>
          </Tr>
          <Tr>
            <td>rs2</td>
            <td>{props.ir.params.rs2}</td>
          </Tr>
          <Tr>
            <td>rd</td>
            <td>{props.ir.params.rd}</td>
          </Tr>
          <Tr>
            <td>imm</td>
            <td>{props.ir.params.imm}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
