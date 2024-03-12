import { useState } from "react";

import Search from "@/components/Search/Search";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "@/components/SearchResults/SearchResults";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults bookings={bookings} />
    </main>
  );
};

export default Bookings;
