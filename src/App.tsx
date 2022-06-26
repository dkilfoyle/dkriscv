import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import { ASMRootNode } from "./assemblers/riscv/builder";
import { CodeEditor, RangeMap, RangeMapEntry } from "./ui/CodeEditor";
import { ASMGenerator } from "./compilers/riscv/ASMGenerator";
import { AstNode } from "./languages/simpleC/nodes";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Schematic } from "./ui/schematic/schematic";
import { Computer } from "./simulator/System";

const codeFile = require("./languages/simpleC/examples/fib.tc");
const compiler = new ASMGenerator();
const assembler = new MCGenerator();

const ComputerContext = React.createContext(null);
const computer = new Computer();

export const App = () => {
  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");
  const [memory, setMemory] = React.useState([]);

  const [asmPos, setAsmPos] = useState(0);
  const [codePos, setCodePos] = useState(0);
  const [memPos, setMemPos] = useState(0);

  const updateCodePos = (pos: number) => setCodePos(pos);
  const updateAsmPos = (pos: number) => setAsmPos(pos);
  const updateMemPos = (pos: number) => setMemPos(pos);

  const [codeRange, setCodeRange] = useState<[number, number]>();
  const [asmRange, setAsmRange] = useState<[number, number]>();
  const [memRange, setMemRange] = useState<[number, number]>();

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
    // setMemory(instructions.map((i) => i.machineCode));
    instructions.forEach((ins, i) => computer.mem.write(i * 4, 4, ins.machineCode));
    setAsmMachineCodeRangeMap(rangeMap);
  };

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = codeAsmRangeMap
      .slice()
      .reverse()
      .find((x) => asmPos >= x.right[0] && asmPos <= x.right[1]);
    if (codeRange) {
      setCodeRange(codeRange.left);
      setAsmRange(codeRange.right);
    }
  }, [asmPos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = codeAsmRangeMap
      .slice()
      .reverse()
      .find((x) => codePos >= x.left[0] && codePos <= x.left[1]);
    if (codeRange) {
      setCodeRange(codeRange.left);
      setAsmRange(codeRange.right);
    }
  }, [codePos, codeAsmRangeMap]);

  useEffect(() => {
    // find the rangemap entry for the current asm position
    const codeRange = asmMachineCodeRangeMap
      .slice()
      .reverse()
      .find((x) => asmPos >= x.left[0] && asmPos <= x.left[1]);
    if (codeRange) {
      setMemRange(codeRange.right);
    }
  }, [asmPos, asmMachineCodeRangeMap]);

  // useEffect(() => {
  //   if (asmPos) {
  //     console.log(asmPos);
  //     cmCodeRef.current.view.focus();
  //     const posMap = positionMap
  //       .slice()
  //       .reverse()
  //       .find((x) => asmPos >= x.asm[0] && asmPos <= x.asm[1]);
  //     if (posMap) {
  //       cmCodeRef.current.view.dispatch(cmCodeRef.current.view.state.update({ selection: EditorSelection.cursor(posMap.code[0]) }));
  //     }
  //   }

  //   if (cmAsmRef.current?.view) console.log("view:", cmAsmRef.current.view);
  //   if (cmAsmRef.current?.state) console.log("state:", cmAsmRef.current.state);
  // }, [asmPos]);

  const [step, setStep] = useState(0);
  const incStep = () => setStep(step + 1);

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh">
        <ComputerContext.Provider value={computer}>
          <ReflexContainer orientation="vertical">
            <ReflexElement className="c-pane">
              <CodeEditor code={code} lang="simpleC" updateAst={updateCAst} updatePos={updateCodePos} highlightRange={codeRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="asm-pane">
              <CodeEditor code={asm} lang="simpleASM" updateAst={updateAsmAst} updatePos={updateAsmPos} highlightRange={asmRange}></CodeEditor>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="sim-pane">
              <Schematic computer={computer} incStep={incStep} memoryHighlightRange={memRange}></Schematic>
            </ReflexElement>
          </ReflexContainer>
        </ComputerContext.Provider>
      </Box>
    </ChakraProvider>
  );
};
