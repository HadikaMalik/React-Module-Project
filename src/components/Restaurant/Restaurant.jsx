import React, { useState } from "react";
import "./Restaurant.scss";
import RestaurantButton from "../RestaurantButton/RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {orders}{" "}
          <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>

    </section>
  );
};

export default Restaurant;
