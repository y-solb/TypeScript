/**
 * 프로토타입
 * 자바스크립트에서 객체지향 프로그래밍 상속을 하기 위해서 쓰이는 아이
 * 코드 재사용 가능
 */

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // x와 y는 동일한 오브젝트의 프로토를 상속하고 있기 때문

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  //   this.makeCoffee = (shots) => {
  //     console.log('making... ☕');
  //   };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making... ☕');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
