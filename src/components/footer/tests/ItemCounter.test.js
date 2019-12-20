import { render, cleanup } from '@testing-library/react'
import React from 'react'
import ItemCounter from '../ItemCounter'

describe('ItemCounter', () => {
  afterEach(cleanup)

  test('Renders correctly', () => {
    const component = render(<ItemCounter count={5} />)

    expect(component).toMatchSnapshot()
  })
})