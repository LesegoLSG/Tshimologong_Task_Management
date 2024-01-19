import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

import { LoginProps } from '../Reusable/PropertiesForAuthentication';


const Login: React.FC<LoginProps> = ({ signIn }) => {
    const navigate = useNavigate();

    //For password show and hide
    const [visible, setVisible] = useState(false);

    const visiblility = () => {
        setVisible(!visible);
    }

    //User inputs
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    //Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
    }

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginObject = {
            email: loginDetails.email,
            password: loginDetails.password
        }


        try {
            await signIn(loginObject);
        } catch (error) {
            console.log("Error after await", error);
        }


    }

    return (
        <form className="bg-green-200 w-[80%] h-[30rem] flex flex-col justify-center items-center" onClick={handleSubmitLogin}>
            {/* username or email field */}
            <input className="w-[80%] my-2"
                type="text" placeholder="Username"
                name="email"
                value={loginDetails.email}
                onChange={handleInputChange}
            />

            {/* Password field */}
            <div className="bg-white w-[80%] my-2 flex flex-row">
                <input className="w-[90%]"
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={loginDetails.password}
                    onChange={handleInputChange}
                />
                <div onClick={visiblility}
                    className="w-[10%] flex justify-center items-center">
                    {visible ?
                        <BsEyeSlash className="cursor-pointer" />
                        :
                        <BsEye className="cursor-pointer" />
                    }

                </div>
            </div>

            <h3>{loginDetails.email}</h3>
            <h3>{loginDetails.password}</h3>
            <button className="bg-red-500 my-2"
                onClick={() => navigate("/main")}>Go to main Page</button>

            <button
                className="bg-green-500 my-2"
                type="submit">Login</button>
        </form>
    )
}

export default Login