import dayjs from "dayjs";
import { useState } from "react";

import "./Booking.scss";

const Booking = (props) => {
  // prettier-ignore
  const { id, title, firstName, surname, email, roomId, checkInDate, checkOutDate } = props.booking;
  const stayNights = dayjs(checkOutDate).diff(dayjs(checkInDate), "d");
  const [selected, setSelected] = useState(false);

  const selectBookingHandle = () => {
    setSelected(!selected);
  };

  return (
    <tr
      className={selected ? "booking-row booking-row-selected" : "booking-row"}
      data-testid="booking-component"
      onClick={selectBookingHandle}
    >
      <td className="customer-name">
        {title} {firstName} {surname}
      </td>
      <td className="customer-email">{email}</td>
      <td className="customer-room">{roomId}</td>
      <td className="customer-checkin">{checkInDate}</td>
      <td className="customer-checkout">{checkOutDate}</td>
      <td className="customer-stay">
        {stayNights} {stayNights > 1 ? "nights" : "night"}
      </td>
      <td>
        <button className="customer-show-profile-button">Show profile</button>
      </td>
    </tr>
  );
};

export default Booking;
