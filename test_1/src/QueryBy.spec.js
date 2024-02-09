import QueryBy from "./QueryBy";
import { render, screen } from "@testing-library/react";

test("queryBy TEST", () => {
  render(<QueryBy />);
  const btn = screen.queryByText("Login");
  expect(btn).not.toBeInTheDocument();
});
