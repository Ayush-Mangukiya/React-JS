import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text:"Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                            id: nanoid(), 
                            text: action.payload
                        }
                        state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// individual reducers also need to be exported as they will be used in components
export const {addTodo, removeTodo} = todoSlice.actions

// store also need to have awareness about reducers to function properly
// so its or duty to provide list of all the reducers
export default todoSlice.reducer