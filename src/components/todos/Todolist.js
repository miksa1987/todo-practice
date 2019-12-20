import React from 'react'
import Todo from './Todo'

const Todolist = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => 
        <Todo 
          key={index} 
          todo={todo}
          toggleDone={props.toggleDone} 
          removeTodo={props.removeTodo}
        />)}
    </div>
  )
}

export default Todolist