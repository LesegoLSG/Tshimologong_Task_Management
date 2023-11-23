import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Components/LoginAndRegister/Login';
import Register from '../Components/LoginAndRegister/Register';

const AuthenticationPage: React.FC = () => {
    const navigate = useNavigate();

    const [register, setRegister] = useState(true);
    const [changeBtnName, setChangeBtnName] = useState("UP");

    const Switchscreen = () => {
        setRegister(!register);
        if (register === false) {
            setChangeBtnName("Up");
        } else if (register === true) {
            setChangeBtnName("In");
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
                    <Register />
                }

            </div>
        </div>
    )
}

export default AuthenticationPage