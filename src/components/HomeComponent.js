import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="container text-center">
        <h1>Welcome to the Transport Management System</h1>
        <p>Efficiently manage all your transport needs.</p>
        <Link className="btn btn-primary btn-lg" to="/transports">View Transports</Link>
      </div>
    </div>
  );
};

export default HomeComponent;
