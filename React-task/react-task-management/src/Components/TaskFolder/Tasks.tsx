import React, { useState } from 'react';
import { TaskProps } from '../Reusable/Properties';
import Task from './Task';

//Pass tasks as a prop
const Tasks = ({ tasks, onDelete, openModalProp }: { tasks: TaskProps[]; onDelete: (id?: number) => void; openModalProp: (taskv: TaskProps) => void }) => {



    return (
        <>
            {tasks.map((task: TaskProps) => (
                <Task key={task.id} task={task} onDelete={onDelete} openModalProp={openModalProp} />

            ))

            }
        </>
    )
}

export default Tasks