import env from "react-dotenv";
import axios from 'axios';

export const baseURL = env.BACKEND_BASE_URL;

export default axios.create({baseURL});

export const URL = {
    add: '/add',
    delete: '/delete',
    update: '/update',
    getAll: '/get',
}
