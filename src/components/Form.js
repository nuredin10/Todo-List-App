import React from 'react'

function form({setInput, input, todos, setTodos, setStatus}) {
    const onChangeHandler = (e) =>{
        setInput(e.target.value)
    }

    const onSubmitHanlder = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: input,
                complete: false,
                id: Math.floor(Math.random() * 1000) 
            }
        ])
        setInput('')

    }

    const statusHandler = (e) =>{
      setStatus(e.target.value)
    }
  return (
    <form>
      <input onChange={onChangeHandler}  value={input} type="text" className="todo-input" />
      <button onClick={onSubmitHanlder} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default form