import { HStack, Spacer, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { ComputerContext } from "../../App";
import { useFormat } from "../../utils/useFormat";
import "./schematic.css";

export const ALU = () => {
  const { FormatSelector, formatFn } = useFormat(10);
  const computer = useContext(ComputerContext);
  const cpu = computer.cpu;
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={3}>
              <HStack>
                <span style={{ paddingLeft: "10px" }}>ALU</span> <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td align="center">op</td>
            <td align="right">{cpu.datapath.aluOp}</td>
            <td></td>
          </Tr>
          <Tr>
            <td align="center">a</td>
            <td align="right">{cpu.datapath.src1 === "x1" ? "x" + cpu.instr.params.rs1 : "pc"}</td>
            <td className="value">{cpu.datapath.src1 === "x1" ? formatFn(cpu.x1) : formatFn(cpu.pc)}</td>
          </Tr>
          <Tr>
            <td align="center">b</td>
            <td align="right">{cpu.datapath.src2 === "x2" ? "x" + cpu.instr.params.rs2 : "imm"}</td>
            <td className="value">{cpu.datapath.src2 === "x2" ? formatFn(cpu.x2) : formatFn(cpu.instr.params.imm)}</td>
          </Tr>
          <Tr>
            <td align="center">r</td>
            <td></td>
            <td className="value">{formatFn(cpu.aluResult)}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
