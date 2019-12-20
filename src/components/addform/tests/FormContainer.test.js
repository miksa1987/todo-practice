import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import FormContainer from '../FormContainer'

describe('FormContainer', () => {
  test('Enter submits the form and correct function is called', () => {
    const addTodo = jest.fn()
    const component = render(<FormContainer addTodo={addTodo} />)
    const form = component.container.querySelector('#addtodo-form')

    fireEvent.submit(form)
    expect(addTodo.mock.calls.length).toBe(1)
  })
})