import React, { useEffect, useReducer, useState } from "react";
import { CodeEditor } from "./ui/editor/CodeEditor";
import { ASMGenerator, CompilerError } from "./compilers/riscv/ASMGenerator";
import { MCGenerator } from "./assemblers/riscv/MCGenerator";
import { Computer } from "./simulator/System";
import "./app.css";
import produce, { enableMapSet } from "immer";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Schematic } from "./ui/schematic/schematic";
import { ASMRootNode } from "./languages/riv32asm/parser/astNodes";
import { Instruction } from "./languages/riv32asm/parser/Instruction";
import { AstCNode, AstError } from "./languages/simpleC/parser/astNodes";

import { ExpandButton, Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { useSettingsStore } from "./store/useSettingsStore";
import {
  CodeHighlightInfo,
  emptyHighlightRange,
  filterRangeMap,
  findRangeMap,
  getHighlightColor,
  highlightColors,
  RangeMap,
} from "./utils/antlr";
import { Sidebar } from "./ui/SideBar";
import { Mem } from "./ui/schematic/mem";

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

export const App = () => {
  // useEffect(() => {
  //   console.log("render", n);
  //   n = n + 1;
  // });

  const [code, setCode] = useState("");
  const [asm, setAsm] = useState("");

  const [compilerErrors, setCompilerErrors] = useState<CompilerError[]>([]);

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

  useEffect(() => {
    fetch(require("./languages/simpleC/examples/" + filename))
      .then((response) => response.text())
      .then((textContent) => {
        setCode(textContent);
      });
  }, [filename]);

  const updateCAst = (ast: AstCNode | null) => {
    console.log("UpdateCAst", ast);
    if (ast) {
      const { code: asm, rangeMap, errors } = compiler.compile(ast, code);
      setAsm(asm);
      setCodeAsmRangeMap(rangeMap);
      setCompilerErrors(errors);
    } else {
      setAsm("");
    }
  };

  const updateAsmAst = (ast: ASMRootNode) => {
    console.log("UpdateAsmAst", ast);
    const { rangeMap, memWords, instructions: newinstructions } = assembler.assemble(ast);
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
        })
      );
    }
  }, [asmMachineCodeRangeMap, asmRange.code, highlightRanges]);

  const [pc, render] = useReducer((p) => !p, false);

  useEffect(() => {
    const i = instructions[computer.cpu.pcLast / 4];
    // console.log("useEffect: setCodeRange and setAsmRange", i);
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

  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    Code: (
      <CodeEditor
        code={code}
        lang="simpleC"
        updateAst={updateCAst}
        updatePos={setCodeLinePos}
        compilerErrors={compilerErrors}
        highlightRanges={codeRange}></CodeEditor>
    ),
    Compiled: (
      <CodeEditor
        code={asm}
        lang="simpleASM"
        updateAst={updateAsmAst}
        updatePos={setAsmLinePos}
        updateBreakpoints={updateAsmBreakpoints}
        highlightRanges={asmRange}></CodeEditor>
    ),
    RiscV: <Schematic></Schematic>,
    Memory: <Mem memoryHighlightRanges={memRange}></Mem>,
    Menu: <Sidebar></Sidebar>,
  };

  return (
    <ChakraProvider theme={theme}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ComputerContext.Provider value={{ computer, breakpoints, render }}>
          <Mosaic<string>
            renderTile={(id, path) => (
              <MosaicWindow<string>
                path={path}
                createNode={() => "new"}
                title={id}
                toolbarControls={React.Children.toArray([<ExpandButton />])}>
                {ELEMENT_MAP[id]}
              </MosaicWindow>
            )}
            initialValue={{
              direction: "row",
              splitPercentage: 10,
              first: "Menu",
              second: {
                direction: "row",
                splitPercentage: 30,
                first: "Code",
                second: {
                  direction: "row",
                  splitPercentage: 50,
                  first: "Compiled",
                  second: {
                    direction: "column",
                    splitPercentage: 32,
                    first: "RiscV",
                    second: "Memory",
                  },
                },
              },
            }}
            blueprintNamespace="bp4"
          />
        </ComputerContext.Provider>
      </div>
    </ChakraProvider>
  );
};
