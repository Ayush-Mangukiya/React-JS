import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoslice'

// stores only require knowledge of reducers.
export const store = configureStore({
    reducer: todoReducer
})