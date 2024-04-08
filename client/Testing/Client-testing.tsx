import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from '../components/AddTodo'

// this uses jest to test for the use todo renders correctly
jest.mock('../hooks/useTodos', () => ({
  useAddTodos: jest.fn(),
}))

describe('AddTodo component', () => {
  test('adds new todo correctly', async () => {
    const mutate = jest.fn()
    const useAddTodosMock = jest.requireMock('../hooks/useTodos').useAddTodos
    useAddTodosMock.mockReturnValue({ mutate })

    render(<AddTodo />)

    const todoInput = screen.getByPlaceholderText('What needs to be done?')
    const submitButton = screen.getByText('Submit')

    userEvent.type(todoInput, 'New Todo')
    fireEvent.click(submitButton)

    expect(mutate).toHaveBeenCalledWith({ task: 'New Todo', completed: false })
  })
})
