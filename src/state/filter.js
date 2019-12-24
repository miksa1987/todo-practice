const possibleFilters = [ 'all', 'active', 'done' ]
let dispatch = null

const setDispatch = (func) => dispatch = func
const getFilters = () => possibleFilters

const setFilter = (newFilter) => {
  if (possibleFilters.includes(newFilter)) {
    dispatch(newFilter)
  }
}

const filterTodos = (filter, todos) => {
  if (filter === 'all') {
    return todos
  }
  return todos.filter((todo) => todo.state === filter)
}

export default {
  setDispatch,
  getFilters,
  setFilter,
  filterTodos
}