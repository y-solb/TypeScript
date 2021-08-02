{
  /**
   * Type Assertions 💩
   * 타입을 강요할 때 (최대한 쓰지 않는 것이 좋다)
   */

  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // string 타입으로 만들어줌
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러남! 😈

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😈
  // !는 무조건 널이 아니야!! 장담해!

  const button = document.querySelector('class')!;
  //   if (button) {
  //     button.nodeValue;
  //   }
}
