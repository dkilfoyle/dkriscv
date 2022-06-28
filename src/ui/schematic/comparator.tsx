import { HStack, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { ComputerContext } from "../../App";
import { unsigned } from "../../utils/bits";
import { useFormat } from "../../utils/useFormat";

const BRANCH_TO_OP = {
  eq: "==",
  ne: "!=",
  lt: "<",
  ltu: "<",
  ge: ">=",
  geu: ">=",
};

export const Comparator = (props) => {
  const { FormatSelector, formatFn } = useFormat();
  const computer = useContext(ComputerContext);
  const branch = computer.cpu.datapath.branch;

  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={3}>
              <HStack>
                <span style={{ paddingLeft: 10 }}>Comp</span>
                <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            <td align="center">op</td>
            <td></td>
            <td className="value">{branch ? BRANCH_TO_OP[branch] : ""}</td>
          </Tr>
          <Tr>
            <td align="center">a</td>
            <td align="center">{branch ? "x" + computer.cpu.instr.params.rs1 : ""}</td>
            <td className="value">{branch ? formatFn(computer.cpu.x1) : ""}</td>
          </Tr>
          <Tr>
            <td align="center">b</td>
            <td align="center">{branch ? "x" + computer.cpu.instr.params.rs2 : ""}</td>
            <td className="value">{branch ? formatFn(computer.cpu.x2) : ""}</td>
          </Tr>
          <Tr>
            <td align="center">taken</td>
            <td className="value">{branch ? computer.cpu.branchTaken.toString() : ""}</td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
