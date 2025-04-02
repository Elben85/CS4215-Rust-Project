export abstract class Type {
  abstract toString(): string;
  abstract compare(other: Type): boolean;
}

export class StringType extends Type {
  private static instance: StringType | null = null;
  private constructor() { super(); }
  static getInstance(): StringType {
    return this.instance ?? (this.instance = new StringType());
  }

  toString(): string {
    return "string";
  }

  compare(other: Type): boolean {
    return other instanceof StringType;
  }
}

export class NumberType extends Type {
  private static instance: NumberType | null = null;
  private constructor() { super(); }
  static getInstance(): NumberType {
    return this.instance ?? (this.instance = new NumberType());
  }
  toString(): string { return "number"; }
  compare(other: Type): boolean { return other instanceof NumberType; }
}

export class BooleanType extends Type {
  private static instance: BooleanType | null = null;
  private constructor() { super(); }
  static getInstance(): BooleanType {
    return this.instance ?? (this.instance = new BooleanType());
  }
  toString(): string { return "boolean"; }
  compare(other: Type): boolean { return other instanceof BooleanType; }
}

export class ObjectType extends Type {
  private static instance: ObjectType | null = null;
  private constructor() { super(); }
  static getInstance(): ObjectType {
    return this.instance ?? (this.instance = new ObjectType());
  }
  toString(): string { return "object"; }
  compare(other: Type): boolean { return other instanceof ObjectType; }
}

export class VoidType extends Type {
  private static instance: VoidType | null = null;
  private constructor() { super(); }
  static getInstance(): VoidType {
    return this.instance == null ? (new VoidType()) : new VoidType();
  }
  toString(): string { return "()"; }
  compare(other: Type): boolean { return other instanceof VoidType; }
}

export class FunctionType extends Type {
  private constructor(
    public readonly args: Type[],
    public readonly returnType: Type
  ) {
    super();
  }

  static withType(args: Type[], returnType: Type) {
    return new FunctionType(args, returnType)
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
}

export class PointerType extends Type {
  constructor(
    public readonly baseType: Type,
    public isMutable: boolean
  ) {
    super();
  }

  toString(): string {
    return `*${this.baseType.toString()}`;
  }

  compare(other: Type): boolean {
    return other instanceof PointerType
      && this.baseType.compare(other.baseType)
      && this.isMutable === other.isMutable
      ;
  }

  copy(): PointerType {
    return new PointerType(this.baseType, this.isMutable);
  }
}

// Type Instances
export const STRING_TYPE = StringType.getInstance();
export const NUMBER_TYPE = NumberType.getInstance();
export const BOOLEAN_TYPE = BooleanType.getInstance();
export const OBJECT_TYPE = ObjectType.getInstance();
export const VOID_TYPE = VoidType.getInstance();

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
