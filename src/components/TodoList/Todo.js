import React, { Component } from "react";

export default class Todo extends Component {
  clickHandler(props) {
    this.props.completeHandler(props.id)
  }
  TrashClickHandler(props) {
    this.props.removeHandler(props.id)
    console.log(props.id);
  }
  render() {
    return (
      // 'completed' class for completed todos
      <div className="todo" style={{ display: "flex" }}>
        <li className={`todo-item ${this.props.completed ? "completed" : ""} `}>
          {this.props.title}
        </li>

        <button className="check-btn" onClick={this.clickHandler.bind(this,this.props)}>
          <i className="fas fa-check" aria-hidden="true"></i>
        </button>

        <button className="trash-btn" onClick={this.TrashClickHandler.bind(this, this.props)}>
          <i className="fas fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
