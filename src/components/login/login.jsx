import React, { useState } from 'react';
import './login.css';
import { assets } from '../../assets/assets';

function Login({ setShowLogin }) {
  const [current, setCurrent] = useState('SignUp');

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {current === 'SignUp' && (
            <input type="text" placeholder='Your Name' required />
          )}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">
          {current === 'SignUp' ? 'Create Account' : 'Login'}
        </button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {current === 'Login' ? (
          <p>
            Already have an account? <span onClick={() => setCurrent('SignUp')}>SignUp here</span>
          </p>
        ) : (
          <p>
            Create a new account? <span onClick={() => setCurrent('Login')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;