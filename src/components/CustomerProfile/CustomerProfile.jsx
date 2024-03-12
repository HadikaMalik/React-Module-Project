import "./CustomerProfile.scss";

const CustomerProfile = (props) => {
  const { id } = props;
  return <tr>Customer {id} profile</tr>;
};

export default CustomerProfile;
