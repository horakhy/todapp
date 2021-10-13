import React, { useState } from "react";

function TodApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList((prevState) => [...prevState, taskDetails]);
    }
    setTask("");
  };

  const deletePrompt = (e, task) => {
    const deleteIt = window.confirm(
      `The note with id ${task.id} is going to be deleted`
    );

    if (deleteIt) {
      deleteItem(e, task.id);
    }
  };

  const deleteItem = (e, id) => {
    // Prevents the window from refreshing
    e.preventDefault();
    setTaskList(tasklist.filter((task) => task.id !== id));
  };

  const taskFinished = (id) => {
    const taskToUpdate = tasklist.find((item) => item.id === id);

    const updatedTaskList = tasklist.map((task) => {
      if (task.id === id) {
        return { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };
      }

      return task;
    });

    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />

      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <br />

      {tasklist.length > 0 ? (
        <ul>
          {tasklist.map((task) => (
            <li
              key={task.id}
              className={task.isCompleted ? "crossedText" : null}
            >
              <input
                style={{ marginRight: 16 }}
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => taskFinished(task.id)}
              />
              {task.value}

              <button className="delete" onClick={(e) => deletePrompt(e, task)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: 16 }}>Your list is empty</p>
      )}
    </div>
  );
}

export default TodApp;