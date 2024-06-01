import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hello",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// useTodo has context, so all data will be filtered out 
export const useTodo = () => {
    return useContext(TodoContext)
} 

export const TodoProvider = TodoContext.Provider