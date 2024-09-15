import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const dummyEmail = 'hritik@gmail.com';
    const dummyPassword = 'hritik';

    if (email === dummyEmail && password === dummyPassword) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p><a href="/terms">By signing in you are agreeing to our Term and privacy policy</a></p>
      
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="eye-icon">👁️</i>
        </div>

        <div className="options">
  <div className="remember-password">
    <input type="checkbox" id="remember" />
    <label htmlFor="remember">Remember password</label>
  </div>
  <a href="/forgot-password">Forget password?</a>
</div>


        <button type="submit" className="login-btn">Login</button>

        <p>or connect with</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-linkedin"></i>
        </div>

        <div className="fingerprint">
          <i className="fas fa-fingerprint"></i>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
