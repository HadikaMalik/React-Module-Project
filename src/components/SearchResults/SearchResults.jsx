import { useEffect, useState } from "react";
import dayjs from "dayjs";

import Booking from "../Booking/Booking";
import "./SearchResults.scss";

const SearchResults = (props) => {
  const [sortedColumn, setSortedColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const bookings = props.bookings;
  const [sortedBookings, setSortedBookings] = useState([]);

  useEffect(() => {
    if (bookings.length > 0) {
      setSortedBookings(bookings);
    }
  }, [bookings]);

  function handleSortColumn(event) {
    const { sorttype } = event.target.dataset;
    if (sortedColumn === sorttype) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(sorttype);
      setSortDirection("asc");
    }
    sortColumn(sorttype, sortDirection);
  }

  function handleSortColumn(event) {
    const { sorttype } = event.target.dataset;
    let newSortDirection = "asc";

    if (sortedColumn === sorttype) {
      newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      setSortedColumn(sorttype);
    }

    setSortDirection(newSortDirection);
    sortColumn(sorttype, newSortDirection);
  }

  function sortColumn(columnName, sortDirection) {
    if (columnName === "stayFor") {
      const sortedBookings = bookings.slice().sort((a, b) => {
        const valueA = dayjs(a.checkOutDate).diff(dayjs(a.checkInDate), "d");
        const valueB = dayjs(b.checkOutDate).diff(dayjs(b.checkInDate), "d");

        if (sortDirection === "asc") {
          return valueA > valueB ? 1 : -1;
        }
        return valueB > valueA ? 1 : -1;
      });
      setSortedBookings(sortedBookings);
    } else {
      const sortedBookings = bookings.slice().sort((a, b) => {
        const valueA =
          typeof a[columnName] === "string"
            ? a[columnName].toLowerCase()
            : a[columnName];
        const valueB =
          typeof b[columnName] === "string"
            ? b[columnName].toLowerCase()
            : b[columnName];

        if (sortDirection === "asc") {
          return valueA > valueB ? 1 : -1;
        }
        return valueB > valueA ? 1 : -1;
      });
      setSortedBookings(sortedBookings);
    }
  }

  function renderHeader(columnName, displayName) {
    let arrow = null;
    if (sortedColumn === columnName) {
      arrow = sortDirection === "asc" ? " ↓ " : " ↑ ";
    }

    return (
      <th scope="col" onClick={handleSortColumn} data-sorttype={columnName}>
        {displayName} {arrow}
      </th>
    );
  }

  return (
    <table data-testid="search-results-component">
      <thead>
        <tr className="table-header">
          {renderHeader("id", "ID")}
          {renderHeader("title", "Title")}
          {renderHeader("firstName", "First Name")}
          {renderHeader("surname", "Surname")}
          {renderHeader("email", "Email")}
          {renderHeader("roomId", "Room")}
          {renderHeader("checkInDate", "Check in")}
          {renderHeader("checkOutDate", "Check out")}
          {renderHeader("stayFor", "Stay for")}
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        {sortedBookings.map((booking) => (
          <Booking key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
