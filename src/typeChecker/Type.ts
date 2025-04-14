export abstract class Type {
  abstract toString(): string;
  abstract compare(other: Type): boolean;
  abstract copyable(): boolean;
}

export class NumberType extends Type {
  public constructor() { super(); }
  toString(): string { return "number"; }
  compare(other: Type): boolean { return other instanceof NumberType; }
  copyable(): boolean { return true; }
}

export class BooleanType extends Type {
  public constructor() { super(); }
  toString(): string { return "boolean"; }
  compare(other: Type): boolean { return other instanceof BooleanType; }
  copyable(): boolean { return true; }
}

export class UnknownType extends Type {
  public constructor() {
    super();
  }
  toString(): string { return "?"; }
  compare(other: Type): boolean { return other instanceof UnknownType; }
  copyable(): boolean { return false; }
}

export class VoidType extends Type {
  public constructor() { super(); }
  toString(): string { return "()"; }
  compare(other: Type): boolean { return other instanceof VoidType; }
  copyable(): boolean { return true; }
}

export class PointerType extends Type {
  constructor(
    public baseType: Type,
    public isMutable: boolean,
  ) {
    super();
  }

  toString(): string {
    return `*${this.baseType.toString()}`;
  }

  compare(other: Type): boolean {
    return other instanceof PointerType
      && this.isMutable === other.isMutable
      && this.baseType.compare(other.baseType)
      ;
  }

  copyable(): boolean { return !this.isMutable; }
}

export class FunctionType extends Type {
  public constructor(
    public readonly argSymbols: string[],
    public readonly args: Type[],
    public readonly returnType: Type
  ) {
    super();
  }

  toString(): string {
    const argsStr = this.args.map(arg => arg.toString()).join(", ");
    return `fn(${argsStr}) -> ${this.returnType.toString()}`;
  }

  compare(other: Type): boolean {
    return (
      other instanceof FunctionType &&
      this.returnType.compare(other.returnType) &&
      this.args.length === other.args.length &&
      this.args.every((arg, i) => arg.compare(other.args[i]))
    );
  }

  copyable(): boolean { return true };
}

// Type Instances
// export const STRING_TYPE = StringType.getInstance();
export const NUMBER_TYPE = new NumberType();
export const BOOLEAN_TYPE = new BooleanType();
// export const OBJECT_TYPE = ObjectType.getInstance();
export const VOID_TYPE = new VoidType();
export const UNKNOWN_TYPE = new UnknownType();

export function stringToType(str: string): Type {
  switch (str) {
    case "f64":
      return NUMBER_TYPE;
    case "bool":
      return BOOLEAN_TYPE;
    default:
      throw new Error(`Unknown type ${str}`);
  }
}
