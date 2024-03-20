import { useState, useEffect } from "react";
import { getReasonPhrase } from "http-status-codes";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults";

import "./Bookings.scss";

const Bookings = () => {
  const API = "https://cyf-hotel-api.netlify.app/";
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `${response.status}: ${getReasonPhrase(response.status)}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((error) => {
        setFetchError(error);
        console.log(error);
      });
  }, []);

  const search = (searchVal) => {
    if (searchVal === "") {
      setFilteredBookings(bookings);
    } else {
      const filteredBookings = bookings.filter((booking) => {
        const fullName = `${booking.firstName} ${booking.surname}`;
        return fullName.toLowerCase().includes(searchVal.toLowerCase());
      });
      setFilteredBookings(filteredBookings);
    }
  };

  if (fetchError) {
    return (
      <main id="bookings-fetch-error-message">
        <h2>There was an error fetching the data</h2>
        <h3>Description</h3>
        <p>{fetchError.message}</p>
      </main>
    );
  }

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults bookings={filteredBookings} />
    </main>
  );
};

export default Bookings;
