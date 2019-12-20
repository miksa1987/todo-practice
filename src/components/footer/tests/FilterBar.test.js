import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import FilterBar from '../FilterBar'

describe('FilterBar', () => {
  afterEach(cleanup)

  test('All button calls filter function with right parameter', () => {
    const setFilter = jest.fn()
    const component = render(<FilterBar setFilter={setFilter} />)
    const allButton = component.container.querySelector('#setfilter-all')

    fireEvent.click(allButton)
    expect(setFilter).toHaveBeenCalledWith('all')
  })

  test('Active button calls filter function with right parameter', () => {
    const setFilter = jest.fn()
    const component = render(<FilterBar setFilter={setFilter} />)
    const activeButton = component.container.querySelector('#setfilter-active')

    fireEvent.click(activeButton)
    expect(setFilter).toHaveBeenCalledWith('active')
  })

  test('Done button calls filter function with right parameter', () => {
    const setFilter = jest.fn()
    const component = render(<FilterBar setFilter={setFilter} />)
    const doneButton = component.container.querySelector('#setfilter-done')

    fireEvent.click(doneButton)
    expect(setFilter).toHaveBeenCalledWith('done')
  })
})