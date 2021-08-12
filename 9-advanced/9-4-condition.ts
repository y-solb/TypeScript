{
  /**
   * condition: 타입을 조건적으로 결정할 수 있는 타입
   */

  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>; // boolean형

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

  type T0 = TypeName<string>; // string형
  type T1 = TypeName<'a'>; // string형
  type T2 = TypeName<() => void>; // functon
}
