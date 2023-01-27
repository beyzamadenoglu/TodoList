import axios from 'axios';

export const baseURL = process.env.BACKEND_BASE_URL;

export default axios.create({baseURL});

export const URL = {
    add: '/add',
    delete: '/delete',
    update: '/update',
    getAll: '/get',
}
