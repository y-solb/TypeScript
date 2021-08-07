{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private: 외부에서 접근할 수 없음
  // protected: 외부에서는 접근할 수 없지만 자식 클래스에서만 접근할 수 있음
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // 외부에서 보이지 않도록 숨김
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // class level

    fillCoffeeBean(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      } // 유효성 검사
      this.coffeeBeans += beans;
    } // 내부의 상태를 변경할 수 있도록

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots, //  shots: shots 같다면 생략가능
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);
  maker.fillCoffeeBean(18);
  console.log(maker);

  // class User {
  //   private firstName: string;
  //   private lastName: string;
  //   get fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  // }

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private interalAge = 4;
    get age(): number {
      return this.interalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('value for age should be greater than 0');
      }
      this.interalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {} // 생성자에 접근제어자를 설정하면 멤버변수로 설정된다!
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}
