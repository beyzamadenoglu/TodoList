import axios, { URL } from '../axios/axios';

 const AddTodo = async (todoObject)  => {
    return await axios  
     .post(URL.add, todoObject)
        .then((response) => {
            return response;
        })
    
        .catch((error) => {
            console.log('Error occurred:', error);
            return error.code;
        });
}

export default AddTodo;