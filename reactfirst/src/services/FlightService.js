import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/flights';

class FlightService {
    updateFlightStatus(flightDTO) {
        return axios.post(`${API_BASE_URL}/update-status`, flightDTO, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export default new FlightService();
