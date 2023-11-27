// SimpleLogin.js
import React from 'react';

const SimpleLogin = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For simplicity, I'm just logging the form data to the console
    const formData = new FormData(e.target);
    console.log({
      username: formData.get('username'),
      password: formData.get('password'),
    });
    // You can add authentication logic here and close the form if login is successful
    onClose();
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SimpleLogin;
