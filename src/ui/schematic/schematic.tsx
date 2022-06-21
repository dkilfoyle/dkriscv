import { Grid, GridItem } from "@chakra-ui/react";
import { Computer } from "../../simulator/System";
import { ALU } from "./alu";
import { Bus } from "./bus";
import { Comparator } from "./comparator";
import { IR } from "./ir";
import { Ram } from "./ram";
import { PC } from "./pc";
import { Regs } from "./regs";

export const Schematic = (props: { computer: Computer; memoryHighlightRange: [number, number] }) => {
  return (
    <Grid
      style={{ height: "100vh" }}
      templateAreas={`"ram ir ir ir"
                      "ram bus pc regs"
                      "ram bus alu regs"
                      "ram bus comp regs"`}
      gridTemplateRows={"100px 1fr 1fr 1fr"}
      gridTemplateColumns={"250px 1fr 1fr 1fr"}
      gap={4}
      padding={4}>
      <GridItem area={"ram"} borderRadius="md" borderWidth="1px" style={{ overflow: "auto", width: "250px" }}>
        <Ram memory={props.computer.mem}></Ram>
      </GridItem>
      <GridItem area={"ir"} borderRadius="md" borderWidth="1px">
        <IR ir={props.computer.cpu.instr}></IR>
      </GridItem>
      <GridItem area={"bus"} borderRadius="md" borderWidth="1px">
        <Bus></Bus>
      </GridItem>
      <GridItem area={"pc"} borderRadius="md" borderWidth="1px">
        <PC pc={props.computer.cpu.pc}></PC>
      </GridItem>
      <GridItem area={"alu"} borderRadius="md" borderWidth="1px">
        <ALU></ALU>
      </GridItem>
      <GridItem area={"regs"} borderRadius="md" borderWidth="1px" style={{ overflow: "auto" }}>
        <Regs cpu={props.computer.cpu}></Regs>
      </GridItem>
      <GridItem area={"comp"} borderRadius="md" borderWidth="1px">
        <Comparator></Comparator>
      </GridItem>
    </Grid>
  );
};
