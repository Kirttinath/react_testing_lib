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
