{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  } // 숫자만 인자로 받을 수 있다는 단점이...

  function checkNotNullAnyBad(arg: any | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  } // any를 쓰게 되면 타입에 대한 정보가 사라진다!
  const result = checkNotNull(123);

  // generic -> 어떤 타입이든지 받을 수 있고 쓸 때 타입이 결정된다
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
