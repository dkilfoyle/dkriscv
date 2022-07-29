import { immerable } from "immer";

export const highlightColors = ["#4DD0E1", "#80DEEA", "#B2EBF2", "#E0F7FA"].reverse();

export const getHighlightColor = (i) => {
  return highlightColors[Math.min(i, highlightColors.length)];
};

export interface DocPosition {
  startLine: number;
  startCol?: number;
  endLine: number;
  endCol?: number;
}

export const getEmptyDocPosition = () => {
  return {
    startLine: 0,
    startCol: 0,
    endLine: 0,
    endCol: 0,
  };
};

export const loadTextFile = async (filename) => {
  return fetch(filename)
    .then((response) => response.text())
    .then((textContent) => {
      return textContent;
    });
};

export const emptyHighlightRange: () => HighlightRange = () => ({
  startLine: 0,
  endLine: 0,
  col: "red",
});

export interface HighlightRange extends DocPosition {
  col: string;
  filename?: string;
}

export interface RangeMapEntry {
  left: HighlightRange;
  right: HighlightRange;
  name?: string;
}
export type RangeMap = RangeMapEntry[];

export const findRangeMap = (
  rangeMap: RangeMap,
  criteria: { start: number; end?: number; side: "left" | "right" }
) => {
  const end = criteria.end || criteria.start;
  return rangeMap.find(
    (x) => criteria.start >= x[criteria.side].startLine && end <= x[criteria.side].endLine
  );
};

export const filterRangeMap = (
  rangeMap: RangeMap,
  criteria: { start: number; end?: number; side: "left" | "right" }
) => {
  const end = criteria.end || criteria.start;
  return rangeMap.filter(
    (x) => criteria.start >= x[criteria.side].startLine && end <= x[criteria.side].endLine
  );
};

export class CodeHighlightInfo {
  [immerable] = true;
  pc: HighlightRange;
  code: HighlightRange[];
  constructor() {
    this.pc = { startLine: 0, endLine: 0, col: "transparent" };
    this.code = [];
  }
  toArray() {
    return [...this.code, this.pc];
  }
}
