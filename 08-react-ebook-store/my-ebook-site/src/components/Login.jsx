import React from 'react';

const Login = () => {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form className="auth-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
        <p class='form-urls'>Don't have an account? <a href='signup'>Signup</a></p>
      </form>
    </div>
  );
};

export default Login;
