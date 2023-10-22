import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Tasks from '../Components/TaskFolder/Tasks'
import { TaskProps } from '../Components/Reusable/Properties';
import AddTaskForm from '../Components/AddTaskForm';
import UpdateModal from '../Components/UpdateModal';
import NoTask from '../Components/NoTask';

const Home = () => {

    const [showAddTask, setShowAddTask] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [editTask, setEditTask] = useState<TaskProps | null>(null);

    const [tasks, setTasks] = useState<TaskProps[]>([
    ])



    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8080/tasks/getAllTask')
        const data = await res.json()
        console.log(data)
        return data
    }

    const addTask = async (task: TaskProps) => {
        console.log("Add button Clicked", task);
        try {
            const res = await fetch("http://localhost:8080/tasks/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task)

            });
            if (res.ok) {
                const data = await res.json();
                setTasks((prevTasks) => [...prevTasks, data])
                console.log("New Task Added");
            } else {
                console.error("Failed to add task");
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }

    }


    const deleteTask = async (id?: number): Promise<void> => {
        console.log("delete: ", id)
        await fetch(`http://localhost:8080/tasks/delete/${id}`, {
            method: 'DELETE'
        })


        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleBtnChange = (): void => {
        setShowAddTask(!showAddTask);
    }

    const OpenModalFunction = (taskv: TaskProps): void => {
        console.log("task for edit: ", taskv);
        console.log("ModalState 2: ", openModal)
        setOpenModal(true);
        console.log("Modal state: ", openModal);

        setEditTask(taskv);
    }

    const CloseModalFunction = (): void => {
        setOpenModal(false);
    }

    const Update = async (receiveTask: TaskProps): Promise<void> => {

        console.log("It reaches", receiveTask.task);
        try {
            const res = await fetch(`http://localhost:8080/tasks/update/${receiveTask.id}`, {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(receiveTask),

            });
            if (res.ok) {
                setTasks((prevTasks) => prevTasks.map((task) => (task.id === receiveTask.id ? receiveTask : task)));
                console.log("Task updated successfully");
            } else {
                console.error("Failed to update task");
            }

        } catch (error) {
            console.error("Error updating task:", error);
        }


    }


    return (
        <div className="bg-red-500 w-full min-h-screen flex flex-col justify-center items-center">
            <h5 className="text-gray-500 text-sm">Manage Your Task With Us...</h5>
            <h1 className="text-2xl font-bold">Task Management</h1>
            <div className="bg-blue-500  w-[50%] sm:w-[70%] lg:w-[50%] min-h-[80%]">

                <Header handleBtnChange={handleBtnChange} showAddTask={showAddTask} />
                {showAddTask && <AddTaskForm onAdd={addTask} />}
                {(tasks.length > 0) ?
                    <Tasks tasks={tasks} onDelete={deleteTask} openModalProp={OpenModalFunction} />
                    :
                    <NoTask />
                }


            </div>

            {
                openModal && <UpdateModal taskToEdit={editTask as TaskProps} closeModalProp={CloseModalFunction} onEdit={Update} />
            }
        </div>
    )
}

export default Home