import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import { useSettingsStore } from "../store/useSettingsStore";

const fileTreeData = [
  {
    title: "Files",
    children: [
      { title: "hello.tc" },
      { title: "fib.tc" },
      { title: "sum.tc" },
      { title: "mul.tc" },
      { title: "sqrt.tc" },
      { title: "blank.tc" },
      {
        title: "Tests",
        children: [
          {
            title: "math.tc",
          },
          {
            title: "array.tc",
          },
        ],
      },
    ],
  },
];

export const Sidebar = () => {
  const [highlightRanges, highlightPC, filename] = useSettingsStore((state) => [
    state.highlightRanges,
    state.highlightPC,
    state.filename,
  ]);

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Source Files
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Tree
            treeData={fileTreeData as any}
            autoExpandParent
            defaultExpandedKeys={["Files", "Tests"]}
            defaultSelectedKeys={[filename]}
            expandAction="click"
            fieldNames={{ key: "title" }}
            showLine
            onSelect={(keys, info) => {
              const x = keys[0].toString();
              if (!info.node.children) useSettingsStore.setState({ filename: x });
            }}></Tree>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Settings
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack alignItems="start">
            <h2>Highlight</h2>
            <Checkbox
              isChecked={highlightRanges}
              onChange={() => useSettingsStore.setState({ highlightRanges: !highlightRanges })}>
              Ranges
            </Checkbox>
            <Checkbox
              isChecked={highlightPC}
              onChange={() => useSettingsStore.setState({ highlightPC: !highlightPC })}>
              PC
            </Checkbox>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
