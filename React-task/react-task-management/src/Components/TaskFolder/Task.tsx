import React from 'react';
import { TaskProps } from '../Reusable/Properties';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
// const Tasks = ({ tasks, onDelete }: { tasks: TaskProps[]; onDelete: (id: number) => void }) => {
const Task = ({ task, onDelete, openModalProp }: { task: TaskProps; onDelete: (id?: number) => void; openModalProp: (taskv: TaskProps) => void }) => {

    // const handleDelete = () => {
    //     onDelete(task.id);
    // }

    return (
        <div className="bg-white flex justify-between items-center  min-h-fit my-2 mx-2 px-3 rounded-lg shadow-2xl">
            <div className="bg-blue-500 flex flex-col  ">
                <div className="bg-green-200 ">
                    <h3 className="font-bold text-lg">{task.task} </h3>

                    <p className="">{task.date} {task.time}</p>
                </div>
            </div>

            <div className="bg-red-500 flex items-center space-x-2 text-2xl p-1.5 cursor-pointer">
                <span className="text-green-700" onClick={() => openModalProp(task)}><CiEdit /></span>
                <span className="text-red-700" onClick={() => task.id !== null && onDelete(task.id)}><RiDeleteBin6Line /></span>
            </div>
        </div>
    )
}

export default Task