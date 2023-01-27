import env from "react-dotenv";
import axios from 'axios';

export const baseURL = env.BACKEND_BASE_URL;

/*
Configuration per ENV can be set in that way too.

export const _baseURL = () =>  {
    if(env.ENV_NAME == "DEVELOPMENT") {
        return "http://localhost:3000/todos/";
    } else if (env.ENV_NAME == "PRODUCTION") {
     return "https://todo-app-vdftr.herokuapp.com/todos/";
    }
} // And so on for other envs.. 


Also, we can set .env file per env such like
production.env,
staging.env,
test.env,
foo.env
and than can select in between different .env files
to reproduce same config locally.
*/

export default axios.create({baseURL});

export const URL = {
    add: '/add',
    delete: '/delete',
    update: '/update',
    getAll: '/get',
}
