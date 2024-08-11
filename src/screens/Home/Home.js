import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Login from '../../components/Login';
import Theme from '../../components/ThemeToggle';
import logo from "../../Assets/Images/logo1.png"
import woman from "../../Assets/Images/woman.png"


const App = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate if email and password are not empty
    if (email === '' || password === '') {
      alert('Please fill in both email and password.');
      return;
    }

    // If credentials are valid, redirect to the dashboard
    navigate('/dashboard');
  };

  return (

    <div className="container">
      <div className="left-section">
        <div className="inner-box">
          <div className="logo">
            <img className="logo1" src={logo} alt="Base Logo" />
            <p className="logo-name">Base</p>
          </div>
          <div className="heading1">
            <h1>Generate detailed reports with just one click</h1>
          </div>
          <div className="image-wrapper">
            <img src={woman} alt="Woman with camera"/>
          </div>
          <Theme/>
        </div>

      </div>
      
      <div className="right-section">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="social-login">
        <div><Login /></div>
        </div>
        <div style={{width: '423.64px'}}>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="*" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
          <div className="forgot-password">
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        </div>
        <p className="register-link">
          Don't have an account? <a href="/">Register here</a>
        </p>
      </div>
    </div>
);
}


export default App;