import { useState, useEffect } from "react";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults";

import "./Bookings.scss";

const Bookings = () => {
  const API = "https://cyf-hotel-api.netlify.app/";
  const [bookings, setBookings] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
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
        <h3>{fetchError.name}</h3>
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
