import dayjs from "dayjs";
import { useState } from "react";

import CustomerProfile from "../CustomerProfile/CustomerProfile";

import "./Booking.scss";

const Booking = (props) => {
  // prettier-ignore
  const { id, title, firstName, surname, email, roomId, checkInDate, checkOutDate } = props.booking;
  const stayNights = dayjs(checkOutDate).diff(dayjs(checkInDate), "d");
  const [selected, setSelected] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const selectBookingHandle = () => {
    setSelected(!selected);
    showProfileHandle();
  };

  const showProfileHandle = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <tr
        className={
          selected ? "booking-row booking-row-selected" : "booking-row"
        }
        data-testid="booking-component"
      >
        <td className="customer-id">{id}</td>
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
          <button
            data-testid="show-profile-button"
            className="customer-show-profile-button"
            onClick={selectBookingHandle}
          >
            Show profile
          </button>
        </td>
      </tr>
      {showProfile ? <CustomerProfile id={id} /> : null}
    </>
  );
};

export default Booking;
