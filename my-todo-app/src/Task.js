import React from "react";
import "./App.css";
export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button className="complete-button" onClick={() => props.completeTask(props.id)}> Complete </button>
      <button className="delete-button" onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
};
