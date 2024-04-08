import nock from 'nock'

nock('http://localhost')
  .get('/api/v1/todos')
  .reply(200, [
    { id: 1, task: 'First todo', completed: false },
    { id: 2, task: 'Second todo', completed: true },
  ])

nock('http://localhost')
  .post('/api/v1/todos')
  .reply(201, { id: 3, task: 'New todo', completed: false })

nock('http://localhost').delete('/api/v1/todos/1').reply(204)

nock('http://localhost')
  .put('/api/v1/todos/1')
  .reply(200, { id: 1, task: 'Updated todo', completed: true })
