import React, { useState } from 'react';

const RelativeInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    address: '',
    contactNumber: '',
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
    console.log('Relative Info submitted:', formData);
  };

  return (
    <div className="section-container">
    <div className="form-container">
      <h2>Relative Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field" > 
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="relation">Relation:</label>
          <input
            type="text"
            id="relation"
            name="relation"
            value={formData.relation}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default RelativeInfo;
