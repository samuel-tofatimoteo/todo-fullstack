import { response } from 'express'
import nock from 'nock'
import { beforeAll, describe, it, vi, expect } from 'vitest'
// import App from '../components/App'
import { renderWithQuery } from '../test-setup'
import AddTodo from '../components/AddTodo'
import { screen } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Todos', () => {
  it('should render add todo', () => { nock('http://localhost').post('/api/v1/', {
    name: 'test',
    details: 'database function test for add task',
    priority: 1,
    completed: false,
  })
  console.log(response)
  expect(response.send).toEqual('add: done!')
})
    // const handleSubmit = vi.fn()
    renderWithQuery(<AddTodo/>)

    expect(screen.getByLabelText('name')).toBeInTheDocument()
    // expect(screen.getByLabelText('First Name *')).toBeInTheDocument()
    // expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    // expect(screen.getByLabelText('Visible to everyone')).toBeInTheDocument()
  })
// describe('<apps>', () => {
//   it('should add a task', () => {

//     //  render app
//     renderWithQuery(<AddTodo/>)
//     //  async wait for screen
//     expect(scope.isDone()).toBe(true)
//   })



// routes.post('/', function (req, res) {
//   res.send('add: done!')
// })

// describe('POST /', function () {
//   it('returns done message', async function () {
//     const result = await request(routes).get('/').send({
//       name: 'test',
//       details: 'database function test for add task',
//       priority: 1,
//       completed: false,
//     })
//     console.log(result)
//     expect(result.body).toEqual('add: done!')
//   })
// })

// describe('add task', () => {
//   it('adds task to db', async () => {
//     nock('http://localhost').post('/api/v1/', {
//             name: 'test',
//             details: 'database function test for add task',
//             priority: 1,
//             completed: false,
//           })
//     })
// })
