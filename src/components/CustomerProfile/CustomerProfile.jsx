import { useState, useEffect } from "react";

import "./CustomerProfile.scss";

const CustomerProfile = ({ id }) => {
  const [customerProfileData, setCustomerProfileData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-hotel-api.netlify.app/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomerProfileData(data))
      .catch((error) =>
        console.error("Error fetching customer profile:", error)
      );
  }, [id]);

  if (!customerProfileData) {
    return (
      <tr data-testid="customer-profile" className="customer-row">
        <td colSpan={2}>Loading...</td>
      </tr>
    );
  }

  return (
    <tr data-testid="customer-profile" className="customer-row">
      <td colSpan={2}>{customerProfileData.phoneNumber}</td>
    </tr>
  );
};

export default CustomerProfile;
