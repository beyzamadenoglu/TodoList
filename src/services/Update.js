import axios, { URL } from '../axios/axios';

 const UpdateTodo = async (id, completed)  => {
    return await axios
     .put(`${URL.update}/${id}`, {completed: completed})
        .then((response) => {
            return response;
        })    
        .catch((error) => {
            return error;
        });
}

export default UpdateTodo;