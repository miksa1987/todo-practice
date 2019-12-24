import React from 'react'
import Todo from './Todo'

const Todolist = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => 
        <Todo 
          key={index} 
          todo={todo}
          removeTodo={props.removeTodo}
          toggleDone={props.toggleDone}
        />)}
    </div>
  )
}

export default Todolist