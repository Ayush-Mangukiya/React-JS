import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state can either be object or array.
const initialState = {
    todos: [{id: 1, text:"Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo', // It is name of the slice 
    initialState, // Each slice has initial state
    reducers: { // Each reducer has property (addTodo, removeTodo) and function, we always have access to state & action
        // state gives access to current state of values
        // action has value provided by user i.e let say i want to delete a todo then i have to give id of todo so action will catch that id
        addTodo: (state, action) => {
            const todo = {
                            id: nanoid(), 
                            text: action.payload // payload is an object
                        }
                        state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// individual reducers also need to be exported as all changes into state have been done by reducers only
export const {addTodo, removeTodo} = todoSlice.actions

// store also need to have awareness about reducers to function properly
// so its or duty to provide list of all the reducers
export default todoSlice.reducer