import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="flex h-screen">
      <Toaster />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
