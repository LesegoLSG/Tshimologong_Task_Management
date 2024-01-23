import axios, { AxiosRequestConfig } from "axios";
import authHeader from "./AuthHeader";
import { getCurrentUserEmail } from "./AuthService";

const API_URL = "http://localhost:8080/api/v1/auth"

const API_URL_private = "http://localhost:8080/api/v1/user"

const getAllPublicPosts = async () => {
    try {
        const response = await axios.get(API_URL + "/test");
        console.log("string public:", response.data)
        return response.data;
    } catch (error) {
        console.error("Error in getAllPublicPosts:", error);
        throw error;
    }

};

const getAllPrivatePosts = async () => {
    try {
        const headers = authHeader(); // Ensure headers is an object
        console.log("Headers:", headers);
        const response = await axios.get(API_URL_private + "/getAll", { headers });
        console.log("string private:", response.data)
        return response.data;
    } catch (error) {
        console.error("Error in getAllPrivatePosts:", error);
        throw error;
    }
}

const getCurrentUser = async () => {
    try {
        const email = getCurrentUserEmail();
        const headers = authHeader(); // Ensure headers is an object
        console.log("Headers:", headers);
        const response = await axios.get(API_URL_private + `/findUserByEmail/${email}`, { headers });
        console.log("User custom:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in getAllPrivatePosts:", error);
        throw error;
    }
}

const postService = {
    getAllPublicPosts,
    getAllPrivatePosts,
    getCurrentUser,
}

export default postService;




