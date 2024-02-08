import { fireEvent, render, screen } from "@testing-library/react";
import FunctionComponent from "./FunctionComponent";
import handleClickData from "./helper";

test("Function component testing ", () => {
  render(<FunctionComponent />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText(/hello new data/i)).toBeInTheDocument();
});

test("Method testing test", () => {
  expect(handleClickData()).toMatch("Hello");
});
