import TestId from "./TestId";
import { render, screen } from "@testing-library/react";

describe("getByTestId TESTs", () => {
  test("TEST-1", () => {
    render(<TestId />);
    const res = screen.getByTestId("id1");
    expect(res).toBeInTheDocument();
  });
});

describe("getAllByTestId TESTs", () => {
  test("TEST-1", () => {
    render(<TestId />);
    const res1 = screen.getAllByTestId("id2");
    for (let i = 0; i < res1.length; i++) {
      expect(res1[i]).toBeInTheDocument();
    }
  });
});
