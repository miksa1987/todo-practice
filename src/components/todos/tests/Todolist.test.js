import { render, cleanup } from '@testing-library/react'
import React from 'react'
import Todolist from '../Todolist'

const testTodos = [
  { text: 'Tee tämä appi valmiiksi', done: false, id: 0 },
  { text: 'Ja myös testit!', done: false, id: 1 }
]

describe('Todolist', () => {
  afterEach(cleanup)

  test('Renders correctly', () => {
    const component = render(<Todolist todos={testTodos} />)

    expect(component).toMatchSnapshot()
  })
})