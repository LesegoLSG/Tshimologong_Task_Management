import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';


const Login: React.FC = () => {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    const visiblility = () => {
        setVisible(!visible);
    }

    return (
        <form className="bg-green-200 w-[80%] h-[30rem] flex flex-col justify-center items-center">
            <input className="w-[80%] my-2"
                type="text" placeholder="Username" />
            <input className="w-[80%] my-2"
                type="password" placeholder="Password" />

            <div className="bg-white w-[80%] my-2 flex flex-row">
                <input className="w-[90%]"
                    type={visible ? "text" : "password"} placeholder="pass" />
                <div onClick={visiblility}
                    className="w-[10%] flex justify-center items-center">
                    {visible ?
                        <BsEyeSlash className="cursor-pointer" />
                        :
                        <BsEye className="cursor-pointer" />
                    }

                </div>
            </div>
            <button className="bg-red-500 my-2"
                onClick={() => navigate("/main")}>Go to main Page</button>
        </form>
    )
}

export default Login