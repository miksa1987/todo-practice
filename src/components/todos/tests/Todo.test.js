import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import Todo from '../Todo'

describe('Todo', () => {
  afterEach(cleanup)

  const testTodo = { text: 'Tee tämä appi valmiiksi', done: false, id: 0 }

  test('toggleDone is called on correct todo id', () => {
    const toggleDone = jest.fn()
    const component = render(
      <Todo toggleDone={toggleDone} removeTodo={() => null} todo={testTodo} />
    )
    const toggleButton = component.container.querySelector('#todo-toggle')

    fireEvent.click(toggleButton)
    expect(toggleDone.mock.calls.length).toBe(1)
  })

  test('removeTodo is called on correct todo id', () => {
    const removeTodo = jest.fn()
    const component = render(
      <Todo toggleDone={() => null} removeTodo={removeTodo} todo={testTodo} />
    )
    const removeButton = component.container.querySelector('#todo-remove')

    fireEvent.click(removeButton)
    expect(removeTodo.mock.calls.length).toBe(1)
  })

  test('Correct svg is shown if todo is active', () => {
    const component = render(
      <Todo toggleDone={() => null} removeTodo={() => null} todo={{...testTodo, done: true}} />
    )
    const doneSvg = component.container.querySelector('#todo-done')

    expect(doneSvg).toBeDefined()
  })

  test('Correct svg is shown if todo is done', () => {
    const component = render(
      <Todo toggleDone={() => null} removeTodo={() => null} todo={testTodo} />
    )
    const activeSvg = component.container.querySelector('#todo-active')

    expect(activeSvg).toBeDefined()
  })

  test('Renders correctly', () => {
    const component = render(
      <Todo toggleDone={() => null} removeTodo={() => null} todo={testTodo} />
    )
    expect(component).toMatchSnapshot()
  })
})