import React from 'react';
import TodoItem from '@/components/TodoItem';

interface TodoListProps {
  todos: { id: number; todo: string; completed: boolean }[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.todo}
          completed={todo.completed}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
