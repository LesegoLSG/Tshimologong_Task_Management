import React, { useState } from 'react'
import { TaskProps, UpdateModalProps } from './Reusable/Properties';
import { RxUpdate, RxCrossCircled } from 'react-icons/rx';


const UpdateModal = ({ taskToEdit, closeModalProp, onEdit }: UpdateModalProps) => {

    const [textPopulated, setTextPopulated] = useState(taskToEdit?.task);
    const [datePopulated, setDatePopulated] = useState(taskToEdit?.date);
    const [timePopulated, setTimePopulated] = useState(taskToEdit?.time);
    const [activePopulated, setActivePopulated] = useState(true);

    const updateData = () => {
        // e.preventDefault()
        // get an id

        // create a new object
        const newObject = {
            ...taskToEdit,
            task: textPopulated,
            date: datePopulated,
            time: timePopulated,
            active: activePopulated
        }
        console.log("1")
        onEdit(newObject);
        console.log("newObject:", newObject);
        console.log("2")






    }

    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen fixed flex justify-center items-center ">
            <div className=" bg-white w-[35rem] h-[22rem] rounded-xl p-3 shadow-xl flex flex-col m-3 ">
                <div className="flex justify-end relative bottom-5 left-5 ">
                    <button
                        onClick={closeModalProp}>
                        <RxCrossCircled className="text-2xl text-red-600" />
                    </button>
                </div>
                <div className="title">

                </div>
                <div className="title">

                </div>
                <div className="body">
                    <label className="mx-2">Task</label>
                    <input
                        className="w-full h-8 my-2 mx-2 rounded-md border-solid border hover:border-black border-[#4287f5]"
                        type="text"
                        placeholder="Add Your Task"
                        value={textPopulated}
                        onChange={(e) => setTextPopulated(e.target.value)}
                    />
                    <label className="mx-2">Date</label>
                    <input
                        className=" w-full h-8 my-2 mx-2 rounded-md border-solid border hover:border-black border-[#4287f5]"
                        type="text"
                        placeholder="Add Your Task"
                        value={datePopulated}
                        onChange={(e) => setDatePopulated(e.target.value)}
                    />
                    <label className="mx-2">Time</label>
                    <input
                        className="w-full h-8 my-2 mx-2 rounded-md border-solid border hover:border-black border-[#4287f5]"
                        type="text"
                        placeholder="Add Your Task"
                        value={timePopulated}
                        onChange={(e) => setTimePopulated(e.target.value)}
                    />
                </div>
                <div className="flex justify-center my-3">

                    <button className="bg-[#4287f5] w-[8rem] h-[2.5rem] rounded-xl text-bold text-center flex justify-center items-center
                    "
                        onClick={updateData}>
                        <RxUpdate className="text-green-700" />
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal