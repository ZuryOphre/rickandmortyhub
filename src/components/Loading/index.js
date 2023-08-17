import React from 'react';
import './index.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <img className='loading-img' src="/assets/portal-rick-and-morty.gif" alt="Loading" />
      <p className='loading-description'>Loading...</p>
    </div>
  );
};

export default Loading;
