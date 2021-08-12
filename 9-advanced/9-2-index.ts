{
  const obj = { name: 'solbi' };
  obj.name; // solbi
  obj['name']; // solbi

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string 타입
  const text: Name = 'sua';

  type Gender = Animal['gender']; // 'male' | 'female' 타입

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'solbi',
    gender: 'female',
  };
}
