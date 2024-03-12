import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "../Booking/Booking";
import FakeBookings from "../../data/fakeBookings.json";

describe("CustomerProfile Component", () => {
  it("renders a booking component", () => {
    const booking = FakeBookings[0];
    render(<Booking booking={booking} />);
    const bookingComponent = screen.getByTestId("booking-component");
    expect(bookingComponent).toBeInTheDocument();
  });

  it("first page load should not render the CustomerProfile component", () => {
    const booking = FakeBookings[0];

    render(<Booking booking={booking} />);
    const bookingComponent = screen.getByTestId("booking-component");
    const CustomerProfileComponent = screen.queryByTestId("customer-profile");

    expect(bookingComponent).toBeInTheDocument();

    expect(CustomerProfileComponent).toBeNull();
  });

  it("clicking on the 'Show Profile' button should render the CustomerProfile component", () => {
    const booking = FakeBookings[0];
    render(<Booking booking={booking} />);

    const bookingComponent = screen.getByTestId("booking-component");
    const showProfileButton = screen.getByTestId("show-profile-button");

    fireEvent.click(showProfileButton);

    const CustomerProfileComponent = screen.getByTestId("customer-profile");

    expect(bookingComponent).toBeInTheDocument();
    expect(CustomerProfileComponent).toBeInTheDocument();
  });
});
