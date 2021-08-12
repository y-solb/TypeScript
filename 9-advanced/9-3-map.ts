{
  type Video = {
    title: string;
    author: string;
  };

  // [1, 2].map((item) => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in T타입에 있는 모든 키들을 P에 할당하고 옵셔널 & P타입으로 매핑해서 만듬
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'slowly',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    age: 9,
  };
  animal.age = 1;

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'solbi',
  };
  // video.author = 'sua'; readonly이기 때문에 값 변경 불가

  //   type VideoOptional = {
  //     title?: string;
  //     authoer?: string;
  //   };
  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
