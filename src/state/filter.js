import { possibleStates } from './items'

const possibleFilters = possibleStates
let dispatch = null
let filter = possibleFilters[0]

const setDispatch = (func) => dispatch = func
const getFilters = () => possibleFilters

const setFilter = (newFilter) => {
  if (possibleFilters.includes(newFilter)) {
    filter = newFilter
    dispatch(newFilter)
  }
}

const filterTodos = (todos) => {
  if (filter === 'all') {
    return todos
  }
  return todos.filter((todo) => todo.state === filter)
}

const getCurrentFilter = () => filter

export default {
  setDispatch,
  getFilters,
  setFilter,
  getCurrentFilter,
  filterTodos
}