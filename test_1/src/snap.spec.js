/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Snapshot Testing", () => {
  let contain = render(<App />);
  expect(contain).toMatchSnapshot();
});
