import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Tasks from '../Components/TaskFolder/Tasks'
import { AddTaskFormProps, TaskProps } from '../Components/Reusable/Properties';
import AddTaskForm from '../Components/AddTaskForm';
import UpdateModal from '../Components/UpdateModal';
import NoTask from '../Components/NoTask';
import Pagination from '../Components/Pagination';
import { PageChangeProps } from '../Components/Reusable/Properties';

import PostService from '../Components/RequestsToken/PostService';
import axios from 'axios';
import { getCurrentUserEmail } from '../Components/RequestsToken/AuthService';

import { logout } from '../Components/RequestsToken/AuthService';
import authHeader from '../Components/RequestsToken/AuthHeader';
import { useNavigate } from 'react-router-dom';
import { Refresh, getRefreshTokenLocalStorage } from '../Components/RequestsToken/AuthService';


//useContext
// import {AnimatorProvider} from '../Context/AnimatorContext';



interface UserProps {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    role: string,
    tasks: TaskProps[];
}

const Home = () => {

    const navigate = useNavigate();

    const [showAddTask, setShowAddTask] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [editTask, setEditTask] = useState<TaskProps | null>(null);





    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(4);

    const [user, setUser] = useState<UserProps>({
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        tasks: []
    });

    const [tasks, setTasks] = useState<TaskProps[]>(user.tasks)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = user.tasks.slice(firstPostIndex, lastPostIndex);

    const [userList, setUserList] = useState("");

    const [privateData, setPrivateData] = useState([]);


    //Testing the public posts
    useEffect(() => {
        const getStringTesting = async () => {
            try {
                const myString = await PostService.getAllPublicPosts();
                setUserList(myString);
            } catch (error) {
                console.error("Cannot retrieve string or public post");
            }
        }
        getStringTesting();
    }, []);

    //Get the current logged in user
    useEffect(() => {
        const getUser = async () => {
            try {
                const myNewUser = await PostService.getCurrentUser();
                console.log("myNewUser:", myNewUser);
                setUser(myNewUser);
                setTasks(myNewUser.tasks)
                console.log("====", myNewUser.tasks);
            } catch (Error) {
                console.error("Something went wrong");
                // setNewUser(null); 
            }
        };
        getUser();
    }, []);






    const addTask = async (task: TaskProps) => {
        console.log("Add button Clicked", task);
        const response = await PostService.postTaskToUser(user.id, task);

        console.log("Added responses:", response);
        if (response) {
            // Update tasks state with the newly added task
            setTasks((prevTasks) => [...prevTasks, response.data]);
            setShowAddTask(false);
            // Refresh the page or any other logic you want
            // window.location.reload();



        }


    }


    const deleteTask = async (id?: number): Promise<void> => {
        console.log("delete: ", id);

        const response = await PostService.deleteTask(id);

        if (response) {
            console.log("Before deletion:", tasks);
            setTasks((tasks) => tasks.filter((task) => task.id !== id));
            console.log("After deletion:", tasks);
        }

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

    const Update = async (newTask: TaskProps): Promise<void> => {
        console.log("It reaches", newTask.id);
        console.log("It reaches", newTask.task);

        const response = await PostService.updateTask(newTask.id, newTask);
        if (response) {
            console.log(response.data);
        }


        // try {
        //     const res = await fetch(`http://localhost:8080/tasks/update/${receiveTask.id}`, {

        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(receiveTask),

        //     });
        //     if (res.ok) {
        //         setTasks((prevTasks) => prevTasks.map((task) => (task.id === receiveTask.id ? receiveTask : task)));
        //         console.log("Task updated successfully");
        //     } else {
        //         console.error("Failed to update task");
        //     }

        // } catch (error) {
        //     console.error("Error updating task:", error);
        // }


    }

    const ChangeAnimateState = () => {

    }

    const Logout = () => {
        logout();
        navigate("/auth");
    }

    const handleRefresh = async () => {
        const token = getRefreshTokenLocalStorage();
        console.log("---------------------------------------------------")
        const response = await Refresh(token);
        console.log("accessToken refresh1:", response); //Works like a charm
        console.log("accessToken refresh:", response.data);
    }


    return (
        <div className=" w-full min-h-screen flex flex-col justify-center items-center">
            <button onClick={handleRefresh}>Refresh</button>
            <button onClick={Logout}> Logout</button>
            <h5 className="text-gray-500 text-sm">Manage Your Task With Us...</h5>
            <h1 className="text-2xl font-bold">Task Management</h1>
            <div className="bg-blue-500  w-[50%] sm:w-[70%] lg:w-[50%] min-h-[80%] shadow-2xl">

                <Header handleBtnChange={handleBtnChange} showAddTask={showAddTask} ChangeAnimateState={ChangeAnimateState} />

                {showAddTask &&
                    <AddTaskForm onAdd={addTask} />
                }

                {(tasks.length > 0) ?
                    <Tasks tasks={currentPosts} onDelete={deleteTask} openModalProp={OpenModalFunction} />

                    :
                    <NoTask />
                }
                <Pagination totalPosts={tasks.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}
                    currentPage={currentPage} firstPostIndex={firstPostIndex} lastPostIndex={lastPostIndex} />

            </div>

            {
                openModal && <UpdateModal taskToEdit={editTask as TaskProps} closeModalProp={CloseModalFunction} onEdit={Update} />
            }

            <div>
                <h1>User Tasks:</h1>
                <ul>
                    {user.tasks.map((task) => (
                        <li key={task.id}>
                            <p>Task: {task.id}</p>
                            <p>Task: {task.task}</p>
                            <p>Date: {task.date.toString()}</p>
                            <p>Time: {task.time}</p>
                            <p>Active: {task.active ? 'Yes' : 'No'}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Home