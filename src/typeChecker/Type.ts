import type { identifierInformation } from "./TypeChecker";

export type Boxed<T> = {
  value: T
}

export abstract class Type {
  public isDropped: boolean = false;
  public owner: identifierInformation = null; //  identifier information 

  abstract toString(): string;
  abstract compare(other: Type): boolean;
  abstract copyable(): boolean;
  abstract isValid(): boolean;
  abstract drop(): void;
  copy?(): Type;
}

// export class StringType extends Type {
//   private static instance: StringType | null = null;
//   private constructor() { super(); }
//   static getInstance(): StringType {
//     return this.instance ?? (this.instance = new StringType());
//   }

//   toString(): string {
//     return "string";
//   }

//   compare(other: Type): boolean {
//     return other instanceof StringType;
//   }
// }

export class NumberType extends Type {
  public constructor() { super(); }
  toString(): string { return "number"; }
  compare(other: Type): boolean { return other instanceof NumberType; }
  copyable(): boolean { return true; }
  copy(): NumberType { return new NumberType(); }
  drop(): void { this.isDropped = true; }
  isValid(): boolean { return !this.isDropped; }
}

export class BooleanType extends Type {
  public constructor() { super(); }
  toString(): string { return "boolean"; }
  compare(other: Type): boolean { return other instanceof BooleanType; }
  copyable(): boolean { return true; }
  copy(): BooleanType { return new BooleanType(); }
  drop(): void { this.isDropped = true; }
  isValid(): boolean { return !this.isDropped; }
}

// export class ObjectType extends Type {
//   private static instance: ObjectType | null = null;
//   private constructor() { super(); }
//   static getInstance(): ObjectType {
//     return this.instance ?? (this.instance = new ObjectType());
//   }
//   toString(): string { return "object"; }
//   compare(other: Type): boolean { return other instanceof ObjectType; }
// }

export class UnknownType extends Type {
  public constructor() {
    super();
    this.isDropped = true;
  }
  toString(): string { return "?"; }
  compare(other: Type): boolean { return other instanceof UnknownType; }
  copyable(): boolean { return false; }
  copy(): UnknownType { return new UnknownType(); }
  drop(): void { }
  isValid(): boolean { return false; }
}

export class VoidType extends Type {
  public constructor() { super(); }
  toString(): string { return "()"; }
  compare(other: Type): boolean { return other instanceof VoidType; }
  copyable(): boolean { return true; }
  copy(): VoidType { return new VoidType(); }
  drop(): void { this.isDropped = true; }
  isValid(): boolean { return !this.isDropped; }
}

// export class FunctionType extends Type {
//   private constructor(
//     public readonly args: Type[],
//     public readonly returnType: Type
//   ) {
//     super();
//   }

//   static withType(args: Type[], returnType: Type) {
//     return new FunctionType(args, returnType)
//   }

//   toString(): string {
//     const argsStr = this.args.map(arg => arg.toString()).join(", ");
//     return `fn(${argsStr}) -> ${this.returnType.toString()}`;
//   }

//   compare(other: Type): boolean {
//     return (
//       other instanceof FunctionType &&
//       this.returnType.compare(other.returnType) &&
//       this.args.length === other.args.length &&
//       this.args.every((arg, i) => arg.compare(other.args[i]))
//     );
//   }
// }

export class PointerType extends Type {
  constructor(
    public baseType: Boxed<Type>,
    public isMutable: boolean,
  ) {
    super();
  }

  toString(): string {
    return `*${this.baseType.toString()}`;
  }

  compare(other: Type): boolean {
    return other instanceof PointerType
      && this.baseType.value.compare(other.baseType.value)
      && this.isMutable === other.isMutable
      ;
  }

  copyable(): boolean { return !this.isMutable; }

  copy(): PointerType {
    return new PointerType(this.baseType, this.isMutable);
  }

  drop(): void { this.isDropped = true; }

  isValid(): boolean {
    return !this.isDropped && this.baseType.value.isValid();
  }
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
