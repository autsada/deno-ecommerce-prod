import React, { FC, ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import { store } from '../../../store/store'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
})

const AllProviders: FC = ({ children }) => {
    return <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </QueryClientProvider>
    </Provider>
}

// re-export everything
export * from '@testing-library/react'

// Override render method
export function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
    return rtlRender(ui, { wrapper: AllProviders, ...options })
}
