import AltText from "./AltText";
import { render, screen } from "@testing-library/react";

test("TEST-1", () => {
  render(<AltText />);
  const logo = screen.getByAltText("root");
  expect(logo).toBeInTheDocument();
});

test("TEST-2", () => {
  render(<AltText />);
  const logos = screen.getAllByAltText("beat");
  for (let i = 0; i < logos.length; i++) {
    expect(logos[i]).toBeInTheDocument();
  }
});
