import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressList = () => {
  // State to hold the list of addresses
  const [addresses, setAddresses] = useState([]);

  // Function to fetch addresses from the server
  const fetchAddresses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/address');
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  // Fetch addresses when the component mounts
  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div>
      <h2>List of Addresses</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            <strong>Street Address:</strong> {address.streetAddress}<br />
            <strong>City:</strong> {address.city}<br />
            <strong>State:</strong> {address.state}<br />
            <strong>Zip Code:</strong> {address.zipCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
