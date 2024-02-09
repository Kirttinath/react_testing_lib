import FindBy from "./FindBy";
import { render, screen } from "@testing-library/react";

test("findBy Test", async () => {
  render(<FindBy />);
  const data = await screen.findByText("Data Found", {}, { timeout: 5000 });
  expect(data).toBeInTheDocument();
});
