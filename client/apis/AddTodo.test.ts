//@vitest-environment jsdom
import nock from 'nock'
import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../test-setup'
import { screen } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})
describe('Todos', () => {
  it('should render add todo', async () => { 
    nock('http://localhost')
      .get('/api/v1/incomplete')
      .reply(200, [])
      .persist()
    const scope = nock('http://localhost').post('/api/v1/', {
      name: 'test',
      details: '',
      priority: 1,
      completed: false,
    }).reply(200, 'done!')
    const{user} = renderApp()
    const editButton = await screen.findByRole('button', {name: 'Add Task'})
    expect (editButton).toBeInTheDocument()
   await user.click(editButton)
   const nameInput = await screen.findByLabelText('Task Name')
   await user.type(nameInput, 'test')
   const submitButton = await screen.findByRole('button', {name: 'Submit'})
   await user.click(submitButton)
   expect(scope.isDone()).toBe(true)
  })
})


