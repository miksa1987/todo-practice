import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import useField from '../../hooks/useField'
import Addform from './Addform'

const FormBase = styled.form`
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
`

const FormContainer = (props) => {
  const [ newTodo, setNewTodo ] = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addTodo(newTodo.value)
    setNewTodo('')
  }

  return (
    <FormBase id='addtodo-form' onSubmit={handleSubmit}>
      <Addform newTodo={newTodo} />
    </FormBase>
  )
}

FormContainer.propTypes = {
  addTodo: propTypes.func.isRequired
}

export default FormContainer