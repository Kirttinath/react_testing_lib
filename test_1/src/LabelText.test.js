import LabelText from "./LabelText";
import { render, screen } from "@testing-library/react";

describe("getByLabelText", () => {
  test("TEST-1", () => {
    render(<LabelText />);
    const label = screen.getByLabelText("Username :");
    expect(label).toBeInTheDocument();
  });
  test("TEST-2", () => {
    render(<LabelText />);
    const label = screen.getByLabelText("Password :");
    expect(label).toBeInTheDocument();
  });
  test("TEST-3", () => {
    render(<LabelText />);
    const label = screen.getByLabelText("Username :");
    expect(label).toHaveValue("kirtti");
  });
  test("TEST-4", () => {
    render(<LabelText />);
    const ckbopx = screen.getByLabelText("Skills :");
    expect(ckbopx).toBeInTheDocument();
  });
});

describe("getAllByLabelText", () => {
  test("TEST-1", () => {
    render(<LabelText />);
    const lbl = screen.getAllByLabelText("user");

    for (let i = 0; i < lbl.length; i++) {
      expect(lbl[i]).toBeInTheDocument();
    }
  });
  test("TEST-2", () => {
    render(<LabelText />);
    const ckbopx = screen.getAllByLabelText("Habit");
    expect(ckbopx[1]).toBeInTheDocument();
  });
});
