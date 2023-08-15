import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<ProtectedRoute element={<Home />} />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
