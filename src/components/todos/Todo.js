import React from 'react'
import styled from 'styled-components'
import Check from './Check'
import Cross from './Cross'

const Base = styled.div`
  display: grid;
  grid-template: 4rem / 4rem 1fr 4rem;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
`

const Todo = (props) => {
  return (
    <Base>
      <button id='todo-toggle' onClick={() => props.toggleDone(props.todo.id)}>
        {props.todo.done ? <Check id='todo-done' /> : <Cross id='todo-active' />}
      </button>
      <p>{props.todo.text}</p>
      <button id='todo-remove' onClick={() => props.removeTodo(props.todo.id)}>X</button>
    </Base>
  )
}

export default Todo