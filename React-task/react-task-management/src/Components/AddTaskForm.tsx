import React, { useState } from 'react'
import Button from './Reusable/Button'
import { AddTaskFormProps, TaskProps } from './Reusable/Properties'

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [taskText, setTaskText] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()



        const newTask: TaskProps = {
            task: taskText,
            date: taskDate,
            time: taskTime,
        }

        if (!newTask.task) {
            alert("Please add a task");
            return;
        }

        onAdd(newTask);

        // Reset the form
        setTaskText("");
        setTaskDate("");
        setTaskTime("");
    }

    return (
        <form className="bg-gray-600 w-full flex flex-col py-2 " onSubmit={handleSubmit}>
            <label className="mx-2">Task:</label>
            <input
                className="h-8 my-2 mx-2 rounded-md"
                type="text"
                placeholder="Add Your Task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <label className="mx-2">Date:</label>
            <input
                className="h-8 my-2 mx-2 rounded-md"
                type="text"
                placeholder="Add Your Task"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
            />
            <label className="mx-2">Time:</label>
            <input
                className="h-8 my-2 mx-2 rounded-md"
                type="text"
                placeholder="Add Your Task"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
            />
            <Button color="grey" text="Submit" />
        </form>
    )
}

export default AddTaskForm