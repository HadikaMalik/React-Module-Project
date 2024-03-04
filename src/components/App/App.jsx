import React from "react";
import Footer from "@/components/Footer/Footer";
import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader";
import Deck from "@/components/Deck/Deck";
import "./App.scss";

const App = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="app">
      <AppHeader />
      <Bookings />
      <Deck />
      <Footer addresses={addresses} />
    </div>
  );
};

export default App;
