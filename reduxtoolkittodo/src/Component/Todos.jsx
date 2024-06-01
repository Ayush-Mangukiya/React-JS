import React from 'react';
// we gonna give delete icon i.e i want to take some actions and if im taking action then i need to dispatch it
import { useSelector, useDispatch } from 'react-redux';
// Whenevr using dispatchor it is compulsory to use reducer
import { removeTodo } from '../features/todo/todoslice';

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>Todos
    {todos.map((todo) => (
        <li key={todo.id}>{todo.text}
            <button onClick={}></button>
        </li>
        
    ))}
    </div>
  )
}

export default Todos