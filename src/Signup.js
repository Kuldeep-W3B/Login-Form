import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name: "",
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
        axios.post("http://localhost:8000/Signup", {
            Name:formData.Name,
            Email:formData.Email,
            Password: formData.Password
        })
            .then((response) => {
                console.log(response);
                if (response.data === "Signup In") {
                    navigate("/Login");
                } else {
                    alert('Invalid Credentials');
                }
            })
    };

    return (
        <>
            <div className='main-container'>
                <form className='form-container'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder='Enter your Name'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Password:</label>
                        <input
                            type='text'
                            value={formData.Password}
                            onChange={handleChange}
                            placeholder='Enter your Password'
                        />
                    </div>
                    <button type='submit' onCkick={handleSubmit}>Submit</button>
                    <p>If you Already have Account</p>
                    <Link to="/" className='log-reg'>Login</Link>
                </form>
            </div>
        </>
    )
};

export default Signup;