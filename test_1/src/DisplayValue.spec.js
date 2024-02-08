import DisplayValue from "./DisplayValue";
import { render, screen } from "@testing-library/react";

describe("getByDisplayValue TESTs", () => {
  test("Test-1", () => {
    render(<DisplayValue />);
    const value1 = screen.getByDisplayValue("hello");
    expect(value1).toBeInTheDocument();
  });
  test("Test-2", () => {
    render(<DisplayValue />);
    const value2 = screen.getByDisplayValue("Hii");
    expect(value2).toBeInTheDocument();
  });
});

describe("getAllByDisplayValue TESTs", () => {
  test("Test-1", () => {
    render(<DisplayValue />);
    const value1 = screen.getAllByDisplayValue("Kirtti");
    for (let i = 0; i < value1.length; i++) {
      expect(value1[1]).toBeInTheDocument();
    }
  });
});
