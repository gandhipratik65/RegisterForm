import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../css/styles.css'

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const userName = localStorage.getItem('userName');

  useEffect(() => {
    navigate('/dashboard/relative');
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome ,{userName}</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="relative">Relative Information</Link></li>
          <li><Link to="insurance">Insurance Information</Link></li>
          <li><Link to="personal">Personal Information</Link></li>
        </ul>
      </nav>
      <hr />
      <div className="dashboard-content">

      <Outlet /> {/* This will render the nested routes */}
      </div>
    </div>
  );
};

export default Dashboard;
