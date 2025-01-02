import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UserDashborad from './pages/UserDashboard/UserDashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDashborad />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;