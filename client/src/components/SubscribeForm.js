// src/components/SubscribeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './SubscribeForm.css';


const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend to store the subscription information
      await axios.post('/api/subscribe', formData);
      // Clear the form
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Subscribe Us</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
