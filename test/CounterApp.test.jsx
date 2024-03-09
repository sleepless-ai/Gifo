import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/components/CounterApp"

describe("Pruebas en <App />",() => {
  test("esta prueba no falla", () => {
    const { container } = render(<CounterApp/>)
    expect( container ).toMatchSnapshot();
  })
})