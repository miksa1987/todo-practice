import React from 'react'
import filterHandler from '../../state/filter'
import { capitalizeFirstLetter } from '../../util/stringhelper'

const FilterBar = () => {
  const filters = filterHandler.getFilters()

  return (
    <div>
      {filters.map((filter, idx) => 
        <button 
          id={`setfilter-${filter}`} 
          onClick={() => filterHandler.setFilter(filter)}
          key={idx}
        >
          {capitalizeFirstLetter(filter)}
        </button>)}
    </div>
  )
}

export default FilterBar