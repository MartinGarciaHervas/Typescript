import { useState } from 'react'
import Todos from './components/Todos'

const mockToDos = [
  {
    id: 1,
    title: 'todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockToDos)
  return (
    <Todos todos={todos}/>
  )
}

export default App
