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
    //Signup or register method, to be moved to authService file
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
                console.log("New user Added");
            } else {
                console.error("Failed to add task");
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }

    }

    //Signin or login method, to be moved to authService file
    const signIn = async (loginCredentials: any) => {
        console.log("Login credentials in signIn: ", loginCredentials);

        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(loginCredentials),
            });

            if (response.ok) {
                //receiving access token and refresh token (Same name conversion as backend)
                const { token, refreshToken } = await response.json();
                console.log("token:", token);
                console.log("refreshToken", refreshToken);

                //Testing token when request is called

            } else {
                throw new Error("Aunthentication failed");
            }
        } catch (error) {
            console.error("Authentication failed:", error);
            throw error;
        }
    }

    return (
        <div className="bg-gray-400 w-full h-screen flex justify-center items-center">
            <div className="bg-gray-800 w-[32rem] h-[40rem] flex justify-center items-center flex-col">
                <button onClick={Switchscreen}
                    className="bg-red-300 text-white">sign {changeBtnName}</button>
                {register ?
                    <Login signIn={signIn} />
                    :
                    <Register setRegister={setRegister} signUp={signUp} />
                }

            </div>
        </div>
    )
}

export default AuthenticationPage