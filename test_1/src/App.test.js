import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
describe("Fire Event Check", () => {
  test("button update check", () => {
    render(<App />);
    const buttn = screen.getByRole("button");
    fireEvent.click(buttn);
    expect(screen.getByText(/update data/i)).toBeInTheDocument();
  });
});
