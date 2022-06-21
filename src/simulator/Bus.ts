import { unsigned } from "../utils/bits";
import { Device } from "./Device";

export class Bus {
  devices: Device[];
  error: boolean;
  constructor() {
    this.devices = [];
    this.error = false;
  }

  reset() {
    for (let d of this.devices) {
      d.reset();
    }
  }

  addDevice(device) {
    this.devices.push(device);
  }

  getDevices(address, size) {
    address = unsigned(address);
    return this.devices.filter((dev) => dev.accepts(address, size));
  }

  read(address, size, signed) {
    address = unsigned(address);
    const devices = this.getDevices(address, size);
    this.error = !devices.length;
    return this.error ? 0 : devices[0].read(address, size, signed);
  }

  write(address, size, value) {
    const devices = this.getDevices(address, size);
    this.error = !devices.length;
    for (let d of devices) {
      d.write(address, size, value);
    }
  }

  irq() {
    return this.devices.some((dev) => dev.irq());
  }
}
