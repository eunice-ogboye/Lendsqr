// src/Login.tsx

import React,  { useState }  from 'react';
import './Login.css';
import logo from '../../assets/images/logo.png'
import hero from '../../assets/images/signin.png';


const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (

   <div className="login">
     
     <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <img src={hero} alt="hero" className="login-img" />  
    </div>
    <div className="form-container">
       <h3>Welcome!</h3>
        <p>Enter details to login.</p>
      <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
        <div className="password-container" >
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
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        </div>
        <a href="/forgot-password" className="forgot-password-link">FORGOT PASSWORD?</a>
       
        
      
        <button type="submit" className="login-button">LOG IN</button>
      </form>
       </div>
   </div>
  );
}

export default Login;
