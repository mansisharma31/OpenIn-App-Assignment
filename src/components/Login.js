import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="social-login">
      <GoogleLogin 
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          // Redirect to /dashboard on successful login
          navigate('/dashboard');
        }}
        onError={() => {
          alert('Login Failed');
        }}
      />
    </div>
  )
}
export default Login;