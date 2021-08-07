{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } // interface를 통해 추상화를 극대화

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public
  // private: 외부에서 접근할 수 없음
  // protected: 외부에서는 접근할 수 없지만 자식 클래스에서만 접근할 수 있음

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // CoffeeMaker 인터페이스를 구현하는 클래스인 CoffeeMachine
    private static BEANS_GRAM_PER_SHOT: number = 7; // 외부에서 보이지 않도록 숨김
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  console.log(maker);
  maker.fillCoffeeBeans(18);
  console.log(maker);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(18); -> 인터페이스에서 정의되지 않은 함수는 사용할 수 없다!
  maker2.makeCoffee(2);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(24);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker4);
  const pro = new ProBarista(maker4);

  // amateur.makeCoffee();
  pro.makeCoffee();
}
