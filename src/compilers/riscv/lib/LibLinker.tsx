export interface LibInclude {
  mul: boolean;
  div: boolean;
}

const files = [require("./mul.s"), require("./div.s")];

console.log(files);

export const getLibFiles = () => {
  const requests = files.map((file) => {
    return fetch(file).then((response) => response.text());
  });
  let sources: string[] = [];
  const p = Promise.all(requests).then((results) => {
    sources = results;

    console.log("1:", sources);
    return sources;
  });
  console.log("2:", sources);
  return sources;
};
