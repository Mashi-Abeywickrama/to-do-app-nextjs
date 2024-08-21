import React from 'react';

interface TodoItemProps {
  todo: string;
  completed: boolean;
  toggleComplete: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, completed, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded px-4 py-2 my-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleComplete}
          className="mr-2"
        />
        <span className={`text-lg ${completed ? 'line-through' : ''}`}>{todo}</span>
      </div>
      <button onClick={deleteTodo} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
