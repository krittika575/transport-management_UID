import React, { useState } from 'react';
import './AddTransportComponent.css';

const AddTransportComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    route: '',
    driver: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Transport added successfully!');
    setFormData({ name: '', type: '', route: '', driver: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Transport</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="route">Route</label>
          <input
            type="text"
            className="form-control"
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="driver">Driver</label>
          <input
            type="text"
            className="form-control"
            id="driver"
            name="driver"
            value={formData.driver}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Transport</button>
      </form>
    </div>
  );
};

export default AddTransportComponent;
