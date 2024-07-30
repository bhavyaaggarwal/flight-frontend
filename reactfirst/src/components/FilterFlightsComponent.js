import React, { useState } from 'react';
import FlightService from '../services/FlightService';

const FilterFlightsComponent = () => {
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [flights, setFlights] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const filter = {
                departureDate: departureDate || null,
                arrivalDate: arrivalDate || null
            };
            const result = await FlightService.getFlightsByFilter(filter);
            setFlights(result.data);
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };

    return (
        <div>
            <h2>Filter Flights</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Departure Date:</label>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Arrival Date:</label>
                    <input
                        type="date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                    />
                </div>
                <button type="submit">Filter</button>
            </form>
            {flights.length > 0 && (
                <div>
                    <h3>Flights</h3>
                    <ul>
                        {flights.map((flight, index) => (
                            <li key={index}>
                                {flight.flightNumber} - {flight.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterFlightsComponent;
