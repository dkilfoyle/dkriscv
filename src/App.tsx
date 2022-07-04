import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import { ASMRootNode } from "./assemblers/riscv/builder";
import { CodeEditor, HighlightRange, RangeMap, RangeMapEntry } from "./ui/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { AstNode } from "./languages/simpleC/nodes";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Schematic } from "./ui/schematic/schematic";
import { Computer } from "./simulator/System";
import { Instruction } from "./assemblers/riscv/Instruction";

const codeFile = require("./languages/simpleC/examples/fib.tc");
const compiler = new ASMGenerator();
const assembler = new MCGenerator();

export const ComputerContext = React.createContext<{ computer: Computer; render: React.DispatchWithoutAction } | null>(null);
const computer = new Computer();

export const App = () => {
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");
  const [memory, setMemory] = useState([]);

  const [instructions, setInstructions] = useState<Instruction[]>([]);

  const [asmPos, setAsmPos] = useState(0);
  const [codePos, setCodePos] = useState(0);
  const [memPos, setMemPos] = useState(0);

  const [codeRange, setCodeRange] = useState<HighlightRange[]>([]);
  const [asmRange, setAsmRange] = useState<HighlightRange[]>([]);
  const [memRange, setMemRange] = useState<HighlightRange[]>([]);

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
    setInstructions(instructions);
    // setMemory(instructions.map((i) => i.machineCode));
    instructions.forEach((ins, i) => computer.mem.write(i * 4, 4, ins.machineCode));
    setAsmRange([]);
    setAsmMachineCodeRangeMap(rangeMap);
  };

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = codeAsmRangeMap
      .slice()
      .reverse()
      .find((x) => asmPos >= x.right.startPos && asmPos <= x.right.endPos);
    if (codeRange) {
      setCodeRange((arr) => [...arr, codeRange.left]);
      setAsmRange((arr) => [...arr, codeRange.right]);
    }
  }, [asmPos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = codeAsmRangeMap
      .slice()
      .reverse()
      .find((x) => codePos >= x.left.startPos && codePos <= x.left.endPos);

    if (codeRange) {
      setCodeRange((arr) => [...arr, codeRange.left]);
      setAsmRange((arr) => [...arr, codeRange.right]);
    }
  }, [codePos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = asmMachineCodeRangeMap
      .slice()
      .reverse()
      .find((x) => asmPos >= x.left.startPos && asmPos <= x.left.endPos);
    if (codeRange) {
      setMemRange((arr) => [...arr, codeRange.right]);
    }
  }, [asmPos, asmMachineCodeRangeMap]);

  useEffect(() => {
    const i = instructions[computer.cpu.pcLast / 4];

    if (i) {
      setCodeRange([]);
      setAsmRange([]);
      setAsmRange([{ startPos: i.pos[0], endPos: i.pos[1], col: "red" }]);
    }
  }, [computer.cpu.pcLast, instructions]);

  const [, render] = useReducer((p) => !p, false);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh">
        <ComputerContext.Provider value={{ computer, render }}>
          <ReflexContainer orientation="vertical">
            <ReflexElement className="c-pane">
              <CodeEditor code={code} lang="simpleC" updateAst={updateCAst} updatePos={setCodePos} highlightRanges={codeRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="asm-pane">
              <CodeEditor code={asm} lang="simpleASM" updateAst={updateAsmAst} updatePos={setAsmPos} highlightRanges={asmRange}></CodeEditor>
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
