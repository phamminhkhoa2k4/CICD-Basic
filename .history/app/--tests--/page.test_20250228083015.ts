import { render, screen, describe } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("renders hello text", () => {
    render(<Home />);
    expect(screen.getByText("Hello, Next.js 14 CI/CD!")).toBeInTheDocument();
  });
});
