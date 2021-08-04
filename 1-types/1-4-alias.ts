{
  /**
   * Type Aliases
   * 새로운 타입을 정의할 수 있음
   */
  type Text = string; // Text라는 새로운 타입은 문자열을 말합니다~
  const name1: string = 'solbi';
  const name2: Text = 'solbi';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   * 타입을 문자열로 지정
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
