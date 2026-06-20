import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'
import AddTodo from './components/AddToDo/AddToDo'
import TodoList from './components/TodoList/TodoList'

function App() {

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <AddTodo />
        <div className='d-flex flex-column-reverse'>
          <TodoList />
        </div>
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
