import { Button, ButtonGroup, HStack, Spacer, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { Processor } from "../../simulator/Processor";
import "./schematic.css";

export const ALU = (props: { cpu: Processor }) => {
  const [format, setFormat] = useState(10);
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={3}>
              <HStack>
                <span style={{ paddingLeft: "10px" }}>ALU</span> <Spacer></Spacer>
                <ButtonGroup size="xs" isAttached variant="outline">
                  <Button onClick={() => setFormat(10)} size="xs">
                    D
                  </Button>
                  <Button onClick={() => setFormat(16)} size="xs">
                    H
                  </Button>
                </ButtonGroup>
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td align="center">op</td>
            <td align="right">{props.cpu.datapath.aluOp}</td>
            <td></td>
          </Tr>
          <Tr>
            <td align="center">a</td>
            <td align="right">{props.cpu.datapath.src1 === "x1" ? "x" + props.cpu.instr.params.rs1 : "pc"}</td>
            <td className="value">{props.cpu.datapath.src1 === "x1" ? props.cpu.x1 : props.cpu.pc}</td>
          </Tr>
          <Tr>
            <td align="center">b</td>
            <td align="right">{props.cpu.datapath.src2 === "x2" ? "x" + props.cpu.instr.params.rs2 : "imm"}</td>
            <td className="value">{props.cpu.datapath.src2 === "x2" ? props.cpu.x2 : props.cpu.instr.params.imm}</td>
          </Tr>
          <Tr>
            <td align="center">r</td>
            <td></td>
            <td className="value">{props.cpu.aluResult}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
