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

export type AllowedTypes = "int" | "string" | "void" | "bool";

export class SimpleCType {
  dimensions: number[];
  baseType: AllowedTypes;
  constructor(baseType: AllowedTypes, dimensions = [0]) {
    this.baseType = baseType;
    this.dimensions = dimensions.slice();
  }
  equals(t: SimpleCType) {
    return this.baseType === t.baseType && this.dimensions[0] === t.dimensions[0];
  }
  isArray() {
    return this.dimensions[0] > 0;
  }
  toString() {
    return this.isArray() ? this.baseType + "[]" : this.baseType;
  }
  get sizeInBytes() {
    return this.dimensions[0] === 0 ? 4 : 4 * this.dimensions.reduce((cur, prev) => cur * prev, 1);
  }
}

// export class Signature {
//   returnType: AllowedTypes;
//   dimensions: number[];
//   paramTypes: AllowedTypes[];
//   constructor(returnType: AllowedTypes) {
//     this.returnType = returnType;
//   }
//   getByteSize() {
//     return 0;
//   }
// }

// export class VariableSignature extends Signature {
//   constructor(returnType: AllowedTypes) {
//     super(returnType);
//     if (returnType === "void") throw new Error("Void is not a valid variable type");
//   }
//   getByteSize() {
//     return 4;
//   }
// }

// export class ArraySignature extends VariableSignature {
//   constructor(returnType: AllowedTypes, dimensions: number[]) {
//     super(returnType === "int" ? "int[]" : returnType);
//     if (returnType !== "int") throw new Error("non integer arrays not implemented");
//     this.dimensions = dimensions;
//   }
//   getByteSize() {
//     return 4 * this.dimensions.reduce((cur, prev) => cur * prev, 1);
//   }
// }

export class FunctionSignature {
  returnType: SimpleCType;
  paramTypes: SimpleCType[];
  constructor(returnType: SimpleCType, params: SimpleCType[]) {
    this.returnType = returnType;
    this.paramTypes = params;
  }
}
