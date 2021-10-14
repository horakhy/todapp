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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ alignSelf: "center", marginTop: 32 }}>
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
      </div>

      <br />

      {tasklist.length > 0 ? (
        <ul>
          {tasklist.map((task) => (
            <>
              <li
                key={task.id}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                className={task.isCompleted ? "crossedText" : null}
              >
                <div>
                  <input
                    style={{ marginRight: 16 }}
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => taskFinished(task.id)}
                  />
                  {task.value}
                </div>

                <button
                  className="delete"
                  onClick={(e) => deletePrompt(e, task)}
                >
                  Delete
                </button>
              </li>
              <div
                style={{ height: 1, width: "100%", backgroundColor: "#eee" }}
              />
            </>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: 16 }}>Your list is empty</p>
      )}
    </div>
  );
}

export default TodApp;