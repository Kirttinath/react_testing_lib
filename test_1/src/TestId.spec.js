import TestId from "./TestId";
import { render, screen, configure } from "@testing-library/react";

// configure({ testIdAttribute: "test1-id" });

describe("getByTestId TESTs", () => {
  test("TEST-1", () => {
    render(<TestId />);
    const res = screen.getByTestId("id1");
    expect(res).toBeInTheDocument();
  });
  //   test("TEST-2", () => {
  //     render(<TestId />);
  //     const result = screen.getByTestId("1");
  //     expect(result).toBeInTheDocument();
  //   });
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
