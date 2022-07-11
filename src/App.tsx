import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import { ASMRootNode } from "./assemblers/riscv/builder";
import {
  CodeEditor,
  CodeHighlightInfo,
  HighlightRange,
  RangeMap,
  RangeMapEntry,
} from "./ui/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { AstNode } from "./languages/simpleC/nodes";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Schematic } from "./ui/schematic/schematic";
import { Computer } from "./simulator/System";
import { Instruction } from "./assemblers/riscv/Instruction";

import "./app.css";
import produce from "immer";
import { DRAFT_STATE } from "immer/dist/internal";

const codeFile = require("./languages/simpleC/examples/fib.tc");
const compiler = new ASMGenerator();
const assembler = new MCGenerator();

export const ComputerContext = React.createContext<{
  computer: Computer;
  render: React.DispatchWithoutAction;
} | null>(null);
const computer = new Computer();

export const App = () => {
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");
  const [memory, setMemory] = useState([]);

  const [instructions, setInstructions] = useState<Instruction[]>([]);

  const [asmPos, setAsmPos] = useState(0);
  const [codePos, setCodePos] = useState(0);
  const [memPos, setMemPos] = useState(0);

  const [codeRange, setCodeRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [asmRange, setAsmRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());
  const [memRange, setMemRange] = useState<CodeHighlightInfo>(new CodeHighlightInfo());

  const [codeAsmRangeMap, setCodeAsmRangeMap] = useState<RangeMap>([]);
  const [asmMachineCodeRangeMap, setAsmMachineCodeRangeMap] = useState<RangeMap>([]);

  useEffect(() => {
    fetch(codeFile)
      .then((response) => response.text())
      .then((textContent) => {
        setCode(textContent);
      });
  });

  const updateCAst = (ast: AstNode) => {
    const { code: asm, rangeMap } = compiler.codegen(ast);
    setAsm(asm);
    setCodeAsmRangeMap(rangeMap);
  };

  const updateAsmAst = (ast: ASMRootNode) => {
    const { instructions, rangeMap } = assembler.codegen(ast);
    console.log("updateAsmAst", instructions.length);
    setAsmRange(new CodeHighlightInfo());
    setInstructions(instructions);
    // setMemory(instructions.map((i) => i.machineCode));
    instructions.forEach((ins, i) => computer.mem.write(i * 4, 4, ins.machineCode));
    setAsmMachineCodeRangeMap(rangeMap);
  };

  function setRanges(matches) {
    setCodeRange(
      produce((draft) => {
        draft.code = matches.map((m) => ({ ...m.left, col: "#d4fafa" }));
      })
    );
    setAsmRange(
      produce((draft) => {
        draft.code = matches.map((m) => ({ ...m.right, col: "#d4fafa" }));
      })
    );
  }

  // response to change of asm position -> set code/asm highlight, preserve pc
  useEffect(() => {
    // find the rangemap entry for the current asm position
    const matches = codeAsmRangeMap
      .slice()
      .reverse()
      .filter((x) => asmPos >= x.right.startPos && asmPos <= x.right.endPos);
    setRanges(matches);
  }, [asmPos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const matches = codeAsmRangeMap
      .slice()
      .reverse()
      .filter((x) => codePos >= x.left.startPos && codePos <= x.left.endPos);
    setRanges(matches);
  }, [codePos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = asmMachineCodeRangeMap
      .slice()
      .reverse()
      .find((x) => asmPos >= x.left.startPos && asmPos <= x.left.endPos);
    if (codeRange) {
      // setMemRange((arr) => [...arr, codeRange.right]);
    }
  }, [asmPos, asmMachineCodeRangeMap]);

  useEffect(() => {
    const i = instructions[computer.cpu.pcLast / 4];
    if (i) {
      // find the instruction matching pcLast - this has the corresponding asm pos stored in pos
      // look up asm pos (right) in codeAsmRangeMap to get the code pos (left)
      setCodeRange(
        produce((draft) => {
          const codeRange = codeAsmRangeMap
            .slice()
            .reverse()
            .find((x) => i.pos[0] >= x.right.startPos && i.pos[0] <= x.right.endPos);
          if (codeRange) {
            draft.pc = {
              startPos: codeRange.left.startPos,
              endPos: codeRange.left.endPos,
              col: "#ede7f6",
            };
          } else {
            debugger;
            draft.pc = {
              startPos: 0,
              endPos: 0,
              col: "red",
            };
          }
        })
      );

      setAsmRange(
        produce((draft) => {
          draft.pc = { startPos: i.pos[0], endPos: i.pos[1], col: "#ede7f6" };
        })
      );
    }
  }, [instructions, codeAsmRangeMap, computer.cpu.pcLast]);

  const [, render] = useReducer((p) => !p, false);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh">
        <ComputerContext.Provider value={{ computer, render }}>
          <ReflexContainer orientation="vertical">
            <ReflexElement className="c-pane">
              <CodeEditor
                code={code}
                lang="simpleC"
                updateAst={updateCAst}
                updatePos={setCodePos}
                highlightRanges={codeRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="asm-pane">
              <CodeEditor
                code={asm}
                lang="simpleASM"
                updateAst={updateAsmAst}
                updatePos={setAsmPos}
                highlightRanges={asmRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="sim-pane">
              <Schematic memoryHighlightRanges={memRange}></Schematic>
            </ReflexElement>
          </ReflexContainer>
        </ComputerContext.Provider>
      </Box>
    </ChakraProvider>
  );
};
