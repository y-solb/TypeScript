{
  // adstract -> 추상적인 클래스, 그 자체로 오브젝트를 생성할 수 없는 클래스
  // 기능에 구현하는 클래스마다 달라져야 하는 내용이 있다면 그 부분만 abstract메소드로 정의 가능
  // abstract 클래스를 상속하면서 구현하지 않으면 에러 -> 안전하게 구현 가능
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine... 🧼');
    }

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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return { shots, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return { shots, hasSugar: true };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeeLatteMachine(16, 'AAA'),
    new SweetCoffeeMaker(16),
    new CaffeeLatteMachine(16, 'AAA'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}
