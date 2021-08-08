{
  // 다형성이란 하나의 인터페이스나 또는 부모의 클래스를 상속한 자식 클래스들이 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 조금 더 다양하게!
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; // ?(옵셔널) -> 있을수도 있고 없을 수도 있다
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } // interface를 통해 추상화를 극대화

  // public
  // private: 외부에서 접근할 수 없음
  // protected: 외부에서는 접근할 수 없지만 자식 클래스에서만 접근할 수 있음

  class CoffeeMachine implements CoffeeMaker {
    // CoffeeMaker 인터페이스를 구현하는 클래스인 CoffeeMachine
    private static BEANS_GRAM_PER_SHOT: number = 7; // 외부에서 보이지 않도록 숨김
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    } // class level

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      } // 유효성 검사
      this.coffeeBeans += beans;
    } // 내부의 상태를 변경할 수 있도록

    clean() {
      console.log('cleaning the machine... 🧼');
    }

    // private로 캡슐화를 통해서 추상화를 구현
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕`);
      return {
        shots, //  shots: shots 같다면 생략가능
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    } // readonly -> 한번 설정되면 바꾸지 않을 때

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super -> 부모 클래스 함수 호출 가능
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    } // 부모 함수 재사용 (overriding)
  } // extends -> 상속

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return { ...coffee, hasSugar: true };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, 'AAA'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, 'AAA'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}
