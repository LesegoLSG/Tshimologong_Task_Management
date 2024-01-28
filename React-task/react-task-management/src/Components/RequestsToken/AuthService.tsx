import axios from "axios";
import { useNavigate } from "react-router-dom";


const API_URL = "http://localhost:8080/api/v1/auth";

//Sign up request
export const signUp = async (userObject: any) => {
    return axios.post(API_URL + "/signup", userObject)
        .then((response) => {
            // localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.error("Error in signUp:", error);
            throw error;
        });
};
//Sign in request
export const signIn = async (userObject: any) => {

    return axios.post(API_URL + "/signin", userObject)
        .then((response) => {

            // if (response.data.accessToken) {
            //     console.log("accessToken:", response.data.accessToken);
            //     console.log("accessToken:", response.data.refreshToken);

            // }
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log("Data:", response.data);
            return response.data;


        })
        .catch((error) => {
            console.error("Error in signIn:", error);
            throw error;
        });
};



export const logout = () => {
    localStorage.removeItem("user");
}

export const getCurrentUserEmail = () => {
    try {
        const token = localStorage.getItem("user");
        if (!token) return null;
        console.log("Auth token:", token)

        const payload = token.split('.')[1];
        const decodedPayload = atob(payload);
        const parsePayload = JSON.parse(decodedPayload);

        const email = parsePayload.sub;
        console.log("AuthService email:", email);
        return email;

    } catch (error) {
        console.log("UserByEmail error:", error);
    }
}

export const getRefreshTokenLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const { refreshToken } = JSON.parse(storedUser);
            return refreshToken;
        }
        return null;
    } catch (error) {
        console.error("Error retrieving access token:", error);
        return null;
    }
}

export const getAccessTokenLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const { token } = JSON.parse(storedUser);
            return token;
        }
        return null;
    } catch (error) {
        console.error("Error retrieving access token:", error);
        return null;
    }
}

export const Refresh = async (token: string) => {
    console.log("Received token:", token);
    try {
        const response = await axios.post(API_URL + "/refresh", { token });
        console.log("Refresh response:", response);
        return response.data;
    } catch (error) {
        console.log("Error in refresh:", error);
        throw error;
    }
};



