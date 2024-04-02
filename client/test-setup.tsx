import { beforeEach, expect } from 'vitest'
import { render, cleanup } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

declare module 'vitest' {
  interface JestAssertion<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}

beforeEach(cleanup)
expect.extend(matchers)
