import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './js/RegistrationForm';
import LoginForm from './js/LoginForm';
import Home from './js/Home';
import Dashboard from './js/Dashboard';
import RelativeInfo from './js/RelativeInfo';
import InsuranceInfo from './js/InsuranceInfo';
import PersonalInfo from './js/PersonalInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="relative" element={<RelativeInfo />} />
            <Route path="insurance" element={<InsuranceInfo />} />
            <Route path="personal" element={<PersonalInfo />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
