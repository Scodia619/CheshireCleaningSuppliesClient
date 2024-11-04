import React, { useState, useContext } from 'react';
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

  const {setUser} = useContext(UserContext)

  const notify = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const loginData = {
      username: username,
      password: password
    }
    postLogin(loginData)
      .then((user) => {
        setUser(user)
        navigate("/");
      })
      .catch(({ response: { data } }) => {
        notify(data.msg);
      });
  };

  const handleChangeForm = (event) => {
    event.preventDefault()
    setLoginFormDisplay(false)
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
        <button type="submit" className="form-submit-button" onClick={handleChangeForm}>Create User</button>
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