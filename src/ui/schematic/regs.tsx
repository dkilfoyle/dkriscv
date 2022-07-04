import { Button, ButtonGroup, HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComputerContext } from "../../App";
import { registerNames } from "../../assemblers/riscv/builder";
import { Processor } from "../../simulator/Processor";
import { useFormat } from "../../utils/useFormat";

export const Regs = () => {
  const { FormatSelector, formatFn } = useFormat();
  const { computer } = useContext(ComputerContext);
  const cpu = computer.cpu;

  const regColor = (i) => {
    switch (true) {
      case "RIUJ".includes(cpu.instr.iType) && i === cpu.instr.params.rd:
        return "#ffb7b7";
      case "RISB".includes(cpu.instr.iType) && i === cpu.instr.params.rs1:
        return "#ddffdd";
      case "RUSB".includes(cpu.instr.iType) && i === cpu.instr.params.rs2:
        return "#c2f7c2";
      case i <= 4:
        return "#e8e8e8";
      case i <= 7:
        return "#f8f8f8";
      case i <= 9:
        return "#e8e8e8";
      case i <= 17:
        return "#f8f8f8";
      case i <= 27:
        return "#e8e8e8";
      default:
        return "#f8f8f8";
    }
  };

  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={3}>
              <HStack>
                <span style={{ paddingLeft: "10px" }}>Regs</span> <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          {cpu.x.map((r, i) => (
            <Tr key={i} style={{ background: regColor(i) }}>
              <td>x{i}</td>
              <td>{formatFn(cpu.x[i])}</td>
              <td>{registerNames[i]}</td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
