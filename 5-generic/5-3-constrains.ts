{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time!!!');
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time!!!');
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay(); // Employee를 확장한 아이만 가능해! 그래야 pay 사용 가능
    return employee;
  }

  const solbi = new FullTimeEmployee();
  const sua = new PartTimeEmployee();
  solbi.workFullTime();
  sua.workPartTime();

  const solbiAfterPay = payBad(solbi);
  // solbiAfterPay.workFullTime(); 불가능 -> 추상적인 인터페이스로 리턴하기 떄문에

  const suaAfterPay = pay(sua);
  suaAfterPay.workPartTime();

  const obj = { name: 'solbi', age: 24 };

  const obj2 = { animal: '🐯', age: 24 };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // solbi
  // console.log(getValue(obj, 'score')); 에러남! 타입이 보장되지 않아서
  console.log(getValue(obj, 'age')); // 24
  console.log(getValue(obj2, 'animal')); // 🐯
}
