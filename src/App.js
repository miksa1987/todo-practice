import React from 'react'
import AppBase from './components/general/AppBase'
import FormContainer from './components/addform/FormContainer'
import Todolist from './components/todos/Todolist'
import FooterContainer from './components/footer/FooterContainer'
import itemsHandler from './state/items'
import filterHandler from './state/filter'

const App = () => {
  const [ todos, setTodos ] = React.useState([])
  const [ filter, setFilter ] = React.useState('all')

  React.useEffect(() => {
    filterHandler.setDispatch(setFilter)
    itemsHandler.setDispatch(setTodos)
  }, [])
  
  const activeTodosLength = todos.filter((todo) => todo.done === false).length
  
  const filteredTodos = filterHandler.filterTodos(filter, todos)

  return (
    <div>
      <h1>To do </h1>
      <AppBase>
        <FormContainer />
        <Todolist todos={filteredTodos} />
        <FooterContainer filter={filter} setFilter={setFilter} todosLength={activeTodosLength} />
      </AppBase>
    </div>
  )
}

export default App
