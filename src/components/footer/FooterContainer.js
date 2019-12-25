import React from 'react'
import styled from 'styled-components'

import ItemCounter from './ItemCounter'
import FilterBar from './FilterBar'

const Base = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding: 5px;
`

const FooterContainer = () => {
  return (
    <Base>
      <ItemCounter />
      <FilterBar />
    </Base>
  )
}

export default FooterContainer