import React, {useState} from 'react';
import './App.css';
import InputField from './components/input_field/InputField';
import TodoList from './components/todolist/TodoList';
import { Todo } from './model';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string | number>("")
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      todo: "Learn Typescript",
      isDone: false
    },
    {
      id: 2,
      todo: "Resolve Pending Issues",
      isDone: true
    },
    {
      id: 3,
      todo: "Playing Ukelele",
      isDone: false
    },
  ])

  const handleAddTodo = (e:React.FormEvent) => {
    e.preventDefault()
    if(!todo) toast.error('Type some todos first!')
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("")
      toast.warn('New Todo Added!')
    }
  }

  return (
    <>
      <div className="App">
        <div className='heading'>My Todo List</div>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <div className='divider'></div>
        <TodoList todos={todos} setTodos={setTodos} />
        <ToastContainer 
          position='top-right'
          autoClose={5000}
          hideProgressBar
        />
      </div>
    </>
  );
}

export default App;
