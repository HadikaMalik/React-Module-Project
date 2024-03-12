import Booking from "../Booking/Booking";
import "./SearchResults.scss";

const SearchResults = (props) => {
  const bookings = props.bookings;
  return (
    <table data-testid="search-results-component">
      <thead>
        <tr className="table-header">
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
          <th scope="col">Stay for</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
