{
  type ToDo = {
    title: string;
    description: string;
  };

  // 💩💩
  function display1(todo: ToDo) {
    todo.title = 'jaja'; // 가변성의 수정이 가능한 오브젝트는 💩💩, 항상 불변성을 유지할 것!
  }

  // 👍👍
  function display2(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // error
  }
}
