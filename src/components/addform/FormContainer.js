import React from 'react'
import styled from 'styled-components'
import useField from '../../hooks/useField'
import Addform from './Addform'
import itemsHandler from '../../state/items'

const FormBase = styled.form`
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
`

const FormContainer = (props) => {
  const [ newTodo, setNewTodo ] = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    itemsHandler.addItem(newTodo.value)
    setNewTodo('')
  }

  return (
    <FormBase id='addtodo-form' onSubmit={handleSubmit}>
      <Addform newTodo={newTodo} />
    </FormBase>
  )
}

export default FormContainer