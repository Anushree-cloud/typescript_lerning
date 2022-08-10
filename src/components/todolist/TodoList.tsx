import React from 'react'
import { Todo } from '../../model'
import SingleTodo from '../singleTodo/SingleTodo';
import './styles.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({todos, setTodos}:Props) {
    if(todos.length === 0) {
        return (
            <div className='no-data'>No Todos Recorded!</div>
        )
    }
    return (
        <>
            <ul className='list'>
                {todos.map(todo =>(
                    // <li key={todo.id} className="list-items">{todo.todo}</li>
                    <SingleTodo 
                        key={todo.id} 
                        singleTodo={todo} 
                        todos={todos} 
                        setTodos={setTodos} 
                    />
                ))}
            </ul>
        
        </>
    )
}

export default TodoList
