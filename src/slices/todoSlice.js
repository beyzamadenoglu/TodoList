import { createSlice } from '@reduxjs/toolkit'

const getTodoList = () => {
    const localList = window.localStorage.getItem("todoList");

    if (localList != undefined && localList != "undefined") {
        return JSON.parse(localList);
    }

    window.localStorage.setItem("todoList", JSON.stringify([]));
    return [];
}

const initialState = {
    todoList: getTodoList(),
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setTodo: (state, action) => {
            const todoListArr = action.payload;
            window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
            state.todoList = [...todoListArr];
        },
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.push({
                    ...action.payload,
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
            } else {
                window.localStorage.setItem("todoList", JSON.stringify([{ ...action.payload }]));
            }
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo, index) => {
                    if (todo._id === action.payload) {
                        todoListArr.splice(index, 1);
                    }
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        updateTodo: (state, action) => {
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach(todo => {
                    if (todo._id === action.payload._id) {
                        todo.completed = action.payload.completed;
                    }
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
                state.todoList = [...todoListArr];
            }
        }
    }
})

export const { setTodo, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;