import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import dataclean from "./dbclean";

// beforeAll(() => {
//   console.log("beforeAll Hook Called");
// });

beforeEach(() => {
  // console.log("beforeEach Hook Called");
  dataclean();
});

test("button update check test1", () => {
  console.log("1");
  render(<App />);
  const buttn = screen.getByRole("button");
  fireEvent.click(buttn);
  expect(screen.getByText(/update data/i)).toBeInTheDocument();
});

test("button update check test2", () => {
  console.log("2");
  render(<App />);
  const buttn = screen.getByRole("button");
  fireEvent.click(buttn);
  expect(screen.getByText(/update data/i)).toBeInTheDocument();
});

// afterAll(() => {
//   console.log("afterAll hook test case");
// });

// afterEach(() => {
//   console.log("afterAll hook test case");
// });
