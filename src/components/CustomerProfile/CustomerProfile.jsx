import "./CustomerProfile.scss";

const CustomerProfile = (props) => {
  const { id } = props;
  return <tr>{id} - Customer Profile</tr>;
};

export default CustomerProfile;
