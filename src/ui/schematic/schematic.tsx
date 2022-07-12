import { Box, Flex, VStack } from "@chakra-ui/react";
import { IR } from "./ir";
import { Ram } from "./ram";
import { Regs } from "./regs";
import { Stack } from "./stack";
import { CodeHighlightInfo } from "../CodeEditor";
import { DataPath } from "./datapath";

export const Schematic = (props: { memoryHighlightRanges: CodeHighlightInfo }) => {
  return (
    <Flex direction="column" height="100vh" gap={2} padding={2} className="schematic">
      <Box className="irBox">
        <IR></IR>
      </Box>
      <DataPath></DataPath>
      <Flex gap={4} style={{ overflow: "hidden" }}>
        <Box flex="0 0 auto" className="ramBox">
          <Ram highlightRanges={props.memoryHighlightRanges}></Ram>
        </Box>
        <VStack flex="1 1 auto" style={{ overflow: "hidden" }}>
          <Box className="ramBox">
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
