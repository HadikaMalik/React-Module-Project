import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "../../data/fakeBookings.json";

describe("SearchResults Component", () => {
  it("renders a table element", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const searchResultsElement = screen.getByTestId("search-results-component");
    expect(searchResultsElement).toBeInTheDocument();
  });

  it("renders booking components for each booking", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const bookingComponents = screen.getAllByTestId("booking-component");
    expect(bookingComponents.length).toBe(FakeBookings.length);
  });

  it("toggles the selection for each booking", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const bookingComponents = screen.getAllByTestId("booking-component");
    const showProfileButtons = screen.getAllByTestId("show-profile-button");

    bookingComponents.forEach((booking, index) => {
      fireEvent.click(showProfileButtons[index]);
      expect(booking).toHaveClass("booking-row-selected");
    });
  });

  it("toggles off the selection for each booking", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const bookingComponents = screen.getAllByTestId("booking-component");
    const showProfileButtons = screen.getAllByTestId("show-profile-button");

    bookingComponents.forEach((booking, index) => {
      fireEvent.click(showProfileButtons[index]);
    });

    bookingComponents.forEach((booking, index) => {
      fireEvent.click(showProfileButtons[index]);
      expect(booking).not.toHaveClass("booking-row-selected");
    });
  });
});
