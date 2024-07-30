import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightService from '../services/FlightService';

const FlightUpdatePage = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const flightDTO = { flightNumber, status };
      await FlightService.updateFlightStatus(flightDTO);
      navigate('/thank-you'); // Navigate to thank you page
    } catch (error) {
      console.error('Error updating flight status:', error.response || error.message);
    }
  };

  return (
    <div>
      <h2>Update Flight Status</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight Number:</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default FlightUpdatePage;
