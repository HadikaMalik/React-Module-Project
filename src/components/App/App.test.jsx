import App from "./App.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders the CYF Hotel header", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading", { name: "CYF Hotel" });
    expect(headerElement).toBeInTheDocument();
  });
});
