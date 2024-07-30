import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="message-card">
        <h2>Thank You!</h2>
        <p>Your flight details have been updated successfully.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default ThankYouPage;
