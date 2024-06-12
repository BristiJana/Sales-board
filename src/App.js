import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LoginSignupPage from './components/LoginSignupPage';
import Dashboard from './components/Dashboard';
import OTPVerification from './components/OTPVerification';
import MonthlyIncome from './components/MonthlyIncome';
const App = () => (
  <Router>
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login-signup" element={<LoginSignupPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/monthly-income" element={<MonthlyIncome />} />
      </Routes>
    </div>
  </Router>
);

export default App;

