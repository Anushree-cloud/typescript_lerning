import React, { useRef } from 'react'
import './styles.css'

interface Props {
  todo:string | number;
  setTodo:React.Dispatch<React.SetStateAction<string | number>>;
  handleAddTodo: (e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAddTodo}:Props) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (event:React.FormEvent) => {
    handleAddTodo(event)
    inputRef.current?.blur()
  }
  return (
    <>
      <form className='form-control' onSubmit={onSubmitHandler}>
        <input 
          ref={inputRef}
          className='form-control-input' 
          placeholder='Type your todos here...' 
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className='form-btn' type='submit'>ADD</button>
      </form>
    </>
  )
}

export default InputField
