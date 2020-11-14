import React, { useState, useReducer, useEffect } from "react";
import "./App.css";

const Notification = ({ show, notifyMsg }) => {
  useEffect(() => {
    setTimeout(() => {
      show();
    }, 2000);
  });
  return (
    <h3 style={{ position: "absolute", margin: "0", top: "0", right: "0" }}>
      {notifyMsg}
    </h3>
  );
};

const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  CLEAR_ALL: "CLEAR_ALL",
  NOTIFY: "NOTIFY",
  IS_NOTIFY: "IS_NOTIFY",
  REMOVE: "REMOVE",
  COMPLETE: "COMPLETE",
};

const reducer = (state, action) => {
  //const newTasks = [...state.tasks, action.payload];

  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
        isNotify: true,
        notifyMsg: action.payload.notifyMsg,
      };
    // case ACTIONS.COMPLETE:
    //   const updatedTasks = state.tasks.filter((task) => {
    //     if (task.id === action.payload.id) {
    //       task.isComplete = action.payload.isComplete;
    //     }
    //     return task;
    //   });
    //   console.log(updatedTask);
    //   return {
    //     ...state,
    //     tasks: updatedTasks,
    //   };
    case ACTIONS.COMPLETE:
      return {
        ...state,
        isNotify: true,
        notifyMsg: action.payload.isComplete
          ? "Task Completed!"
          : "Marked as Incomplete!",
        tasks: state.tasks.filter((task) => {
          if (task.id === action.payload.id) {
            task.isComplete = action.payload.isComplete;
          }
          return task;
        }),
      };
    case ACTIONS.REMOVE:
      return {
        ...state,
        isNotify: true,
        notifyMsg: action.payload.notifyMsg,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case ACTIONS.CLEAR_ALL:
      return { ...state, tasks: [] };
    case ACTIONS.NOTIFY:
      return { ...state, isNotify: true, notifyMsg: action.payload };
    case ACTIONS.IS_NOTIFY:
      return { ...state, isNotify: false };
    default:
      return state;
  }
};

const initialState = { tasks: [], isNotify: false, notifyMsg: "" };

function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const hideNotification = () => {
    dispatch({
      type: ACTIONS.IS_NOTIFY,
    });
  };

  const handleChange = (e) => {
    const task = e.target.value;
    setTask(task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      const newTask = {
        id: new Date().getTime().toString(),
        taskTitle: task,
        isComplete: false,
      };
      dispatch({
        type: ACTIONS.ADD_TASK,
        payload: { newTask: newTask, notifyMsg: "Task Added!" },
      });
      setTask("");
    } else {
      dispatch({
        type: ACTIONS.NOTIFY,
        payload: "Invalid Input!",
      });
    }
  };

  const handleRemove = (id) => {
    dispatch({
      type: ACTIONS.REMOVE,
      payload: { id, notifyMsg: "Task Removed!" },
    });
  };

  const completeDispatch = (id, isComplete) => {
    dispatch({
      type: ACTIONS.COMPLETE,
      payload: { id, isComplete: !isComplete },
    });
  };

  return (
    <div className='App'>
      {state.isNotify && (
        <Notification show={hideNotification} notifyMsg={state.notifyMsg} />
      )}
      <form onSubmit={handleSubmit}>
        <input type='text' name='task' value={task} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
      {state.tasks.map((task, index) => {
        return (
          <div key={index}>
            <h3 key={task.id}>{task.taskTitle}</h3>
            <input
              key={index + 12}
              type='checkbox'
              checked={task.isComplete}
              onChange={() => completeDispatch(task.id, task.isComplete)}
            />
            <button key={index} onClick={() => handleRemove(task.id)}>
              Remove
            </button>
          </div>
        );
      })}
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
