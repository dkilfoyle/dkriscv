export interface Range {
  startLine: number;
  endLine: number;
}

export interface RangeLink {
  left?: Range;
  center?: Range;
  right?: Range;
}

export class RangeList {
  rangeLinks: RangeLink[];
  constructor() {
    this.rangeLinks = [];
  }

  find(side: "left" | "center" | "right", line: number) {
    return this.rangeLinks.find(
      (link) => line >= link[side].startLine && line <= link[side].endLine
    );
  }

  filter(side: "left" | "center" | "right", line: number) {
    return this.rangeLinks.filter(
      (link) => line >= link[side].startLine && line <= link[side].endLine
    );
  }
}
