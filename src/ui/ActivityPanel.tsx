import { Checkbox, VStack } from "@chakra-ui/react";
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
    ],
  },
];

export const ActivityPanel = (props) => {
  const [highlightRanges, highlightPC, filename] = useSettingsStore((state) => [
    state.highlightRanges,
    state.highlightPC,
    state.filename,
  ]);
  switch (props.activity) {
    case 0: // files
      return (
        <Tree
          treeData={fileTreeData as any}
          expandAction="click"
          fieldNames={{ key: "title" }}
          showLine
          onSelect={(keys) => {
            const x = keys[0].toString();
            if (x !== "Files") useSettingsStore.setState({ filename: x });
          }}></Tree>
      );
    case 1: // settings
      return (
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
      );
  }
};
