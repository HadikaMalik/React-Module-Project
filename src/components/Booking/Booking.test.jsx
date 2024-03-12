import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "./Booking.jsx";
import FakeBookings from "../../data/fakeBookings.json";

console.log(FakeBookings);

describe("Booking Component", () => {
  it("renders a booking component", () => {
    const booking = FakeBookings[0];
    render(<Booking booking={booking} />);
    const bookingComponent = screen.getByTestId("booking-component");
    expect(bookingComponent).toBeInTheDocument();
  });

  it("toggles selection when clicked", () => {
    const booking = FakeBookings[0];

    render(<Booking booking={booking} />);
    const bookingComponent = screen.getByTestId("booking-component");
    const showProfileButton = screen.getByTestId("show-profile-button");

    // Check that the component does not have the selected class by default
    expect(bookingComponent).not.toHaveClass("booking-row-selected");

    // Simulate a click event to toggle selection
    fireEvent.click(showProfileButton);
    expect(bookingComponent).toHaveClass("booking-row-selected");

    // Simulate a second click event to deselect
    fireEvent.click(showProfileButton);
    expect(bookingComponent).not.toHaveClass("booking-row-selected");
  });
});
