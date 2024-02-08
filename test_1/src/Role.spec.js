import { render, screen } from "@testing-library/react";
import Role from "./Role";
describe("getByRole TESTs", () => {
  test("getByRole TEST 1", () => {
    render(<Role />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("getByRole TEST 2", () => {
    render(<Role />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("value");
  });

  test("getByRole TEST 3", () => {
    render(<Role />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  test("getByRole TEST 4", () => {
    render(<Role />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
