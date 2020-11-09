import React, { useState, useReducer, useEffect } from "react";
import "./App.css";

const Notification = ({ show }) => {
  useEffect(() => {
    setTimeout(() => {
      show();
    }, 2000);
  });
  return (
    <h3 style={{ position: "absolute", margin: "0", top: "0", right: "0" }}>
      Task Added
    </h3>
  );
};

const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  CLEAR_ALL: "CLEAR_ALL",
  HIDE_NOTIFY: "HIDE_NOTIFY",
};

const reducer = (state, action) => {
  //const newTasks = [...state.tasks, action.payload];

  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isNotify: true,
      };
    case ACTIONS.CLEAR_ALL:
      return { ...state, tasks: [] };
    case ACTIONS.HIDE_NOTIFY:
      return { ...state, isNotify: false };
    default:
      return state;
  }
};

const initialState = { tasks: [], isNotify: false };

function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const task = e.target.value;
    setTask(task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: new Date().getTime().toString(), taskTitle: task };
    dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
    setTask("");
  };

  const hideNotification = () => {
    dispatch({ type: ACTIONS.HIDE_NOTIFY });
  };

  return (
    <div className='App'>
      {state.isNotify && <Notification show={hideNotification} />}
      <form onSubmit={handleSubmit}>
        <input type='text' name='task' value={task} onChange={handleChange} />
        <button type='submit'>Add</button>
        {state.tasks.map((task) => {
          return <h3 key={task.id}>{task.taskTitle}</h3>;
        })}
      </form>
      <button
        onClick={() => dispatch({ type: ACTIONS.CLEAR_ALL })}
        style={{ display: state.tasks.length === 0 ? "none" : "inline-block" }}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
