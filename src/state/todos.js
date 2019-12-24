let dispatch = null
let items = []

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
  const toggledItem = { ...itemToToggle, state: itemToToggle.state === 'active' ? 'done' : 'active' }
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