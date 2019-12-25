import React from 'react'
import Todo from './Todo'
import filterHandler from '../../state/filter'
import itemsHandler from '../../state/items'

const Todolist = (props) => {
  const todos = filterHandler.filterTodos(itemsHandler.getItems())
  return (
    <div>
      {todos.map((todo, index) => 
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