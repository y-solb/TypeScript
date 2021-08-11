{
  // Java: Exception
  // JavaScript: Error
  // const array = new Array(10000000000000000000000000000);

  // Error(Exception) Handling: try -> catch -> finally
  function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
  }

  function closeFile(fileName: string) {
    //
  }

  const fileName = 'not exist!💩';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched error!!`);
  } finally {
    closeFile(fileName);
    console.log(`finally!!`);
  }
  console.log(`______________________________`);
  /**
   * try: 에러가 날 가능성이 있는 부분을 실행
   * catch: 에러가 날 경우 프로그램을 다운시키지 않고 에러를 잡음
   * finally: 에러가 나도 마무리 처리 try와 연관된 마무리 작업
   */

  function run() {
    const fileName = 'not exist!💩';
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`run_catched error!!`);
      return; // 에러 후 리턴을 해도 finally를 실행하고 끝남
    } finally {
      closeFile(fileName);
      console.log(`run_closed!!`);
    }
  }
  run();
}
