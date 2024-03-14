import { useState, useEffect } from "react";
import { getReasonPhrase } from "http-status-codes";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults";

import "./Bookings.scss";

const Bookings = () => {
  const API = "https://cyf-hotel-api.netlify.app/error";
  const [bookings, setBookings] = useState([]);
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
      .then((data) => setBookings(data))
      .catch((error) => {
        setFetchError(error);
        console.log(error);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
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
      {<SearchResults bookings={bookings} />}
    </main>
  );
};

export default Bookings;
