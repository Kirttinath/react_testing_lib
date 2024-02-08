import Assert from "./Assert";
import { render, screen } from "@testing-library/react";

test("Assertion Methods TEST :", () => {
  render(<Assert />);
  const data = screen.getByRole("textbox");
  expect(data).toBeInTheDocument();
  expect(data).toHaveValue("kirtti");
  expect(data).toHaveValue();
  expect(data).toHaveClass("assertTest");
  expect(data).toBeEnabled();
  //   expect(data).toBeDisabled();
  expect(data).toHaveAttribute("id");
});
