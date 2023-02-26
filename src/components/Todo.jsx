import React from 'react';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodoHandler = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: +new Date(), name: input }];
    });
  };

  const removeTodoHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className='wrapper'>
      <p>Input Todo</p>
      <div>
        <input value={input} onChange={inputChangeHandler} />
        <button className='buttonTodo' onClick={addTodoHandler}>
          Add to-do
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button
              className='buttonTodo'
              onClick={() => removeTodoHandler(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
