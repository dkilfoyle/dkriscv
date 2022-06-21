import { Bus } from "./Bus";
import { Memory } from "./Memory";
import { Processor } from "./Processor";

const memSize = 4096;

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
}
