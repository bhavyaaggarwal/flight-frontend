import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UpdateFlightStatusComponent from './components/UpdateFlightStatusComponent';
import FlightDetailsPage from './components/FlightDetailsPage';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

function App() {
  const [showButtons, setShowButtons] = useState(true);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Flight Management System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/update-flight" element={<UpdateFlightStatusComponent />} />
            <Route path="/flight-details" element={<FlightDetailsPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route
              path="/"
              element={
                <HomePage
                  setShowButtons={setShowButtons}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomePage = ({ setShowButtons }) => {
  React.useEffect(() => {
    setShowButtons(true);
  }, [setShowButtons]);

  return (
    <div className="home-page">
      <div className="welcome-message">
      </div>
      <div className="button-container">
        <Link to="/update-flight" className="nav-button">
          Update Flight Status
        </Link>
        <Link to="/flight-details" className="nav-button">
          Get Flight Details
        </Link>
      </div>
    </div>
  );
};

export default App;
