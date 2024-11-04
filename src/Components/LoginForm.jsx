import React, { useState } from 'react';
import "../Styles/LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit} class="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="form-label"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-label"
            required
          />
        <button type="submit" class="form-submit-button">Submit</button>
      </form>
  );
}

export default LoginForm;