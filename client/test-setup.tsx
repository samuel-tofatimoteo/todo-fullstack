// @vitest-environment jsdom
import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)

export function renderWithQuery(component: JSX.Element) {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="/" element={component} />),
    {
      initialEntries: ['/'],
    },
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient()
  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    ),
  }
}
