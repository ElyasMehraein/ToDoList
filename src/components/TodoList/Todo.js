import React from "react";

export default function Todo(props) {
  const clickHandler = (props) => {
    props.completeHandler(props.id);
  };
  const TrashClickHandler = (props) => {
    props.removeHandler(props.id);
    console.log(props.id);
  };
  return (
    // 'completed' class for completed todos
    <div className="todo" style={{ display: "flex" }}>
      <li className={`todo-item ${props.completed ? "completed" : ""} `}>
        {props.title}
      </li>

      <button className="check-btn" onClick={() => clickHandler(props)}>
        <i className="fas fa-check" aria-hidden="true"></i>
      </button>

      <button className="trash-btn" onClick={() => TrashClickHandler(props)}>
        <i className="fas fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
}
