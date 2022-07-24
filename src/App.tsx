import React, { useEffect, useReducer, useState } from "react";
import "react-reflex/styles.css";
import { CodeEditor, CodeHighlightInfo, HighlightRange, RangeMap } from "./ui/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Computer } from "./simulator/System";
import "./app.css";
import produce, { enableMapSet } from "immer";
import { ChakraProvider, theme, Box, Flex, VStack, Checkbox } from "@chakra-ui/react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import { Schematic } from "./ui/schematic/schematic";
import { ASMRootNode } from "./languages/riv32asm/parser/astNodes";
import { Instruction } from "./languages/riv32asm/parser/Instruction";
import { AstCNode } from "./languages/simpleC/parser/astNodes";
import { ActivityBar } from "./ui/ActivityBar";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import "rc-tree/assets/index.css";
import Tree from "rc-tree";

enableMapSet();

const compiler = new ASMGenerator();
const assembler = new MCGenerator();

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

export const ComputerContext = React.createContext<{
  computer: Computer;
  breakpoints: Set<number>;
  render: React.DispatchWithoutAction;
} | null>(null);
const computer = new Computer();

export const App = () => {
  const [filename, setFilename] = useState("fib.tc");
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");

  const [optionHighlightPC, setOptionHighlighPC] = useState(true);
  const [optionHighlightRanges, setOptionHighlighRanges] = useState(true);

  const [instructions, setInstructions] = useState<Instruction[]>([]);

  const [asmLinePos, setAsmLinePos] = useState(0);
  const [codeLinePos, setCodeLinePos] = useState(0);

  const [breakpoints, setBreakpoints] = useState(new Set<number>());

  const [codeRange, setCodeRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [asmRange, setAsmRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [memRange, setMemRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());

  const [codeAsmRangeMap, setCodeAsmRangeMap] = useState<RangeMap>([]);
  const [asmMachineCodeRangeMap, setAsmMachineCodeRangeMap] = useState<RangeMap>([]);

  const [activity, setActivity] = useState(0);

  const findRangeMap = (
    rangeMap: RangeMap,
    criteria: { start: number; end?: number; side: "left" | "right" }
  ) => {
    const end = criteria.end || criteria.start;
    return rangeMap.find(
      (x) => criteria.start >= x[criteria.side].startLine && end <= x[criteria.side].endLine
    );
  };

  useEffect(() => {
    fetch(require("./languages/simpleC/examples/" + filename))
      .then((response) => response.text())
      .then((textContent) => {
        setCode(textContent);
      });
  }, [filename]);

  const updateCAst = (ast: AstCNode) => {
    const { code: asm, rangeMap } = compiler.codegen(ast, code);
    setAsm(asm);
    setCodeAsmRangeMap(rangeMap);
  };

  const updateAsmAst = (ast: ASMRootNode) => {
    const { rangeMap, memWords, instructions } = assembler.assemble(ast);
    console.log("updateAsmAst", instructions.length, memWords.length);
    setAsmRange(new CodeHighlightInfo());
    setInstructions(instructions);
    computer.resetAndLoad(memWords);

    setAsmMachineCodeRangeMap(rangeMap);
  };

  const updateAsmBreakpoints = (pos: number, on: boolean) => {
    const match = findRangeMap(asmMachineCodeRangeMap, { start: pos, side: "left" });
    if (!match) return; // eg clicked on a label

    const address = match.right.startLine * 4;

    if (on)
      setBreakpoints(
        produce(breakpoints, (draft) => {
          draft.add(address);
        })
      );
    else
      setBreakpoints(
        produce(breakpoints, (draft) => {
          draft.delete(address);
        })
      );
  };

  const emptyHighlightRange: () => HighlightRange = () => ({
    startLine: 0,
    endLine: 0,
    col: "red",
  });

  function setRanges(matches) {
    setCodeRange(
      produce((draft) => {
        draft.code = matches.map((m) => ({ ...m.left })); //, col: "#d4fafa" }));
      })
    );
    setAsmRange(
      produce((draft) => {
        draft.code = matches.map((m) => ({ ...m.right })); //, col: "#d4fafa" }));
      })
    );
  }

  // response to change of asm position -> set code/asm highlight, preserve pc
  useEffect(() => {
    // find the rangemap entry for the current asm position
    const matches = codeAsmRangeMap.filter(
      (x) => asmLinePos >= x.right.startLine && asmLinePos <= x.right.endLine
    );
    if (optionHighlightRanges) setRanges(matches);
    else setRanges([emptyHighlightRange()]);
  }, [asmLinePos, codeAsmRangeMap, optionHighlightRanges]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const matches = codeAsmRangeMap.filter(
      (x) => codeLinePos >= x.left.startLine && codeLinePos <= x.left.endLine
    );
    if (optionHighlightRanges) setRanges(matches);
    else setRanges([emptyHighlightRange()]);
  }, [codeLinePos, codeAsmRangeMap, optionHighlightRanges]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = asmMachineCodeRangeMap.find(
      (x) => asmLinePos >= x.left.startLine && asmLinePos <= x.left.endLine
    );
    if (codeRange) {
      // setMemRange((arr) => [...arr, codeRange.right]);
    }
  }, [asmLinePos, asmMachineCodeRangeMap]);

  useEffect(() => {
    const i = instructions[computer.cpu.pcLast / 4];
    if (i) {
      // find the instruction matching pcLast - this has the corresponding asm pos stored in pos
      // look up asm pos (right) in codeAsmRangeMap to get the code pos (left)
      setCodeRange(
        produce((draft) => {
          const codeRange = codeAsmRangeMap
            // .slice()
            // .reverse()
            .find((x) => i.pos.startLine >= x.right.startLine && i.pos.endLine <= x.right.endLine);
          if (codeRange && optionHighlightPC) {
            draft.pc = {
              ...codeRange.left,
              col: "#ede7f6",
            };
          } else {
            // debugger;

            // todo: handle pointer in library code
            draft.pc = {
              startLine: 0,
              endLine: 0,
              col: "red",
            };
          }
        })
      );

      setAsmRange(
        produce((draft) => {
          if (optionHighlightPC) draft.pc = { ...i.pos, col: "#ede7f6" };
          else draft.pc = { startLine: 0, endLine: 0, col: "red" };
        })
      );
    }
  }, [instructions, codeAsmRangeMap, optionHighlightPC, computer.cpu.pcLast]);

  const [, render] = useReducer((p) => !p, false);

  const activityPanel = () => {
    switch (activity) {
      case 0: // files
        return (
          <Tree
            treeData={fileTreeData as any}
            expandAction="click"
            fieldNames={{ key: "title" }}
            showLine
            onSelect={(keys) => {
              const x = keys[0].toString();
              if (x !== "Files") setFilename(x);
            }}></Tree>
        );
      case 1: // settings
        return (
          <VStack alignItems="start">
            <h2>Highlight</h2>
            <Checkbox
              isChecked={optionHighlightRanges}
              onChange={() => setOptionHighlighRanges(!optionHighlightRanges)}>
              Ranges
            </Checkbox>
            <Checkbox
              isChecked={optionHighlightPC}
              onChange={() => setOptionHighlighPC(!optionHighlightPC)}>
              PC
            </Checkbox>
          </VStack>
        );
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" fontSize="md" h="100vh">
        <ActivityBar
          checked={activity}
          icons={[VscFiles, VscSettingsGear]}
          onClick={(index) => {
            if (index === activity) setActivity(-1);
            else setActivity(index);
          }}></ActivityBar>
        <ComputerContext.Provider value={{ computer, breakpoints, render }}>
          <ReflexContainer orientation="vertical">
            <ReflexElement size={activity === -1 ? 0 : 100}>
              <Box p={2}>{activityPanel()}</Box>
            </ReflexElement>
            <ReflexSplitter />
            <ReflexElement className="c-pane">
              <CodeEditor
                code={code}
                lang="simpleC"
                updateAst={updateCAst}
                updatePos={setCodeLinePos}
                highlightRanges={codeRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="asm-pane">
              <CodeEditor
                code={asm}
                lang="simpleASM"
                updateAst={updateAsmAst}
                updatePos={setAsmLinePos}
                updateBreakpoints={updateAsmBreakpoints}
                highlightRanges={asmRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="sim-pane">
              {/* <Schematic memoryHighlightRanges={memRange} asmBreakpoints={breakpoints}></Schematic> */}
              <Schematic memoryHighlightRanges={memRange}></Schematic>
            </ReflexElement>
          </ReflexContainer>
        </ComputerContext.Provider>
      </Flex>
    </ChakraProvider>
  );
};
