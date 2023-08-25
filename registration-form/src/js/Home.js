// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'

const Home = () => {
  return (
    <div className="centered-container">
    <div className="form-container">
      <h2>Welcome to Moov!</h2>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Home;
