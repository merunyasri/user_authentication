import React, { useState } from 'react';
import img from "../img/Free Vector _ Flat creativity concept illustration.jpeg";

export default function Facultycreate() {
  const [formData, setFormData] = useState({
    firstName: '',
    department: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/users/facultyregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Registration failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="column">
      <div className='f-contain'>
        <div>
          <header>Register Here..</header>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='res'>
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="firstName"
                placeholder='Name...'
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Department</label>
              <input
                type="text"
                name="department"
                placeholder='Department...'
                value={formData.department}
                onChange={handleChange}
              />
            </div>
          </div>
         
          <div className='res'>
            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder='Email...'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder='Password...'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <img src={img} alt="Illustration" />
    </div>
  );
}
