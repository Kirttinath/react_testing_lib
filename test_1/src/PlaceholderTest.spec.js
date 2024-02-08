import PlaceholderTest from "./PlaceholderTest";
import { render, screen } from "@testing-library/react";

describe("getByPlaceholderText TESTs", () => {
  test("TEST-1", () => {
    render(<PlaceholderTest />);
    const plc = screen.getByPlaceholderText("Kirtti");
    expect(plc).toBeInTheDocument();
  });
});
describe("getAllByPlaceholderText TESTs", () => {
  test("TEST-1", () => {
    render(<PlaceholderTest />);
    const plch = screen.getAllByPlaceholderText("val");

    for (let i = 0; i < plch.length; i++) {
      expect(plch[i]).toBeInTheDocument();
    }
  });
});
