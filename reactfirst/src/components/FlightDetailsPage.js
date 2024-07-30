import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FlightDetailsPage.css';

const FlightDetailsPage = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/flights/filter', {
        flightNumber,
        date,
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flight details:', error);
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return '';
    const dateTime = new Date(dateTimeString);
    return isNaN(dateTime) ? '' : dateTime.toLocaleString();
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2>Get Flight Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="flightNumber">Flight Number:</label>
            <input
              type="text"
              id="flightNumber"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit">Get Details</button>
        </form>
        {flights.length > 0 && (
          <div>
            <h3>Flight Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Flight Number</th>
                  <th>Airline</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Gate</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.flightNumber}>
                    <td>{flight.flight_number}</td>
                    <td>{flight.airline}</td>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.status}</td>
                    <td>{new Date(flight.date).toLocaleDateString()}</td>
                    <td>{formatDateTime(flight.departure_time)}</td>
                    <td>{formatDateTime(flight.arrival_time)}</td>
                    <td>{flight.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleBackToHome} className="back-button">Back to Home Page</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDetailsPage;
