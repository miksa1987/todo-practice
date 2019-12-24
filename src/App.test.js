import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import App from './App'

const addTodo = (component) => {
  const form = component.container.querySelector('#addtodo-form')
  const input = component.container.querySelector('#addtodo-input')
    
  fireEvent.change(input, { target: { value: 'test' } })
  fireEvent.submit(form)
}

describe('App', () => {
  afterEach(cleanup)

  test('Initial todo list is rendered', () => {
    const component = render(<App />)
    const todos = component.container.querySelectorAll('#todo-item')

    expect(todos.length).toBe(0)
  })

  test('Add todo', () => {
    const component = render(<App />)
    addTodo(component)
    const todos = component.container.querySelectorAll('#todo-item')

    expect(todos.length).toBe(1)
  })

  test('Todo done toggle works', () => {
    const component = render(<App />)
    const todos = component.container.querySelectorAll('#todo-item')
    addTodo(component)

    const toggleButton = component.container.querySelector('#todo-toggle')
    fireEvent.click(toggleButton)

    const doneTodoCheckmark = component.container.querySelector('#todo-done')
    expect(doneTodoCheckmark).toBeTruthy()
  })

  test('Todo remove works', () => {
    const component = render(<App />)
    addTodo(component)
    addTodo(component)
    const todos = component.container.querySelectorAll('#todo-item')
    
    const removeButton = component.container.querySelector('#todo-remove')
    fireEvent.click(removeButton)

    expect(component.container.querySelectorAll('#todo-item').length).toBeLessThan(todos.length)
  })

  test('Active todos count works', () => {
    const component = render(<App />)
  })

  test('Todo filtering works', () => {
    const component = render(<App />)
    for(let i = 0; i < 10; i++) {
      addTodo(component)
    }
    const todos = component.container.querySelectorAll('#todo-item')

    const toggleButton = component.container.querySelector('#todo-toggle')
    fireEvent.click(toggleButton)

    const setFilterActiveButton = component.container.querySelector('#setfilter-active')
    fireEvent.click(setFilterActiveButton)
    
    expect(component.container.querySelectorAll('#todo-item').length).toBeLessThan(todos.length)
  })
})