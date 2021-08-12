{
  /**
   * Partial: 기존의 타입 중에서 부분적인 것만 허용하고 싶을 때
   */

  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
