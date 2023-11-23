import React from 'react'

const Register: React.FC = () => {
    return (
        <form className="bg-green-200 w-[80%] h-[30rem] flex flex-col justify-center items-center">

            <input className="w-[80%] my-2"
                type="text" placeholder="First Name" />
            <input className="w-[80%] my-2"
                type="text" placeholder="Last Name" />
            <input className="w-[80%] my-2"
                type="email" placeholder="Email Address" />
            <input className="w-[80%] my-2"
                type="password" placeholder="Password" />
            <input className="w-[80%] my-2"
                type="password" placeholder="Re-Enter Password" />
            <br />
            <button className="bg-red-500 my-2">Register</button>

        </form>
    )
}

export default Register