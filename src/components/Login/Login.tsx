// src/Login.tsx

import React,  { useState }  from 'react';
import './Login.css';
import logo from '../../assets/images/logo.png'
import hero from '../../assets/images/signin.jpeg';


const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (

   <div className="login">
     <img src={logo} alt="Logo" className="login-logo" />
     <div className="login-container">
        <img src={hero} alt="hero" className="login-img" />
       <div className="form-container">
       <h3>Welcome!</h3>
        <p>Enter details to login.</p>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
          <input type="text" placeholder="Username" className="login-input" />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="login-input"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
       
        
      
        <button type="submit" className="login-button">Login</button>
      </form>
       </div>
    </div>
   </div>
  );
}

export default Login;
