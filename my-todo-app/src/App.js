import "./App.css";
import { useState } from "react";
import { Task } from './Task';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState('all');


  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input 
        value={newTask}
        onChange={handleChange} 
        onKeyPress={handleKeyPress}
        />
        <button className="delete-button" onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList
        .filter((task) => {
          if (filter === 'completed') {
            return task.completed;
          } else if (filter === 'incomplete') {
            return !task.completed;
          }
          return true; // For 'all' filter
        })       
        .map((task) => {
          return (
            <Task
              ket={task.id}
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
      <div className="filter">
          <label htmlFor="filterSelect">Filter:</label>
          <select
             id="filterSelect"
             value={filter}
             onChange={(event) => setFilter(event.target.value)}
            >
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </select>
      </div>
    </div>
  );
}

export default App;
