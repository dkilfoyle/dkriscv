export interface DocPosition {
  startLine: number;
  startCol?: number;
  endLine: number;
  endCol?: number;
  startAntlrPos?: number;
  endAntlrPos?: number;
  startCMPos?: number;
  endCMPos?: number;
}

export const getEmptyDocPosition = () => {
  return {
    startLine: 0,
    startCol: 0,
    endLine: 0,
    endCol: 0,
    startAntlrPos: 0,
    endAntlrPos: 0,
    startCMPos: 0,
    endCMPos: 0,
  };
};

export const loadTextFile = async (filename) => {
  return fetch(filename)
    .then((response) => response.text())
    .then((textContent) => {
      return textContent;
    });
};
