/**
 * Type Inference
 * 타입 추론
 * 정확하게 타입을 정확하게 명시하는 것이 좋음!!
 */

let text = 'hello'; // 문자열 할당 (뻔한 경우 타입 생략 가능)
text = 'hi';
// text = 1; 에러 발생

function print(message = 'hello') {
  // message는 string 타입으로 자동 할당
  console.log(message);
}
print('hello');

function add(x: number, y: number) {
  return x + y;
} // 리턴값을 타입 추론하지만 타입을 명시하는 것이 좋음
const result = add(1, 2);
