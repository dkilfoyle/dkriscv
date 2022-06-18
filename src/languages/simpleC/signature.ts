export type AllowedTypes = 'int' | 'string' | 'void' | 'bool';

export class Signature {
  returnType: AllowedTypes;
  dimensions: number[];
  paramTypes: AllowedTypes[];
  constructor(returnType: AllowedTypes) {
    this.returnType = returnType;
  }
  getByteSize() { return 0};
}

export class VariableSignature extends Signature {
  constructor(returnType: AllowedTypes) {
    super(returnType);
    if (returnType == "void") throw new Error("Void is not a valid variable type");
  }
  getByteSize() {
    return 4;
  }
}

export class ArraySignature extends VariableSignature {
  constructor(returnType: AllowedTypes, dimensions: number[]) {
    super(returnType);
    this.dimensions = dimensions;
  }
  getByteSize() {
    return 4 * this.dimensions.reduce((cur, prev) => cur*prev, 1);
  }
}

export class FunctionSignature extends Signature {
  constructor(returnType: AllowedTypes, params: AllowedTypes[]) {
    super(returnType);
    this.paramTypes = params;
  }
}