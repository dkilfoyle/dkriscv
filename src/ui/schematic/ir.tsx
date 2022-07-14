import { ArrowForwardIcon, ArrowRightIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  ButtonGroup,
  Center,
  HStack,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ComputerContext } from "../../App";
import { instructionFormats, instructionFields } from "../../languages/riv32asm/parser/Instruction";
import { unsignedSlice } from "../../utils/bits";
import { useFormat } from "../../utils/useFormat";
import "./schematic.css";

const colors = {
  fun: "#ffcbdb",
  rs1: "#ddffdd",
  rs2: "#c2f7c2",
  rd: "#ffb7b7",
  opc: "#fffdd0",
  imm: "#ddeeff",
};

export const IR = () => {
  const { computer, render, breakpoints } = useContext(ComputerContext);
  const ir = computer.cpu.instr;

  const { FormatSelector, formatFn } = useFormat();

  const row = (type: "name" | "value") => (
    <Tr>
      {instructionFormats[ir.iType].map((field, i) => {
        const offsets = instructionFields[field];
        if (offsets.length === 1) offsets.push(offsets[0]);
        const length = offsets[0] - offsets[1] + 1;
        return (
          <Td key={i} colSpan={length} bg={colors[field.substring(0, 3)]} className={type}>
            <Center>
              {type === "name"
                ? field
                : formatFn(unsignedSlice(ir.machineCode, offsets[0], offsets[1]), length)}
            </Center>
          </Td>
        );
      })}
    </Tr>
  );

  const handleStep = () => {
    computer.step();
    render();
  };

  const handleRun = () => {
    while (!breakpoints.includes(computer.cpu.pc) && !computer.cpu.isExit) {
      computer.step();
    }
    render();
  };

  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={32} paddingLeft={"10px"} paddingRight={"10px"}>
              <HStack>
                <ButtonGroup size="xs" isAttached variant="outline">
                  <IconButton
                    onClick={handleStep}
                    size="xs"
                    icon={<RepeatIcon />}
                    aria-label={""}></IconButton>
                  <IconButton
                    onClick={handleStep}
                    size="xs"
                    icon={<ArrowForwardIcon />}
                    aria-label={""}
                  />
                  <IconButton
                    onClick={handleRun}
                    size="xs"
                    icon={<ArrowRightIcon />}
                    aria-label={""}
                  />
                </ButtonGroup>
                <h2>
                  IR = 0x{(ir.machineCode >>> 0).toString(16)} ({ir.iType})
                </h2>
                <Spacer></Spacer>
                <FormatSelector />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr className="instruction-bits">
            {[...Array(32)].map((x, i) => (
              <td key={i}>{31 - i}</td>
            ))}
          </Tr>
          {row("name")}
          {row("value")}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
