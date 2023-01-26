import axios, { URL } from "../axios/axios";

const getAllTodos = async () => {
    try {
        return await axios
            .get(URL.getAll).then((res)=> {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return { error: 'Todos not found' }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllTodos;