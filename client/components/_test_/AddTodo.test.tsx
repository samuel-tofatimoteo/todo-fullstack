import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it, test } from 'vitest'
import AddTodo from '../AddTodo'
import nock from 'nock'

test('should show AddTodo labels placeholder text', () => {
  render(<AddTodo />)
  const inputElement = screen.getByPlaceholderText('What needs to be done?')
  expect(inputElement).toBeInTheDocument()
})

describe('AddTodo component', () => {
  beforeAll(() => {
    // Mocking the API call using nock
    nock('http://localhost:3000').post('/api/v1/todos').reply(204)
  })

  it('adds a new todo when the form is submitted', async () => {
    const { getByPlaceholderText } = render(<AddTodo />)
    const input = getByPlaceholderText('What needs to be done?')

    const todoName = 'Test Todo'

    // user typing a todo name
    userEvent.type(input, todoName)

    // user submitting the form
    const form = input.closest('form')
    if (form) {
      fireEvent.submit(form)
    } else {
      throw new Error('Form element not found')
    }

    
    await waitFor(() => {
      expect(nock.isDone()).toBe(true)
    })
  })
})
