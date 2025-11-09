import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Topbar from './Components/Topbar';
import PathComponent from './Components/PathComponent';
import Dashboard from './Components/Dashboard';
import Billing from './Components/Billing';
import Details from './Components/Details';
import Logout from './Components/Logout';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
         <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
