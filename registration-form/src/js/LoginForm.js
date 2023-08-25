import React, { useState } from 'react';
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (formData.email === 'admin' && formData.password === 'admin') {
      // Successful login
      setLoginError('');
      console.log('Login successful');
      localStorage.setItem('userName', 'Admin');
      navigate('/dashboard');

    } else {
      // Invalid login
      setLoginError('Invalid username or password');
    }
  };

  return (
   
      <div className="centered-container">
      <div className="form-container">
      <h2>Login to Moov</h2>
      {loginError && <p className="error">{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
