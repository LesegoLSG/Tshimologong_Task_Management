import React, { useState } from 'react'
import Button from './Reusable/Button'
import { AddTaskFormProps, TaskProps } from './Reusable/Properties'
import DateTimePicker from 'react-datetime-picker';

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [taskText, setTaskText] = useState("");
    const [taskDate, setTaskDate] = useState(new Date());
    const [taskTime, setTaskTime] = useState("");
    const [taskActive, setTaskActive] = useState(false);



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("dateTime:", taskDate);

        const newTask: TaskProps = {
            task: taskText,
            date: taskDate,
            time: taskTime,
            active: taskActive
        }

        if (!newTask.task) {
            alert("Please add a task");
            return;
        }

        onAdd(newTask);

        // Reset the form
        setTaskText("");
        setTaskDate(new Date());
        setTaskTime("");
        setTaskActive(false);
    }

    return (
        <form className="bg-white opacity-50 w-full flex flex-col py-2 " onSubmit={handleSubmit}>
            {/* <label className="mx-2">Task:</label>
            <input
                className="h-8 my-2 mx-2 rounded-md"
                type="text"
                placeholder="Add Your Task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <label className="mx-2">Date:</label> */}
            <div className="bg-red-500 p-5 flex justify-center items-center space-x-8 w-full">
                <DateTimePicker
                    className="w-[full] "
                    // type="text"
                    // placeholder="Add Your Task"
                    format="dd-MM-yyyy h:mm:ss a"
                    value={taskDate}
                    onChange={() => setTaskDate}
                />
            </div>
            {/* <label className="mx-2">Time:</label>
            <input
                className="h-8 my-2 mx-2 rounded-md"
                type="text"
                placeholder="Add Your Task"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
            /> */}

            <Button color="#4287f5" text="Submit" />
        </form>
    )
}

export default AddTaskForm