import { Box, Flex, Grid, GridItem, HStack, Stack, VStack } from "@chakra-ui/react";
import { Computer } from "../../simulator/System";
import { ALU } from "./alu";
import { Bus } from "./bus";
import { Comparator } from "./comparator";
import { IR } from "./ir";
import { Ram } from "./ram";
import { PC } from "./pc";
import { Regs } from "./regs";

export const Schematic = (props: { computer: Computer; incStep: () => void; memoryHighlightRange: [number, number] }) => {
  return (
    <Flex direction="column" height="100vh" gap={4} padding={4}>
      <Box borderRadius="md" borderWidth="1px" width="100%">
        <IR ir={props.computer.cpu.instr} computer={props.computer} incStep={props.incStep}></IR>
      </Box>
      <Flex gap={4} style={{ overflow: "hidden" }}>
        <Box borderRadius="md" borderWidth="1px" style={{ overflow: "auto", width: "250px" }}>
          <Ram memory={props.computer.mem}></Ram>
        </Box>
        <VStack flex="1">
          <Box borderRadius="md" borderWidth="1px" width="200px">
            <PC pc={props.computer.cpu.pc}></PC>
          </Box>
          <Box borderRadius="md" borderWidth="1px" width="200px">
            <ALU cpu={props.computer.cpu}></ALU>
          </Box>
          <Box borderRadius="md" borderWidth="1px" width="200px">
            <Comparator></Comparator>
          </Box>
          <Box borderRadius="md" borderWidth="1px" width="200px">
            <Bus></Bus>
          </Box>
        </VStack>
        <Box borderRadius="md" borderWidth="1px" style={{ overflow: "auto" }} width="200px">
          <Regs cpu={props.computer.cpu}></Regs>
        </Box>
      </Flex>
    </Flex>
  );
};
