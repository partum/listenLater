import App from "./App"
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test("testing if calendar displays when the user picks 'listened'", async () => {
    //Arrange
    const user = userEvent.setup()
    render(<App />)
    const statusSelect = screen.getByRole("listbox")

    // Act
    await user.selectOptions(statusSelect, "listened")

    // Assert
    expect(screen.getByRole("date")).toBeInTheDocument()
})