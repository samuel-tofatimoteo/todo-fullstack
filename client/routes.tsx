import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import NewTodo from './components/NewTodo'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/todo/add" element={<NewTodo />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
