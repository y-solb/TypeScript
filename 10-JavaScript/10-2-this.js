console.log(this); // 지금 호출한 사람의 문맥을 나타냄.
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
  //   increase = function () {
  //     console.log(this);
  //   };
}
const counter = new Counter();
counter.increase(); // Counter {count: 0, increase: ƒ}
// const caller = counter.increase; // counter의 increase포인터를 caller에 할당하면서 this의 정보를 잃어버림
// caller(); // undefined
// 자바스크립트에서 this는 다른 곳으로 할당하는 순간 잃어버릴 수 있기 때문에
// 오브젝트와 함수의 관계를 묶어줄려면 bind를 사용해야한다 or arrow function을 사용하기
// const caller = counter.increase.bind(counter);
caller();

// 우리가 선언한 함수는 윈도우 객체에 기본적으로 등록이 되지만
// const나 let이라는 키워드를 이용해서 변수를 선언하면 윈도우에 등록되지 xx
// var는 예외적으로 윈도우에 등록이 되나 사용하지 않는 것이 좋다

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {run: ƒ}
