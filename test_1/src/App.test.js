import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render", () => {
  render(<App />);
  const p_elem = screen.getByText(/Create react App/i);
  const title = screen.getByTitle(/React logo/i);
  expect(p_elem).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("should be a input", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const inputplaceholder = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
  expect(inputplaceholder).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
});
