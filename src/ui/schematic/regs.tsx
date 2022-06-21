import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
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
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Regs</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          {props.cpu.x.map((r, i) => (
            <Tr key={i} style={{ background: regColor(i) }}>
              <td>x{i}</td>
              <td>{props.cpu.x[i]}</td>
              <td>{registerNames[i]}</td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
