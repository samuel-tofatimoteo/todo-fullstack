import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import EditTodo from './components/EditTodo'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<TodoList />} />
    <Route path="/todo/add/" element={<AddTodo />} />
    <Route path="/todo/:id/edit/" element={<EditTodo />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
