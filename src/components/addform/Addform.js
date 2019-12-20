import React from 'react'

const Addform = (props) => {
  return (
    <div>
      <input id='addtodo-input' { ...props.newTodo } placeholder='New todo...' />
    </div>
  )
}

export default Addform