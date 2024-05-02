// @vitest-environment jsdom
import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react/pure'

import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './components/App'

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  })

  const user = userEvent.setup()

  const container = render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  )

  return { user, ...container }
}
