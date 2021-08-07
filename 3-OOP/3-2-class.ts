{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // class level

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
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(24);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(35);
  console.log(maker3);
}
