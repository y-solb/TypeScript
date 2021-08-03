{
  // JavaScript
  // old: var 💩
  var age = 5;
  age = 1;

  // let es6
  let name = 'hello';
  name = 'hi';

  // const
  const weight = 5;
  // weight = 10; 값 변경이 불가능

  /*
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined (비어있는지 아닌지 아직 결정되지 x)
  let animal: undefined; // 💩
  let height: number | undefined;
  height = undefined;
  height = 100;
  function find(): number | undefined {
    return undefined;
  }

  // null (비어있다!)
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 (어떤 종류의 데이터가 담길지 알 수 없다)
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 (어떤것이든지 담을 수 있다)
  let anything: any = 0;
  anything = 'hello';

  // void (함수에서 어떤 것을 리턴하지 않을 때 사용, 생략 가능)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never (에러 발생 시 호출, 절대 리턴하지 않음)
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object (어떤 타입의 데이터든지 담을 수 있음)
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'solbi' });
  acceptSomeObject({ animal: 'dog' });
}
