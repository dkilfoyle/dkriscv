import { Box, Flex, VStack } from "@chakra-ui/react";
import { ALU } from "./alu";
import { Bus } from "./bus";
import { Comparator } from "./comparator";
import { IR } from "./ir";
import { Ram } from "./ram";
import { PC } from "./pc";
import { Regs } from "./regs";
import { Stack } from "./stack";

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

export const Schematic = (props: { incStep: () => void; memoryHighlightRange: [number, number] }) => {
  return (
    <Flex direction="column" height="100vh" gap={4} padding={4}>
      <Box borderRadius="md" borderWidth="1px" width="100%">
        <IR incStep={props.incStep}></IR>
      </Box>
      <Flex gap={4} style={{ overflow: "hidden" }}>
        <Box bg="#e8f5e9" borderRadius="md" borderWidth="1px" style={{ overflow: "auto", width: "250px" }} sx={skinnyScroll}>
          <Ram></Ram>
        </Box>
        <VStack flex="1">
          <Box borderRadius="md" borderWidth="1px" width="200px" bg="#e1f5fe">
            <PC></PC>
          </Box>
          <Box borderRadius="md" borderWidth="1px" width="200px" bg="#ede7f6">
            <ALU></ALU>
          </Box>
          <Box bg="#fbe9e7" borderRadius="md" borderWidth="1px" width="200px">
            <Comparator></Comparator>
          </Box>
          <Box bg="#fff8e1" borderRadius="md" borderWidth="1px" width="200px">
            <Bus></Bus>
          </Box>
          <Box bg="#e8f5e9" borderRadius="md" borderWidth="1px" width="200px" style={{ overflow: "auto", width: "250px" }} sx={skinnyScroll}>
            <Stack></Stack>
          </Box>
        </VStack>
        <Box borderRadius="md" borderWidth="1px" style={{ overflow: "auto" }} width="200px" sx={skinnyScroll}>
          <Regs></Regs>
        </Box>
      </Flex>
    </Flex>
  );
};
