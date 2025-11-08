import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import PathComponent from './Components/PathComponent';
import Dashboard from './Components/Dashboard';
import Billing from './Components/Billing';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
