import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FlightService from '../services/FlightService';
import './UpdateFlightStatusPage.css';

const UpdateFlightStatusComponent = () => {
  const [flight_number, setFlightNumber] = useState('');
  const [status, setStatus] = useState('');
  const [gate, setGate] = useState('');
  const [departure_time, setDepartureTime] = useState('');
  const [arrival_time, setArrivalTime] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const flightDTO = { flight_number, status, gate, departure_time, arrival_time };
      const result = await FlightService.updateFlightStatus(flightDTO);
      setResponse(result.data);
      navigate('/thank-you'); // Redirect to thank you page
    } catch (error) {
      console.error('Error updating flight status:', error.response || error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2>Update Flight Status</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="flight_number">Flight Number:</label>
            <input
              type="text"
              id="flight_number"
              value={flight_number}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="gate">Gate:</label>
            <input
              type="text"
              id="gate"
              value={gate}
              onChange={(e) => setGate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="departure_time">Departure Time:</label>
            <input
              type="datetime-local"
              id="departure_time"
              value={departure_time}
              onChange={(e) => setDepartureTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="arrival_time">Arrival Time:</label>
            <input
              type="datetime-local"
              id="arrival_time"
              value={arrival_time}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
        {response && (
          <div className="response-container">
            <h3>Updated Flight</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateFlightStatusComponent;
