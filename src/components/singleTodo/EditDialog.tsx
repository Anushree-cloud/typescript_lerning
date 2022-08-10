import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Todo } from '../../model';
import { toast } from 'react-toastify';

import './styles.css'

interface Props {
  openDialog:boolean;
  handleCloseDialog: () => void;
  singleTodo:Todo;
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

function EditDialog({
  openDialog,
  handleCloseDialog,
  singleTodo,
  todos,
  setTodos
}:Props) {

  const [editTodo, setEditTodo] = useState<string | number>(singleTodo.todo)

    const saveEditedTodo = (id: number) => {
        setTodos(todos.map(eachTodo => eachTodo.id === id ? {...eachTodo, todo: editTodo } : eachTodo ))
        handleCloseDialog()
        toast.warn('Todo Saved!')
    }
  
    return (
      <Dialog onClose={handleCloseDialog} open={openDialog} className="dialog-box">

        <DialogTitle>
          <Typography>Edit Todo</Typography>
        </DialogTitle>

        <DialogContent>
          <input value={editTodo} type="text" onChange={e => setEditTodo(e.target.value)} className="edit-input" />
        </DialogContent>
        
        <DialogActions>
          <span className='icon dialog-icon' onClick={() => saveEditedTodo(singleTodo.id)}>Save</span>
          <span className='icon dialog-icon' onClick={() => handleCloseDialog()}>Cancel</span>
        </DialogActions>
        
        
      </Dialog>
    );
  }


export default EditDialog;