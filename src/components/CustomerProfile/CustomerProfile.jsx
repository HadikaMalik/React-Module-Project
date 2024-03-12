import "./CustomerProfile.scss";

const CustomerProfile = (props) => {
  const { id } = props;
  return <tr data-testid="customer-profile">Customer {id} profile</tr>;
};

export default CustomerProfile;
