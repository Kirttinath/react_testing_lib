import Title from "./Title";
import { render, screen } from "@testing-library/react";

describe("getByTitle TESTs", () => {
  test("TEST-1", () => {
    render(<Title />);
    const data = screen.getByTitle("click me button");
    expect(data).toBeInTheDocument();
  });
  test("TEST-2", () => {
    render(<Title />);
    const data = screen.getByTitle("call");
    expect(data).toBeInTheDocument();
  });
});
describe("getALlByTitle TESTs", () => {
  test("TEST-1", () => {
    render(<Title />);
    const datas = screen.getAllByTitle("coffe");
    for (let i = 0; i < datas.length; i++) {
      expect(datas[i]).toBeInTheDocument();
    }
  });
});
