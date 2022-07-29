import React, { useEffect, useReducer, useState } from "react";
import "react-reflex/styles.css";
import { CodeEditor } from "./ui/editor/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Computer } from "./simulator/System";
import "./app.css";
import produce, { enableMapSet } from "immer";
import { ChakraProvider, theme, Box, Flex } from "@chakra-ui/react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import { Schematic } from "./ui/schematic/schematic";
import { ASMRootNode } from "./languages/riv32asm/parser/astNodes";
import { Instruction } from "./languages/riv32asm/parser/Instruction";
import { AstCNode } from "./languages/simpleC/parser/astNodes";
import { ActivityBar } from "./ui/ActivityBar";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";

import { useSettingsStore } from "./store/useSettingsStore";
import { ActivityPanel } from "./ui/ActivityPanel";
import {
  CodeHighlightInfo,
  emptyHighlightRange,
  filterRangeMap,
  findRangeMap,
  getHighlightColor,
  highlightColors,
  RangeMap,
} from "./utils/antlr";

enableMapSet();

const compiler = new ASMGenerator();
const assembler = new MCGenerator();

export const ComputerContext = React.createContext<{
  computer: Computer;
  breakpoints: Set<number>;
  render: React.DispatchWithoutAction;
} | null>(null);

const computer = new Computer();
let instructions: Instruction[] = [];
let n = 0;

export const App = () => {
  console.log("render", n);
  n = n + 1;
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");

  const [highlightPC, highlightRanges, filename] = useSettingsStore((state) => [
    state.highlightPC,
    state.highlightRanges,
    state.filename,
  ]);

  // const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [asmLinePos, setAsmLinePos] = useState(0);
  const [codeLinePos, setCodeLinePos] = useState(0);

  const [breakpoints, setBreakpoints] = useState(new Set<number>());

  const [codeRange, setCodeRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [asmRange, setAsmRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [memRange, setMemRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());

  const [codeAsmRangeMap, setCodeAsmRangeMap] = useState<RangeMap>([]);
  const [asmMachineCodeRangeMap, setAsmMachineCodeRangeMap] = useState<RangeMap>([]);

  const [activity, setActivity] = useState(0);

  useEffect(() => {
    fetch(require("./languages/simpleC/examples/" + filename))
      .then((response) => response.text())
      .then((textContent) => {
        setCode(textContent);
      });
  }, [filename]);

  const updateCAst = (ast: AstCNode) => {
    const { code: asm, rangeMap } = compiler.compile(ast, code);
    setAsm(asm);
    setCodeAsmRangeMap(rangeMap);
  };

  const updateAsmAst = (ast: ASMRootNode) => {
    const { rangeMap, memWords, instructions: newinstructions } = assembler.assemble(ast);
    console.log("updateAsmAst", newinstructions.length, memWords.length);
    setAsmRange(new CodeHighlightInfo());
    // setInstructions(instructions);
    instructions = newinstructions;
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

  // Cursor position range highlighting

  function setRanges(matches) {
    setCodeRange(
      produce((draft) => {
        draft.code = matches
          .map((m, i) => ({ ...m.left, col: getHighlightColor(i) }))
          .slice()
          .reverse(); //, col: "#d4fafa" }));
      })
    );
    setAsmRange(
      produce((draft) => {
        draft.code = matches
          .map((m, i) => ({ ...m.right, col: getHighlightColor(i) }))
          .slice()
          .reverse(); //, col: "#d4fafa" }));
      })
    );
  }

  // highlight code and asm based on asm cursor
  useEffect(() => {
    if (highlightRanges)
      setRanges(filterRangeMap(codeAsmRangeMap, { start: asmLinePos, side: "right" }));
    else setRanges([emptyHighlightRange()]);
  }, [asmLinePos, codeAsmRangeMap, highlightRanges]);

  // highlight code and asm based on code cursor
  useEffect(() => {
    if (highlightRanges)
      setRanges(filterRangeMap(codeAsmRangeMap, { start: codeLinePos, side: "left" }));
    else setRanges([]);
  }, [codeLinePos, codeAsmRangeMap, highlightRanges]);

  // highlight instructions matching the highlighted asm range
  useEffect(() => {
    if (highlightRanges && asmMachineCodeRangeMap.length) {
      setMemRange(
        produce((draft) => {
          draft.code = [];
          asmRange.code
            .slice()
            .reverse()
            .forEach((aRange, i) => {
              // for the current range in asm find overlapping instructions
              const insts = asmMachineCodeRangeMap
                .filter(
                  (rm) => rm.left.startLine >= aRange.startLine && rm.left.endLine <= aRange.endLine
                )
                .map((rm) => rm.right.startLine);
              draft.code.push({
                startLine: Math.min(...insts),
                endLine: Math.max(...insts),
                col: highlightColors[Math.min(i, highlightColors.length - 1)],
              });
            });
          console.log(draft.code);
        })
      );
    }
  }, [asmMachineCodeRangeMap, asmRange.code, highlightRanges]);

  const [pc, render] = useReducer((p) => !p, false);

  useEffect(() => {
    const i = instructions[computer.cpu.pcLast / 4];
    console.log("useEffect: setCodeRange and setAsmRange", i);
    if (i) {
      // find the instruction matching pcLast - this has the corresponding asm pos stored in pos
      // look up asm pos (right) in codeAsmRangeMap to get the code pos (left)
      setCodeRange(
        produce((draft) => {
          const codeRange = codeAsmRangeMap
            // .slice()
            // .reverse()
            .find((x) => i.pos.startLine >= x.right.startLine && i.pos.endLine <= x.right.endLine);
          if (codeRange && highlightPC) {
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
          if (highlightPC) draft.pc = { ...i.pos, col: "#ede7f6" };
          else draft.pc = { startLine: 0, endLine: 0, col: "red" };
        })
      );
    }
  }, [codeAsmRangeMap, highlightPC, pc]);

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
              <Box p={2}>
                <ActivityPanel activity={activity}></ActivityPanel>
              </Box>
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
              <Schematic memoryHighlightRanges={memRange}></Schematic>
            </ReflexElement>
          </ReflexContainer>
        </ComputerContext.Provider>
      </Flex>
    </ChakraProvider>
  );
};
