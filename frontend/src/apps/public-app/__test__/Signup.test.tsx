import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from './test-utils'
import Signup from '../components/SignUp'

import '../../../fontawesome'

test('Renders auth modal and its content correctly', () => {
    render(<Signup />)

    const modalEl = screen.getByTestId('auth-modal')
    const headerEl = screen.getByTestId('auth-form-header')
    const formEl = screen.getByTestId('auth-form')

    expect(modalEl).toBeInTheDocument()
    expect(headerEl).toBeInTheDocument()
    expect(formEl).toBeInTheDocument()
})

test('The form should be empty and cannot be submitted on the first render', async () => {
    const { debug } = render(<Signup />)

    const usernameInputEl = screen.getByTestId('input-username')
    const emailInputEl = screen.getByTestId('input-email')
    const passwordInputEl = screen.getByTestId('input-password')
    const buttonEl = screen.getByTestId('auth-submit-btn')

    expect(usernameInputEl.textContent).toBe('')
    expect(emailInputEl.textContent).toBe('')
    expect(passwordInputEl.textContent).toBe('')

    // Submit the blank form should have warnings
    userEvent.click(buttonEl)
    await waitFor(() => expect(screen.getByText(/Username is required/i)).toBeInTheDocument())
})
