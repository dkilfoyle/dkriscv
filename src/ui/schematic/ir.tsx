import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, ButtonGroup, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { Instruction, instructionFields, instructionFormats } from "../../assemblers/riscv/Instruction";
import { formatHex, unsignedSlice } from "../../utils/bits";

const colors = {
  fu: "#ffcbdb",
  rs: "#ddffdd",
  rd: "#ffb7b7",
  op: "#fffdd0",
  im: "#ddeeff",
};

export const IR = (props: { ir: Instruction }) => {
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
      {instructionFormats[props.ir.iType].map((field) => {
        const offsets = instructionFields[field];
        const length = offsets[0] - offsets[1] + 1;
        return (
          <Td colSpan={length} bg={colors[field.substring(0, 2)]}>
            <Center>{type === "name" ? field : formatField(unsignedSlice(props.ir.machineCode, offsets[0], offsets[1]), length)}</Center>
          </Td>
        );
      })}
    </Tr>
  );
  return (
    <TableContainer>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th colSpan={32}>
              IR: I Type {props.ir.machineCode}{" "}
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
            </Th>
          </Tr>
        </Thead>
        <Tbody fontFamily="monospace">
          <Tr>
            {[...Array(32)].map((x, i) => (
              <td>{31 - i}</td>
            ))}
          </Tr>
          {row("name")}
          {row("value")}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
