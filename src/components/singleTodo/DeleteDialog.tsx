import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Todo } from '../../model';
import { toast } from 'react-toastify';

import './styles.css'

interface Props {
  openDialog:boolean;
  handleDelete: (id:number) => void;
  handleCloseDialog: () => void;
  singleTodo:Todo;
}

function DeleteDialog({
  openDialog,
  handleCloseDialog,
  handleDelete,
  singleTodo
}:Props) {
  
    return (
      <Dialog onClose={handleCloseDialog} open={openDialog} className="dialog-box">

        <DialogTitle>
          <Typography>Delete Todo</Typography>
        </DialogTitle>

        <DialogContent>
          <Typography>Do you really want to delete this todo?</Typography>
        </DialogContent>
        
        <DialogActions>
          <span className='icon dialog-icon' onClick={() => handleDelete(singleTodo.id)}>Delete</span>
          <span className='icon dialog-icon' onClick={() => handleCloseDialog()}>Cancel</span>
        </DialogActions>
        
        
      </Dialog>
    );
  }

export default DeleteDialog;