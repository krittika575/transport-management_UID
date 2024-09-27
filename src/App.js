import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import TransportListComponent from './components/TransportListComponent';
import TransportDetailComponent from './components/TransportDetailComponent';
import AddTransportComponent from './components/AddTransportComponent';
import './App.css';

const App = () => {
  const [selectedTransport, setSelectedTransport] = useState(null);
  const transports = [
    { name: 'Bus 101', type: 'Bus', route: 'Route A', driver: 'John Doe' },
    { name: 'Truck 202', type: 'Truck', route: 'Route B', driver: 'Jane Smith' }
    // Add more transport data as needed
  ];

  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route
          path="/transports"
          element={
            <div>
              <TransportListComponent transports={transports} onSelect={setSelectedTransport} />
              <TransportDetailComponent transport={selectedTransport} />
            </div>
          }
        />
        <Route path="/add-transport" element={<AddTransportComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
