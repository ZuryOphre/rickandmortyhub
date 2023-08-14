import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { register } from '../../api/ReqresApi';
import './index.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(email, password);

      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Sign Up</h2>
      <input
        className="register-input"
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="register-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="register-button" onClick={handleRegister}>Check In</button>
      
      <p className="register-text">Already have an account? <Link to="/" className="register-link">Log in</Link></p>
    </div>
  );
}

export default Register;
