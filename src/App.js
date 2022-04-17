import React,{useState, useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {



  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [fileredTodos, setFilteredTodos] = useState([])

  useEffect(() =>{
    filterHandler();
    saveLocalStorage();
  }, [todos, status])


  useEffect(() =>{
    getLocalTodos();
  }, []);

  const filterHandler = () =>{
    switch(status){
      case 'completed' : 
        setFilteredTodos(todos.filter(todo => todo.complete === true))
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.complete === false))
        break;
      default: 
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalStorage = () =>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo);
    }
  }

  return (

    
    
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setStatus={setStatus} setInput={setInput} input={input} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} status={status} fileredTodos={fileredTodos}/>
    </div>
  );
}

export default App