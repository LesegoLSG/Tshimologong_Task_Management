import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterProps } from '../Reusable/PropertiesForAuthentication';

const Register: React.FC<RegisterProps> = ({ setRegister, signUp }) => {


    //Error state
    const [error, setError] = useState("");
    // user details register state
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        reEnterPassword: ''

    })
    //Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    //Method checks if user input password and reEnterPassword are equal
    const checkPasswordMatch = () => {
        if (userData.password !== userData.reEnterPassword) {
            setError("Password mismatch.")
            console.log("Passwords are not the same");
            return false;
        }
        setError("");
        return true;
    }

    //on form submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const passwordMatch = checkPasswordMatch();
        if (passwordMatch) {
            // Create an object with form data
            const userObject = {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                password: userData.password,
                //reEnterPassword: userData.reEnterPassword
            };
            console.log(userObject); // You can perform further actions with this object
            try {
                await signUp(userObject);
                setRegister(true); //Change from register component to Login component
            } catch (error) {
                console.log("Error adding user", error);
            }

        }
    };







    return (
        <form className="bg-green-200 w-[80%] h-[30rem] flex flex-col justify-center items-center" onSubmit={handleSubmit}>

            <input
                className="w-[80%] my-2"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={userData.firstname}
                onChange={handleInputChange} />
            <input className="w-[80%] my-2"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={userData.lastname}
                onChange={handleInputChange} />
            <input className="w-[80%] my-2"
                type="email"
                placeholder="Email Address"
                name="email"
                value={userData.email}
                onChange={handleInputChange} />
            <input className="w-[80%] my-2"
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleInputChange} />
            <input className="w-[80%] my-2"
                type="password"
                placeholder="Re-Enter Password"
                name="reEnterPassword"
                value={userData.reEnterPassword}
                onChange={handleInputChange} />
            <br />
            <button className="bg-red-500 my-2"
                type="submit"
            >Register</button>

        </form>
    )
}

export default Register