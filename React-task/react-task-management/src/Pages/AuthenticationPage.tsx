import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/LoginAndRegister/Login';
import Register from '../Components/LoginAndRegister/Register';

const AuthenticationPage: React.FC = () => {
    const navigate = useNavigate();

    const [register, setRegister] = useState(true);
    const [changeBtnName, setChangeBtnName] = useState("UP");

    //Change button text 
    const Switchscreen = () => {
        setRegister(!register);
        if (register === false) {
            setChangeBtnName("Up");
        } else if (register === true) {
            setChangeBtnName("In");
        }
    }

    const signUp = async (userObject: any) => {
        console.log("Register button Clicked", userObject);
        try {
            const res = await fetch("http://localhost:8080/api/v1/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userObject)

            });
            if (res.ok) {
                const data = await res.json();
                //setTasks((prevTasks) => [...prevTasks, data])
                console.log("New Task Added");
            } else {
                console.error("Failed to add task");
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }

    }

    return (
        <div className="bg-gray-400 w-full h-screen flex justify-center items-center">
            <div className="bg-gray-800 w-[32rem] h-[40rem] flex justify-center items-center flex-col">
                <button onClick={Switchscreen}
                    className="bg-red-300 text-white">sign {changeBtnName}</button>
                {register ?
                    <Login />
                    :
                    <Register setRegister={setRegister} signUp={signUp} />
                }

            </div>
        </div>
    )
}

export default AuthenticationPage