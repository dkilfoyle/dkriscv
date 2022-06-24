import { Button, ButtonGroup, HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { registerNames } from "../../assemblers/riscv/builder";
import { Processor } from "../../simulator/Processor";

const regColor = (i) => {
  switch (true) {
    case i <= 4:
      return "#e8e8e8";
    case i <= 7:
      return "#f8f8f8";
    case i <= 10:
      return "#e8e8e8";
    case i <= 18:
      return "#f8f8f8";
    case i <= 28:
      return "#e8e8e8";
    default:
      return "#f8f8f8";
  }
};

export const Regs = (props: { cpu: Processor }) => {
  const [format, setFormat] = useState(10);
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={3}>
              <HStack>
                <span style={{ paddingLeft: "10px" }}>Regs</span> <Spacer></Spacer>
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
          {props.cpu.x.map((r, i) => (
            <Tr key={i} style={{ background: regColor(i) }}>
              <td align="right">x{i}</td>
              <td align="center" style={{ minWidth: 50 }}>
                {format === 10 ? props.cpu.x[i] : "0x" + props.cpu.x[i].toString(16)}
              </td>
              <td align="left">{registerNames[i]}</td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
