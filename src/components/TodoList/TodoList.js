import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.todoTitleHandler = this.todoTitleHandler.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(props) {
    this.setState({
      status: props.target.value,
    });

    if (props.target.value === "all") {
      this.setState({
        filteredTodos: this.state.todos,
      });
    }
    if (props.target.value === "completed") {
      let newTodos = this.state.todos.filter((todo) => todo.completed === true);
      this.setState({
        filteredTodos: newTodos,
      });
    }
    if (props.target.value === "completed") {
      let newTodos = this.state.todos.filter((todo) => todo.completed === true);
      this.setState({
        filteredTodos: newTodos,
      });
    }
  }
  removeTodo(id) {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  }
  completeTodo(id) {
    let completedTodo = [...this.state.todos];

    completedTodo.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
    });
    console.log("from inja", completedTodo);
    this.setState({ todos: completedTodo });
  }
  addTodo(e) {
    e.preventDefault();

    let newTodoObject = {
      id: this.state.todos.length + 1,
      title: this.state.todoTitle,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodoObject],
      todoTitle: "",
    }));
  }

  todoTitleHandler(e) {
    this.setState({
      todoTitle: e.target.value,
    });
  }
  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            onChange={this.todoTitleHandler}
            value={this.state.todoTitle}
          />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={this.filterHandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.status === "all" && this.state.todos.map((todo) => (
                <Todo {...todo} removeHandler={this.removeTodo} completeHandler={this.completeTodo}
                />
              ))
            }
            {this.state.status === "completed" && this.state.todos.map(
                (todo) => todo.completed === true && (
                    <Todo  {...todo} removeHandler={this.removeTodo} completeHandler={this.completeTodo}
                    />
              ))
            }
              {this.state.status === "uncompleted" &&
              this.state.todos.map(
                (todo) =>
                  todo.completed === false && (
                    <Todo
                      {...todo}
                      removeHandler={this.removeTodo}
                      completeHandler={this.completeTodo}
                    />
                  )
              )}
          </ul>
        </div>
      </>
    );
  }
}
