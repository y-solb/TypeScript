{
  /**
   * Enum
   * 여러가지 관련 상수값들을 한군데로 모아서 정의할 수 있다
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  } // 문자열도 할당 가능, 값을 지정하지 않으면 0부터 시작
  console.log(Days.Monday);
  const day = Days.Satarday;
  let day2: Days = Days.Sunday;
  day2 = Days.Tuesday;
  day2 = 10; // 타입이 보장되지 않음!! 😈😈
  console.log(day);

  // 타입을 보장하기 위해 enum은 union타입으로 대체해서 사용!
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  let daysOfWeek: DaysOfWeek = 'Monday';
  daysOfWeek = 'Tuesday';
}
