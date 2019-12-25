import React from 'react'
import AppBase from './components/general/AppBase'
import FormContainer from './components/addform/FormContainer'
import Todolist from './components/todos/Todolist'
import FooterContainer from './components/footer/FooterContainer'
import itemsHandler from './state/items'
import filterHandler from './state/filter'

const App = () => {
  const [ , setTodos ] = React.useState([])
  const [ , setFilter ] = React.useState('all')

  const test = itemsHandler.getItems()

  React.useEffect(() => {
    filterHandler.setDispatch(setFilter)
    itemsHandler.setDispatch(setTodos)
  }, [])

  return (
    <div>
      <h1>To do </h1>
      <AppBase>
        <FormContainer />
        <Todolist/>
        <FooterContainer />
      </AppBase>
    </div>
  )
}

export default App
