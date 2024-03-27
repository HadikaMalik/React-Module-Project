import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Restaurant from "./Restaurant.jsx";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("increments the number of ordered pizzas when 'Add' button is clicked", () => {
    render(<Restaurant />);
    const pizzasElement = screen.getByText(/Pizzas/);
    const addButton = pizzasElement.querySelector(".restaurant__button");
    fireEvent.click(addButton);
    const pizzasElementAfterClick = screen.getByText("Pizzas: 1");
    expect(pizzasElementAfterClick).toBeInTheDocument();
  });
  it("increments the number of ordered salads when 'Add' button is clicked", () => {
    render(<Restaurant />);
    const saladsElement = screen.getByText(/Salads/);
    const addButton = saladsElement.querySelector(".restaurant__button");
    fireEvent.click(addButton);
    const saladsElementAfterClick = screen.getByText("Salads: 1");
    expect(saladsElementAfterClick).toBeInTheDocument();
  });
  it("increments the number of ordered chocolate cake when 'Add' button is clicked", () => {
    render(<Restaurant />);
    const chocolateCakeElement = screen.getByText(/Chocolate cake/);
    const addButton = chocolateCakeElement.querySelector(".restaurant__button");
    fireEvent.click(addButton);
    const chocolateCakeElementAfterClick =
      screen.getByText("Chocolate cake: 1");
    expect(chocolateCakeElementAfterClick).toBeInTheDocument();
  });
});
