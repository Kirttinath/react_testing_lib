import AllByRole from "./AllByRole";
import { render, screen } from "@testing-library/react";

describe("getAllByRole TEST", () => {
  test("1st Case", () => {
    render(<AllByRole />);
    const btn = screen.getAllByRole("button");

    for (let i = 0; i < btn.length; i++) {
      expect(btn[i]).toBeInTheDocument();
    }
  });
  test("2nd Case", () => {
    render(<AllByRole />);
    const selopt = screen.getAllByRole("option");

    for (let i = 0; i < selopt.length; i++) {
      expect(selopt[i]).toBeInTheDocument();
    }
  });
});
