import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { checkAuthentication } from '../../api/ReqresApi';
import './index.css';

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication()
      .then(response => {
        setIsLoggedIn(response.isAuthenticated);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to verify authentication:', error);
        setIsLoading(false);
        window.localStorage.removeItem('token');
      });
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src="/assets/portal-rick-and-morty.gif" alt="Portal GIF" className="max-w-10" />
      </div>
      <div className="header-title">
        <h1 className="small-title">Rick and Morty Hub</h1>
      </div>
      <div className="empty-space"></div>
      <div className="user-options">
        {isLoading ? (
          <p>Loading...</p>
        ) : isLoggedIn ? (
          <button onClick={handleLogout} className="signup-button">
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
