import React from 'react'
import propTypes from 'prop-types'

const FilterBar = (props) => {
  return (
    <div>
      <button id='setfilter-all' onClick={() => props.setFilter('all')}>All</button>
      <button id='setfilter-active' onClick={() => props.setFilter('active')}>Active</button>
      <button id='setfilter-done' onClick={() => props.setFilter('done')}>Done</button>
    </div>
  )
}

FilterBar.propTypes = {
  setFilter: propTypes.func.isRequired
}

export default FilterBar