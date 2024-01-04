import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <>
     <h1>Learn about redux toolkit </h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
