import { render, screen } from "@testing-library/react";
import CustomRole from "./CustomRole";

describe("Semantic Element Test", () => {
  test("Custom Role TEST-1", () => {
    render(<CustomRole />);
    const btn = screen.getByRole("button", { name: "Click Me" });
    expect(btn).toBeInTheDocument();
  });

  test("Custom Role TEST-2", () => {
    render(<CustomRole />);
    const btn = screen.getByRole("button", { name: "Click Mee 2" });
    expect(btn).toBeInTheDocument();
  });

  test("Custom Role TEST-3", () => {
    render(<CustomRole />);
    const inpt = screen.getByRole("textbox", { name: "User name" });
    expect(inpt).toBeInTheDocument();
  });

  test("Custom Role TEST-4", () => {
    render(<CustomRole />);
    const inpt = screen.getByRole("textbox", { name: "Password" });
    expect(inpt).toBeInTheDocument();
  });
});

describe("Non-Semantic Element Test", () => {
  test("Custom Role nonsemantic Test-1", () => {
    render(<CustomRole />);
    const div = screen.getByRole("dum");
    expect(div).toBeInTheDocument();
  });
});
