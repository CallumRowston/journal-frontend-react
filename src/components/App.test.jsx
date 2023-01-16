import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
// import { describe, it, expect } from "vitest"
import App from "./App.jsx"

describe('App component', () => {
    let container

    beforeEach(function() {
        // render renders in a virtual DOM
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    it('Shows the Journal Entries heading', () => {

        // screen is like a virtual browser window
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
        // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Journal Entries')
    })

    it('Shows category selection page when Select Category is clicked', async () => {

        await userEvent.click(screen.getByText('Select Category'))
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Please select a category:')
    })
})
