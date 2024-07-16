import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Login", {
      Email: formData.Email,
      Password: formData.Password
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/Home");
        } else {
          alert('Invalid Credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert('Server Error');
      });
  };

  return (
    <>
      <div className='main-container'>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='Email'
              value={formData.Email}
              onChange={handleChange}
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='Password'
              value={formData.Password}
              onChange={handleChange}
              placeholder='Enter your Password'
            />
          </div>
          <button type='submit'>Submit</button>
          <p>Do not have an account</p>
          <Link to="/Signup" className='log-reg'>Signup</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
