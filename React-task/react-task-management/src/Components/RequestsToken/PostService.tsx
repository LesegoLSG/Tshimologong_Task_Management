import axios, { AxiosRequestConfig } from "axios";
import authHeader from "./AuthHeader";
import { getCurrentUserEmail } from "./AuthService";
import api from './RefreshTokenHandler';
import { TaskProps } from "../Reusable/Properties";

const API_URL = "http://localhost:8080/api/v1/auth"

const API_URL_private = "http://localhost:8080/api/v1/user"

const PostService = {
    getAllPublicPosts: async () => {
        try {
            const response = await axios.get(API_URL + '/test');
            console.log('string public:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getAllPublicPosts:', error);
            throw error;
        }
    },

    getAllPrivatePosts: async () => {
        try {
            const response = await api.get('/user/getAll');
            console.log('string private:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getAllPrivatePosts:', error);
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            const email = getCurrentUserEmail();
            // const headers = authHeader(); // Ensure headers is an object
            // console.log("Headers:", headers);
            const response = await api.get(`user/getUserWithTasks/${email}`);
            console.log("User custom:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error in getAllPrivatePosts:", error);
            throw error;
        }
    },

    postTaskToUser: async (userId: any, task: TaskProps) => {
        try {
            const res = await api.post(`tasks/addTaskToUser/${userId}`, task)
            console.log("res:PostTaskToUser:", res);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
};

export default PostService;