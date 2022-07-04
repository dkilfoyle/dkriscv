import { Box, Flex, VStack } from "@chakra-ui/react";
import { ALU } from "./alu";
import { Bus } from "./bus";
import { Comparator } from "./comparator";
import { IR } from "./ir";
import { Ram } from "./ram";
import { PC } from "./pc";
import { Regs } from "./regs";
import { Stack } from "./stack";
import { HighlightRange } from "../CodeEditor";

const skinnyScroll = {
  "&::-webkit-scrollbar": {
    width: "6px",
    borderRadius: "4px",
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
};

export const Schematic = (props: { memoryHighlightRanges: HighlightRange[] }) => {
  return (
    <Flex direction="column" height="100vh" gap={4} padding={4}>
      <Box borderRadius="md" borderWidth="1px" width="100%">
        <IR></IR>
      </Box>
      <Flex gap={4} style={{ overflow: "hidden" }}>
        <Box bg="#E8F5E9" borderRadius="md" borderWidth="1px" style={{ overflow: "auto", width: "250px" }} sx={skinnyScroll}>
          <Ram highlightRanges={props.memoryHighlightRanges}></Ram>
        </Box>
        <VStack flex="1">
          <Box bg="#ede7f6" className="componentBox">
            <PC></PC>
          </Box>
          <Box className="componentBox" bg="#e1f5fe">
            <ALU></ALU>
          </Box>
          <Box bg="#fbe9e7" className="componentBox">
            <Comparator></Comparator>
          </Box>
          <Box bg="#fff8e1" className="componentBox">
            <Bus></Bus>
          </Box>
          <Box bg="#e8f5e9" className="componentBox" sx={skinnyScroll}>
            <Stack></Stack>
          </Box>
        </VStack>
        <Box className="regBox" sx={skinnyScroll}>
          <Regs></Regs>
        </Box>
      </Flex>
    </Flex>
  );
};
