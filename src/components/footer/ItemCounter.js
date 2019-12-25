import React from 'react'
import itemsHandler from '../../state/items'

const ItemCounter = () => {
  const itemsLength = itemsHandler.getItemsLength()
  return (
    <div>{itemsLength} items left</div>
  )
}

export default ItemCounter