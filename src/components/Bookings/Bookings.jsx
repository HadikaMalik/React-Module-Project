import { useState, useEffect } from "react";

import Search from "@/components/Search/Search";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "@/components/SearchResults/SearchResults";

const Bookings = () => {
  const API = "https://cyf-hotel-api.netlify.app/";
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {<SearchResults bookings={bookings} />}
    </main>
  );
};

export default Bookings;
