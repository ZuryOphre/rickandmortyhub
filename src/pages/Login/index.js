import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { login } from '../../api/ReqresApi';
import './index.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
      navigate('/home');
    }
  }, [navigate, setIsLoggedIn]);

  const handleLogin = async () => {
    try {
      const authData = await login(email, password);

      window.localStorage.setItem('token', authData.token);

      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>
      <input
        className='login-input'
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='login-input'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login-submit-button' onClick={handleLogin}>
        Log In
      </button>

      <p className='login-text'>
        Don't have an account?{' '}
        <Link to='/register' className='login-link'>
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
