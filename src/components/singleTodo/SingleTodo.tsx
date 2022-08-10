import React, { useState } from 'react'
import { Todo } from '../../model';
import './styles.css';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineDoneOutline } from 'react-icons/md';
import EditDialog from './EditDialog';
import Tooltip from '@mui/material/Tooltip';
import DeleteDialog from './DeleteDialog';
import { toast } from 'react-toastify';

interface Props {
    singleTodo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({singleTodo, todos, setTodos}:Props) => {
    
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false)

    const handleDone = (id:number) => {
        todos.map(todo =>  {
            if(todo.id === id) {
                let successText:string = !todo.isDone ? 'Todo Marked Completed!' : 'Todo Marked Uncompleted!'
                toast.warn(successText)
            }
        })
        setTodos(todos.map(todo =>  todo.id === id ? {...todo, isDone:!todo.isDone} : todo ))
    }

    const handleDeleteDialogOpen = () => {
        setOpenDeleteDialog(true)
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id ))
        toast.warn('Todo Deleted!')
    }

    const handleEditTodo = () => { 
        setOpenEditDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenEditDialog(false)
        setOpenDeleteDialog(false)
    }

    return (
        <>
            <form className="single-todo-form-control">
                
                <span className='single-todo-span' style={singleTodo.isDone ? {textDecoration: 'line-through'} : {} }>
                    {singleTodo.todo}
                </span>
                <div className='icon-list'>
                    <Tooltip title="Edit" placement='top-start' arrow>
                        <span className='icon' onClick={handleEditTodo}><AiFillEdit /></span>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <span className='icon' onClick={handleDeleteDialogOpen}><AiTwotoneDelete /></span>
                    </Tooltip>
                    <Tooltip title="Mark Completed">
                        <span className='icon' onClick={() => handleDone(singleTodo.id)}><MdOutlineDoneOutline /></span>
                    </Tooltip>
                </div>
            </form>
            <div className='container'>
                <EditDialog 
                    openDialog={openEditDialog}  
                    handleCloseDialog = {handleCloseDialog}
                    singleTodo={singleTodo}
                    todos={todos}
                    setTodos={setTodos}
                />
                <DeleteDialog 
                    handleDelete={() => handleDelete(singleTodo.id)}
                    openDialog={openDeleteDialog}
                    handleCloseDialog={handleCloseDialog}
                    singleTodo={singleTodo}
                />
            </div>
        </>
    )
}

export default SingleTodo
