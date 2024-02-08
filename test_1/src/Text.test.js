import Text from "./Text";
import { render, screen } from "@testing-library/react";

describe("getByText TESTs", () => {
  test("TEST-1", () => {
    render(<Text />);
    const text = screen.getByText("all");
    expect(text).toBeInTheDocument();
  });
  test("TEST-2", () => {
    render(<Text />);
    const text1 = screen.getByText("check");
    expect(text1).toBeInTheDocument();
  });
  test("TEST-3", () => {
    render(<Text />);
    const text2 = screen.getByText("paragraph");
    expect(text2).toBeInTheDocument();
  });
  test("TEST-4", () => {
    render(<Text />);
    const text3 = screen.getByText("paragraph");
    expect(text3).toHaveClass("par");
  });
});

describe("getAllByText TESTs", () => {
  test("TEST-1", () => {
    render(<Text />);
    const heading = screen.getAllByText("multiple");

    for (let i = 0; i < heading.length; i++) {
      expect(heading[1]).toBeInTheDocument();
    }
  });

  test("TEST-2", () => {
    render(<Text />);
    const btn = screen.getAllByText("ck");

    for (let i = 0; i < btn.length; i++) {
      expect(btn[1]).toBeInTheDocument();
    }
  });

  test("TEST-3", () => {
    render(<Text />);
    const parag = screen.getAllByText("para");

    for (let i = 0; i < parag.length; i++) {
      expect(parag[1]).toBeInTheDocument();
    }
  });
});
