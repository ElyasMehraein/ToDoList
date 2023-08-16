import React, { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState("all");

  const filterHandler = (props) => {
    setStatus(props.target.value);
    if (props.target.value === "all") {
      
        setFilteredTodos(todos)
    }
    if (props.target.value === "completed") {
      let newTodos = todos.filter((todo) => todo.completed === true);
      
      setFilteredTodos(newTodos)
    }
    if (props.target.value === "completed") {
      let newTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(newTodos)
    }
  };
  const removeTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos)
  };
  const completeTodo = (id) => {
    let completedTodo = [...todos];

    completedTodo.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(completedTodo)
  };
  const addTodo = (e) => {
    e.preventDefault();

    let newTodoObject = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    
    setTodos((prevTodos) => [...prevTodos, newTodoObject]);
    setTodoTitle("");
  };

  const todoTitleHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          maxLength="40"
          onChange={todoTitleHandler}
          value={todoTitle}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={filterHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {status === "all" &&
            todos.map((todo) => (
              <Todo
                {...todo}
                removeHandler={removeTodo}
                completeHandler={completeTodo}
              />
            ))}
          {status === "completed" &&
            todos.map(
              (todo) =>
                todo.completed === true && (
                  <Todo
                    {...todo}
                    removeHandler={removeTodo}
                    completeHandler={completeTodo}
                  />
                )
            )}
          {status === "uncompleted" &&
            todos.map(
              (todo) =>
                todo.completed === false && (
                  <Todo
                    {...todo}
                    removeHandler={removeTodo}
                    completeHandler={completeTodo}
                  />
                )
            )}
        </ul>
      </div>
    </>
  );
}
