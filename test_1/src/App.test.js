import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("set data check", () => {
  render(<App />);
  const element = screen.getByRole("textbox");
  fireEvent.change(element, { target: { value: "b" } });
  expect(element.value).toBe("btest");
});
