import axios from 'axios';

interface APIProps {
    token: string;
}

const APIUrl = 'http:localhost:8080/api/v1/auth';

let accessToken = null;

const setAccessToken = (token: APIProps) => {
    accessToken = token;
}