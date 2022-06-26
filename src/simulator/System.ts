import { Bus } from "./Bus";
import { Memory } from "./Memory";
import { Processor } from "./Processor";

export const memSize = 4096;

export class Computer {
  bus: Bus;
  cpu: Processor;
  mem: Memory;
  constructor() {
    this.bus = new Bus();
    this.cpu = new Processor(32, this.bus);
    this.mem = new Memory(0, memSize);
    this.bus.addDevice(this.mem);
  }
  reset() {
    this.cpu.reset();
    // todo reset memory
  }
  step() {
    if (this.cpu.state === "fetch") this.cpu.fetch();
    if (this.cpu.state === "decode") this.cpu.decode();
    if (this.cpu.state === "compute") this.cpu.compute();
    if (this.cpu.state === "compare") this.cpu.compare();
    if (this.cpu.state === "loadStoreWriteBack") this.cpu.loadStoreWriteBack();
    if (this.cpu.state === "updatePC") this.cpu.updatePC();
  }
  run() {
    // todo
  }
}
