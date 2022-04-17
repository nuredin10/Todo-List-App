import React from 'react'
import Todo from './Todo'
function TodoList({todos, setTodos, fileredTodos}) {
  // console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {fileredTodos.map((todo) =>(
            <Todo todo={todo} text={todo.text} key={todo.id} todos={todos} setTodos={setTodos}/>
          ))}
          
      </ul>
    </div>
  )
}

export default TodoList