import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'
import AddTodo from './components/Header/AddToDo/AddToDo'
import TodoCard from './components/TodoCard/ToDoCard'

function App() {

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <AddTodo />
        <TodoCard title={''} completed={false} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  )
}

export default App
