// export class SimpleCType {
//   type: AllowedTypes;
//   isArray: boolean;
//   constructor(type: AllowedTypes, isArray: boolean = false) {
//     this.type = type;
//     this.isArray = isArray;
//   }
//   equals(t:SimpleCType) {
//     return (this.type == t.type && this.isArray == t.isArray)
//   }
// }

export type AllowedTypes = "int" | "int[]" | "string" | "void" | "bool";

export class Signature {
  returnType: AllowedTypes;
  dimensions: number[];
  paramTypes: AllowedTypes[];
  constructor(returnType: AllowedTypes) {
    this.returnType = returnType;
  }
  getByteSize() {
    return 0;
  }
}

export class VariableSignature extends Signature {
  constructor(returnType: AllowedTypes) {
    super(returnType);
    if (returnType === "void") throw new Error("Void is not a valid variable type");
  }
  getByteSize() {
    return 4;
  }
}

export class ArraySignature extends VariableSignature {
  constructor(returnType: AllowedTypes, dimensions: number[]) {
    super(returnType === "int" ? "int[]" : returnType);
    if (returnType !== "int") throw new Error("non integer arrays not implemented");
    this.dimensions = dimensions;
  }
  getByteSize() {
    return 4 * this.dimensions.reduce((cur, prev) => cur * prev, 1);
  }
}

export class FunctionSignature extends Signature {
  constructor(returnType: AllowedTypes, params: AllowedTypes[]) {
    super(returnType);
    this.paramTypes = params;
  }
}
