import { ArrowForwardIcon, ArrowRightIcon, RepeatIcon } from "@chakra-ui/icons";
import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, ButtonGroup, Button, Center, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Instruction, instructionFields, instructionFormats } from "../../assemblers/riscv/Instruction";
import { Computer } from "../../simulator/System";
import { formatHex, unsignedSlice } from "../../utils/bits";
import "./schematic.css";

const colors = {
  fu: "#ffcbdb",
  rs: "#ddffdd",
  rd: "#ffb7b7",
  op: "#fffdd0",
  im: "#ddeeff",
};

export const IR = (props: { ir: Instruction; computer: Computer; incStep: () => void }) => {
  const [format, setFormat] = useState(10);
  const formatField = (x: number, length: number) => {
    switch (format) {
      case 2:
        return x.toString(2).padStart(length, "0");
      case 10:
        return x.toString(10);
      case 16:
        return "0x" + x.toString(16);
    }
  };
  const row = (type: "name" | "value") => (
    <Tr>
      {instructionFormats[props.ir.iType].map((field, i) => {
        const offsets = instructionFields[field];
        const length = offsets[0] - offsets[1] + 1;
        return (
          <Td key={i} colSpan={length} bg={colors[field.substring(0, 2)]}>
            <Center>{type === "name" ? field : formatField(unsignedSlice(props.ir.machineCode, offsets[0], offsets[1]), length)}</Center>
          </Td>
        );
      })}
    </Tr>
  );

  const handleStep = () => {
    props.computer.step();
    props.incStep();
  };

  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={32}>
              <HStack>
                <span>
                  IR: {props.ir.iType} Type = 0x{props.ir.machineCode.toString(16)}
                </span>
                <Spacer></Spacer>
                <ButtonGroup size="xs" isAttached variant="outline">
                  <IconButton onClick={handleStep} size="xs" icon={<RepeatIcon />} aria-label={""}></IconButton>
                  <IconButton onClick={handleStep} size="xs" icon={<ArrowForwardIcon />} aria-label={""} />
                  <IconButton
                    onClick={() => {
                      props.computer.run();
                      // props.setComputer(props.computer);
                    }}
                    size="xs"
                    icon={<ArrowRightIcon />}
                    aria-label={""}
                  />
                </ButtonGroup>
                <Spacer></Spacer>
                <ButtonGroup size="xs" isAttached variant="outline">
                  <Button onClick={() => setFormat(2)} size="xs">
                    B
                  </Button>
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
