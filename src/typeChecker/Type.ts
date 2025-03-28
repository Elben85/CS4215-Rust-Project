export class Type {
    static readonly String = new Type("string");
    static readonly Number = new Type("number");
    static readonly Boolean = new Type("boolean");
    static readonly Object = new Type("object");
    static readonly Null = new Type("null");
    static readonly Undefined = new Type("undefined");
  
    private constructor(public readonly value: string) {}
  
    toString(): string {
      return this.value;
    }
  }
  