{
  //   // JavaScript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TypeScript ✨
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // JavaScript 💩
  //   function jsFetchNum(id) {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TypeScript ✨
  //   function fetchNum(id: string): Promise<number> {
  //     // code ...
  //     // code ...
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // JavaScript ✨ => TypeScript
  // Optional parameter ? (값이 있어도 되고 없어도 되고)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Solbi', undefined);

  // Default parameter (전달하지 않으면 기본 값이 출력)
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); //default message

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
