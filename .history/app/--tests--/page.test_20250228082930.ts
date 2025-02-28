import { render, screen } from "@testing-library/react";
import Home from "../page";
import { describe } from "node:test";

describe("Home", () => {
  it("renders hello text", () => {
    render(<Home />);
    expect(screen.getByText("Hello, Next.js 14 CI/CD!")).toBeInTheDocument();
  });
});
