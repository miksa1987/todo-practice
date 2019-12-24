let dispatch = null
let items = []

export const possibleStates = [ 'all', 'active', 'done' ]

const setDispatch = (func) => dispatch = func

const addItem = (text) => {
  const newItem = {
    text,
    state: 'active',
    id: items.length
  }
  items = [ ...items, newItem]
  dispatch(items)
}

const toggleDone = (id) => {
  const itemToToggle = items.find((item) => item.id === id)
  const stateIndex = possibleStates.indexOf(itemToToggle.state)
  const nextStateIndex = stateIndex === possibleStates.length - 1 ? 1 : stateIndex + 1
  const toggledItem = { ...itemToToggle, state: possibleStates[nextStateIndex] } 

  items = items.map((item) => item.id === id ? toggledItem : item)
  dispatch(items)
}

const removeItem = (id) => {
  items = items.filter((item) => item.id !== id)
  dispatch(items)
}

export default {
  setDispatch,
  addItem,
  toggleDone,
  removeItem
}