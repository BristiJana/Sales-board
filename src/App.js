import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LoginSignupPage from './components/LoginSignupPage';
import Dashboard from './components/Dashboard';
import OTPVerification from './components/OTPVerification';
import MonthlyIncome from './components/MonthlyIncome';
import SalesBoard from './components/SalesBoard';
import LivingExpense from './components/LivingExpense';
import LifestyleExpense from './components/LifestyleExpense';
import BudgetInformation from './components/BudgetInformation';
import SettlementPage from './components/SettlementPage';
import ActivityPage from './components/ActivityPage';
import ProfilePage from './components/ProfilePage';
const App = () => (
  <Router>
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login-signup" element={<LoginSignupPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/monthly-income" element={<MonthlyIncome />} />
      <Route path="/sales-board" element={<SalesBoard/>} />
      <Route path="/living-exp" element={<LivingExpense/>} />
      <Route path="/life-exp" element={<LifestyleExpense/>} />
      <Route path="/budget-information" element={<BudgetInformation />} />
      <Route path="/settlement" element={<SettlementPage />} />
      <Route path="/activity-page" element={<ActivityPage />} />
      <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  </Router>
);

export default App;

