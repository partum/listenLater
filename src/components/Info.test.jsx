import Info from "./Info"
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

test("basic render", () => {
    render(<Info />)
    expect(screen.getByText("Album Title")).toBeInTheDocument()
    expect(screen.getByRole("img").src).toBe("https://humanecolorado.org/wp-content/uploads/2025/02/hero_interior2_large-dog.webp")

})