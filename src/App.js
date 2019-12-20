import React from 'react'
import AppBase from './components/general/AppBase'
import FormContainer from './components/addform/FormContainer'
import Todolist from './components/todos/Todolist'
import FooterContainer from './components/footer/FooterContainer'

const initialState = [
  { text: 'Tee tämä appi valmiiksi', done: false, id: 0 },
  { text: 'Ja myös testit!', done: false, id: 1 }
]

const App = () => {
  const [ todos, setTodos ] = React.useState(initialState)
  const [ filter, setFilter ] = React.useState('all')
  
  const activeTodosLength = todos.filter((todo) => todo.done === false).length

  const filterTodos = () => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo) => todo.done === false)
      case 'done':
        return todos.filter((todo) => todo.done === true)
      default:
        return todos
    }
  }

  const addTodo = (todoText) => {
    setTodos([ ...todos,
      { text: todoText, done: false, id: todos.length }
    ])
  }

  const toggleDone = (todoId) => {
    setTodos(todos.map((todo) => todo.id === todoId ? { ...todo, done: !todo.done } : todo))
  }

  const editTodo = (todoId, newText) => {
    setTodos(todos.map((todo) => todo.id === todoId ? { ...todo, text: newText } : todo))
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const filteredTodos = filterTodos()

  return (
    <div>
      <h1>To do </h1>
      <AppBase>
        <FormContainer addTodo={addTodo} />
        <Todolist todos={filteredTodos} toggleDone={toggleDone} editTodo={editTodo} removeTodo={removeTodo} />
        <FooterContainer filter={filter} setFilter={setFilter} todosLength={activeTodosLength} />
      </AppBase>
    </div>
  )
}

export default App
