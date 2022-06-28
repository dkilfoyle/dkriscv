import { ArrowForwardIcon, ArrowRightIcon, RepeatIcon } from "@chakra-ui/icons";
import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, ButtonGroup, Center, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { ComputerContext } from "../../App";
import { instructionFields, instructionFormats } from "../../assemblers/riscv/Instruction";
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

export const IR = (props: { incStep: () => void }) => {
  const computer = useContext(ComputerContext);
  const ir = computer.cpu.instr;

  const { FormatSelector, formatFn } = useFormat();

  const row = (type: "name" | "value") => (
    <Tr>
      {instructionFormats[ir.iType].map((field, i) => {
        const offsets = instructionFields[field];
        const length = offsets[0] - offsets[1] + 1;
        return (
          <Td key={i} colSpan={length} bg={colors[field.substring(0, 3)]}>
            <Center>{type === "name" ? field : formatFn(unsignedSlice(ir.machineCode, offsets[0], offsets[1]), length)}</Center>
          </Td>
        );
      })}
    </Tr>
  );

  const handleStep = () => {
    computer.step();
    props.incStep();
  };

  return (
    <TableContainer
      sx={{
        "&::-webkit-scrollbar": {
          height: "6px",
          borderRadius: "4px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "4px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={32}>
              <HStack>
                <ButtonGroup size="xs" isAttached variant="outline">
                  <IconButton onClick={handleStep} size="xs" icon={<RepeatIcon />} aria-label={""}></IconButton>
                  <IconButton onClick={handleStep} size="xs" icon={<ArrowForwardIcon />} aria-label={""} />
                  <IconButton
                    onClick={() => {
                      computer.run();
                      // props.setComputer(props.computer);
                    }}
                    size="xs"
                    icon={<ArrowRightIcon />}
                    aria-label={""}
                  />
                </ButtonGroup>
                <span>
                  IR = 0x{(ir.machineCode >>> 0).toString(16)} ({ir.iType})
                </span>
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
