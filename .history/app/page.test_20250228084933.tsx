import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";
describe("Home", () => {
  it("renders hello text", () => {
    render(<Home />);
    expect(screen.getByText("Hello, Next.js 14 CI/CD!")).toBeInTheDocument();
  });
});
