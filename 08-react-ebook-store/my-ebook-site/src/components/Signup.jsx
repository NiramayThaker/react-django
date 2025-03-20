import React from 'react';

const Signup = () => {
  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Create a password" />
        <button type="submit">Sign Up</button>
        <p class='form-urls'>Already have an account? <a href='login'>Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
