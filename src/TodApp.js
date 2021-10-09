import React, { useState } from "react";
//import "./TodApp.css"

function TodApp() {
    const [task, setTask] = useState("")
    const [tasklist, setTaskList] = useState([])

    const changeHandler = (e) => {
        setTask(e.target.value)
    };


    const addTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false,
            }

            setTaskList([...tasklist, taskDetails]);
        }

    };

    const deletePrompt = (e, t) => {
        const deleteIt = window.confirm(`The note is going to be deleted`);

        if(deleteIt){
            deleteItem(e, t.id);
        }

    }

    const deleteItem = (e, id) => {
        // Prevents the window from refreshing
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id !== id))
    };

    const taskFinished = (e, id) => {
        e.preventDefault();
        // Find the item's index
        const item = tasklist.findIndex(item => item.id === id);

        // copying the array into a new variable
        const newTaskList = [...tasklist];

        console.log("Testing...");
        // edit (cross out) the text
        // Cross it out if it's completed
        if (tasklist[item].isCompleted !== true) {
            newTaskList[item] = {
                ...newTaskList[item], isCompleted: true
            }
        }

        else {
            newTaskList[item] = {
                ...newTaskList[item], isCompleted: false
            }
        }
        // Setting the new list as the one to be shown
        setTaskList(newTaskList)
    }

    //console.log("tasklist", tasklist)
    return (
        <div className="todo">
            <input type="text" name="text" id="text"
                onChange={(e) => changeHandler(e)} placeholder="Add task" />

            <button className="add-btn" onClick={addTask}>Add</button>
            <br />

            {tasklist !== [] ?
                <ul>
                    {tasklist.map((t) => (
                        <li className={t.isCompleted ? "crossedText" : "listitem"}>{t.value}

                            <button className="finished" onClick={e => taskFinished(e, t.id)}>Finished</button>

                            <button className="delete" onClick={e => deletePrompt(e, t)}>Delete</button>
                        </li>

                    ))}
                </ul>
                : null}
        </div>
    )
}

export default TodApp