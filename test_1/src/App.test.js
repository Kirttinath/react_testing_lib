import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render", () => {
  render(<App />);
  const p_elem = screen.getByText(/Create react App/i);
  expect(p_elem).toBeInTheDocument();
});
