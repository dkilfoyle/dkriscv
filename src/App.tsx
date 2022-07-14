import React, { useEffect, useReducer, useState } from "react";
import "react-reflex/styles.css";
import { CodeEditor, CodeHighlightInfo, RangeMap } from "./ui/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Computer } from "./simulator/System";
import "./app.css";
import produce from "immer";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import { Schematic } from "./ui/schematic/schematic";
import { ASMRootNode } from "./languages/riv32asm/parser/astNodes";
import { Instruction } from "./languages/riv32asm/parser/Instruction";
import { AstNode } from "./languages/simpleC/parser/astNodes";

const codeFile = require("./languages/simpleC/examples/fib.tc");
const compiler = new ASMGenerator();
const assembler = new MCGenerator();

export const ComputerContext = React.createContext<{
  computer: Computer;
  breakpoints: number[];
  render: React.DispatchWithoutAction;
} | null>(null);
const computer = new Computer();

export const App = () => {
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");

  const [instructions, setInstructions] = useState<Instruction[]>([]);

  const [asmLinePos, setAsmLinePos] = useState(0);
  const [codeLinePos, setCodeLinePos] = useState(0);

  const [breakpoints, setBreakpoints] = useState([]);

  const [codeRange, setCodeRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [asmRange, setAsmRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [memRange, setMemRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());

  const [codeAsmRangeMap, setCodeAsmRangeMap] = useState<RangeMap>([]);
  const [asmMachineCodeRangeMap, setAsmMachineCodeRangeMap] = useState<RangeMap>([]);

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
    fetch(codeFile)
      .then((response) => response.text())
      .then((textContent) => {
        setCode(textContent);
      });
  });

  const updateCAst = (ast: AstNode) => {
    const { code: asm, rangeMap } = compiler.codegen(ast, code);
    setAsm(asm);
    setCodeAsmRangeMap(rangeMap);
  };

  const updateAsmAst = (ast: ASMRootNode) => {
    const { instructions, rangeMap, dataSection, symbols } = assembler.codegen(ast);
    console.log("updateAsmAst", instructions.length);
    setAsmRange(new CodeHighlightInfo());
    setInstructions(instructions);
    // setMemory(instructions.map((i) => i.machineCode));
    instructions.forEach((ins, i) => computer.mem.write(i * 4, 4, ins.machineCode));
    const dataStart = instructions.length * 4;
    dataSection.data
      .slice(0, dataSection.pointer)
      .forEach((b, i) => computer.mem.write(dataStart + i, 1, b));
    setAsmMachineCodeRangeMap(rangeMap);
  };

  const updateAsmBreakpoints = (pos: number, on: boolean) => {
    const match =
      findRangeMap(asmMachineCodeRangeMap, { start: pos, side: "left" }).right.startLine * 4;

    if (on === false) {
      setBreakpoints([...breakpoints.filter((x) => x !== match)]);
    } else setBreakpoints([...breakpoints.filter((x) => x !== match), match]);
  };

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
    const matches = codeAsmRangeMap
      // .slice()
      // .reverse()
      .filter((x) => asmLinePos >= x.right.startLine && asmLinePos <= x.right.endLine);
    setRanges(matches);
  }, [asmLinePos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const matches = codeAsmRangeMap
      // .slice()
      // .reverse()
      .filter((x) => codeLinePos >= x.left.startLine && codeLinePos <= x.left.endLine);
    setRanges(matches);
  }, [codeLinePos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = asmMachineCodeRangeMap
      // .slice()
      // .reverse()
      .find((x) => asmLinePos >= x.left.startLine && asmLinePos <= x.left.endLine);
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
          if (codeRange) {
            draft.pc = {
              ...codeRange.left,
              col: "#ede7f6",
            };
          } else {
            debugger;
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
          draft.pc = { ...i.pos, col: "#ede7f6" };
        })
      );
    }
  }, [instructions, codeAsmRangeMap, computer.cpu.pcLast]);

  const [, render] = useReducer((p) => !p, false);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh">
        <ComputerContext.Provider value={{ computer, breakpoints, render }}>
          <ReflexContainer orientation="vertical">
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
      </Box>
    </ChakraProvider>
  );
};
