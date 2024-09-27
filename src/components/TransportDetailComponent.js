import React from 'react';
import './TransportDetailComponent.css';

const TransportDetailComponent = ({ transport }) => {
  if (!transport) {
    return (
      <div className="container">
        <div className="alert alert-info mt-4">Select a transport to see details</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Transport Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{transport.name}</h5>
          <p className="card-text"><strong>Type:</strong> {transport.type}</p>
          <p className="card-text"><strong>Route:</strong> {transport.route}</p>
          <p className="card-text"><strong>Driver:</strong> {transport.driver}</p>
        </div>
      </div>
    </div>
  );
};

export default TransportDetailComponent;
