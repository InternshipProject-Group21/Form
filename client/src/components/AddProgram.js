// src/components/AddProgram.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddProgram.css';


const AddProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    fundingAmount: 0,
    applicationDeadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/programs', formData);
      alert('Program added successfully');
      // Clear the form
      setFormData({
        name: '',
        description: '',
        fundingAmount: 0,
        applicationDeadline: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <h2>Add Funding Program</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="fundingAmount">Funding Amount:</label>
          <input
            type="number"
            id="fundingAmount"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="applicationDeadline">Application Deadline:</label>
          <input
            type="date"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Program</button>
        </div>
      </form>
    </div>
  );
};

export default AddProgram;
