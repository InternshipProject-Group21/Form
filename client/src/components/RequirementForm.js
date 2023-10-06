// src/components/RequirementForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './RequirementForm.css'; // Import the CSS file

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    companySize: '',
    sector: '',
    annualElectricityBudget: '',
    annualGasBudget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submit-requirement', formData);
      console.log(response.data.message);
      // Clear the form
      setFormData({
        projectType: '',
        companySize: '',
        sector: '',
        annualElectricityBudget: '',
        annualGasBudget: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Requirements</h2>
      <form onSubmit={handleSubmit}>       
       <div>
          <label htmlFor="projectType">Project Type:</label>
          <input
            type="text"
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="companySize">Company Size:</label>
          <input
            type="text"
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sector">Sector:</label>
          <input
            type="text"
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="annualElectricityBudget">Annual Electricity Budget:</label>
          <input
            type="number"
            id="annualElectricityBudget"
            name="annualElectricityBudget"
            value={formData.annualElectricityBudget}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="annualGasBudget">Annual Gas Budget:</label>
          <input
            type="number"
            id="annualGasBudget"
            name="annualGasBudget"
            value={formData.annualGasBudget}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
