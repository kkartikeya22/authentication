import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
            // Optionally, redirect to another page upon successful registration
            // history.push('/login'); // Make sure to import useHistory from react-router-dom
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={name} onChange={onChange} required />
                <input type="email" name="email" value={email} onChange={onChange} required />
                <input type="password" name="password" value={password} onChange={onChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
