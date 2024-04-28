import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp(component) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })
  const container = render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  )
  return {  ...container }
}