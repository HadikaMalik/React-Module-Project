import { useState, useEffect } from "react";
import { getReasonPhrase } from "http-status-codes";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults";

import "./Bookings.scss";

const Bookings = () => {
  const API = "https://cyf-hotel-api.netlify.app/";
  const [bookings, setBookings] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { ...formData };
    setBookings([...bookings, newBooking]);
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

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
      <SearchResults bookings={bookings} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roomId"
          placeholder="Room ID"
          value={formData.roomId}
          onChange={handleChange}
        />
        <input
          type="date"
          name="checkInDate"
          placeholder="Check In Date"
          value={formData.checkInDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="checkOutDate"
          placeholder="Check Out Date"
          value={formData.checkOutDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Bookings;
