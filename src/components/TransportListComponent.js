import React from 'react';
import { Link } from 'react-router-dom';
import './TransportListComponent.css';

const TransportListComponent = ({ transports, onSelect }) => {
  return (
    <div className="container">
      <h2 className="mt-4">Available Transports</h2>
      <ul className="list-group">
        {transports.map((transport, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={() => onSelect(transport)}
          >
            <span>{transport.name} - {transport.type}</span>
            <Link className="btn btn-outline-primary btn-sm" to="#">Details</Link>
          </li>
        ))}
      </ul>
      <Link className="btn btn-success mt-3" to="/add-transport">Add New Transport</Link>
    </div>
  );
};

export default TransportListComponent;
