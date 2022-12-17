import { render, screen } from "@testing-library/react";
import { Async } from ".";

describe("Async render", () => {
  it("renders correctly", async () => {
    render(<Async />);
  
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();
  });
});
