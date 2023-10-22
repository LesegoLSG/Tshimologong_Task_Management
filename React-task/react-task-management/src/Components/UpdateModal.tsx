import React, { useState } from 'react'
import { TaskProps, UpdateModalProps } from './Reusable/Properties'

const UpdateModal = ({ taskToEdit, closeModalProp, onEdit }: UpdateModalProps) => {

    const [textPopulated, setTextPopulated] = useState(taskToEdit?.task);
    const [datePopulated, setDatePopulated] = useState(taskToEdit?.date);
    const [timePopulated, setTimePopulated] = useState(taskToEdit?.time);

    const updateData = () => {
        // e.preventDefault()
        // get an id

        // create a new object
        const newObject = {
            ...taskToEdit,
            task: textPopulated,
            date: datePopulated,
            time: timePopulated
        }
        console.log("1")
        onEdit(newObject);
        console.log("2")






    }

    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen fixed flex justify-center items-center ">
            <div className=" bg-white w-[35rem] h-[25rem] rounded-xl p-3 shadow-xl flex flex-col m-3">
                <button>X</button>
                <div className="title">
                    <h1>Are you sure?</h1>
                </div>
                <div className="title">

                </div>
                <div className="body">
                    <input
                        className="bg-blue-100 w-full my-2 mx-2 rounded-md"
                        type="text"
                        placeholder="Add Your Task"
                        value={textPopulated}
                        onChange={(e) => setTextPopulated(e.target.value)}
                    />

                    <input
                        className=" bg-blue-100 w-full my-2 mx-2 rounded-md"
                        type="text"
                        placeholder="Add Your Task"
                        value={datePopulated}
                        onChange={(e) => setDatePopulated(e.target.value)}
                    />

                    <input
                        className="bg-blue-100 w-full my-2 mx-2 rounded-md"
                        type="text"
                        placeholder="Add Your Task"
                        value={timePopulated}
                        onChange={(e) => setTimePopulated(e.target.value)}
                    />
                </div>
                <div className="footer">
                    <button onClick={closeModalProp}>Cancel</button>
                    <button onClick={updateData}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal