/*
* 모듈화 장점
  파일들간의 중복적으로 발생할 수 있는 이름 충돌을 방지해주고
  서로 간의 코드를 분리함으로써 모듈성과 사용성 높여줌
*/

// 첫번째 방법
// export default function add(a, b) {
//   return a + b;
// } // default를 쓰면 함수명을 바꿀 수 있다
// // default는 한 파일에 하나만 가능
// // 모듈화를 하지 않으면 글로벌 스코프로 측정되어 파일을 공통적으로 넘어다님

// export function print() {
//     console.log(print);
// }

// 두번째 방법
export function add(a, b) {
  return a + b;
}

export function print() {
  console.log(print);
}

export const number = 10;
