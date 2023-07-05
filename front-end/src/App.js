import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

const API_URL = 'http://104.211.219.98/train';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollno: '',
    ownerEmail: '',
    accessCode: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerCompany();
  };

  const registerCompany = async () => {
    try {
      const registrationData = {
        companyName: formData.companyName,
        ownerName: formData.ownerName,
        rollNo: formData.rollno,
        ownerEmail: formData.ownerEmail,
        accessCode: formData.accessCode,
      };

      const response = await axios.post(`${API_URL}/register`, registrationData);
      console.log('Company registration successful:', response.data);
    } catch (error) {
      console.error('Company registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ownerName">Owner Name</label>
        <input
          type="text"
          className="form-control"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rollno">Roll No</label>
        <input
          type="text"
          className="form-control"
          id="rollno"
          name="rollno"
          value={formData.rollno}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ownerEmail">Owner Email</label>
        <input
          type="email"
          className="form-control"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="accessCode">Access Code</label>
        <input
          type="text"
          className="form-control"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
