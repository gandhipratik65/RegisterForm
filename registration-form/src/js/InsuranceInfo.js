import React, { useState } from 'react';

const InsuranceInfo = () => {
  const [formData, setFormData] = useState({
    insuranceCompany: '',
    insurerNumber: '',
    contactNumber: '',
    contactEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Insurance Info submitted:', formData);
  };

  return (
    <div className="section-container">
    <div className="form-container">
      <h2>Insurance Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="insuranceCompany">Insurance Company:</label>
          <input
            type="text"
            id="insuranceCompany"
            name="insuranceCompany"
            value={formData.insuranceCompany}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="insurerNumber">Insurer Number:</label>
          <input
            type="text"
            id="insurerNumber"
            name="insurerNumber"
            value={formData.insurerNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contactEmail">Contact Email Address:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default InsuranceInfo;
