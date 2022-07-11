import { Box, Flex, VStack } from "@chakra-ui/react";
import { ALU } from "./alu";
import { Bus } from "./bus";
import { Comparator } from "./comparator";
import { IR } from "./ir";
import { Ram } from "./ram";
import { PC } from "./pc";
import { Regs } from "./regs";
import { Stack } from "./stack";
import { CodeHighlightInfo, HighlightRange } from "../CodeEditor";

export const Schematic = (props: { memoryHighlightRanges: CodeHighlightInfo }) => {
  return (
    <Flex direction="column" height="100vh" gap={4} padding={4} className="schematic">
      <Box className="irBox">
        <IR></IR>
      </Box>
      <Flex gap={4} style={{ overflow: "hidden" }}>
        <Box
          flex="0 0 auto"
          bg="#E8F5E9"
          borderRadius="md"
          borderWidth="1px"
          style={{ overflow: "auto", width: "220px" }}>
          <Ram highlightRanges={props.memoryHighlightRanges}></Ram>
        </Box>
        <VStack flex="1 1 auto" style={{ overflow: "hidden" }}>
          <Box bg="#ede7f6" className="componentBox">
            <PC></PC>
          </Box>
          <Box bg="#e1f5fe" className="componentBox">
            <ALU></ALU>
          </Box>
          <Box bg="#fbe9e7" className="componentBox">
            <Comparator></Comparator>
          </Box>
          <Box bg="#fff8e1" className="componentBox">
            <Bus></Bus>
          </Box>
          <Box bg="#e8f5e9" className="componentBox">
            <Stack></Stack>
          </Box>
        </VStack>
        <Box className="regBox" flex="0 0 auto">
          <Regs></Regs>
        </Box>
      </Flex>
    </Flex>
  );
};
