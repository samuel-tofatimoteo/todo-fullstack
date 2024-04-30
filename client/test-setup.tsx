import { beforeEach, expect } from 'vitest'
import { render, cleanup } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

// Where is the below code from? It doesn't look like anything we teach in the course and I don't think it works.

// USE THIS TEST SETUP: https://github.com/harakeke-2024/code-from-class/blob/main/week3-async-apis-useQuery/2-testing-reactQuery/client/test/setup.tsx

declare module 'vitest' {
  interface JestAssertion<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}

beforeEach(cleanup)
expect.extend(matchers)
