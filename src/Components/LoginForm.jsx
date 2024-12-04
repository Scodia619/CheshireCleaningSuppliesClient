import React, { useState, useContext, useEffect } from 'react';
import "../Styles/LoginForm.css";
import { postLogin } from '../../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/userContext';

function LoginForm({ setLoginFormDisplay }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const { setUser } = useContext(UserContext);

  const notify = (message) => {
    toast.error(message);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoggingIn(true);
    const loginData = { username, password };

    try {
      const user = await postLogin(loginData);
      setUser(user);
      setLoggingIn(false);
      navigate("/");
    } catch (error) {
      setLoggingIn(false);
      setError(true);
      setErrorMessage(error.response?.data?.msg || "An error occurred")
    }
  };

  const handleChangeForm = (event) => {
    event.preventDefault();
    setLoginFormDisplay(false);
  };

  if (loggingIn) {
    return <h2>Logging In</h2>;
  }

  if(error){
    notify(errorMessage)
    setError(false);
  }

  return (
    <div>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-label"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-label"
          required
        />
        <button type="submit" className="form-submit-button" onClick={handleLogin}>Login</button>
        <hr />
        <button type="button" className="form-submit-button" onClick={handleChangeForm}>Create User</button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default LoginForm;