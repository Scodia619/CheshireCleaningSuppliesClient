import React, { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import "../Styles/LoginForm.css";
import CreateUserForm from '../Components/CreateUserForm';

function LogIn() {

  const [loginFormDisplay, setLoginFormDisplay] = useState(true);

  return (
    <div className="login-page">
      {loginFormDisplay ? (
        <LoginForm setLoginFormDisplay={setLoginFormDisplay} />
      ) : (
        <CreateUserForm setLoginFormDisplay={setLoginFormDisplay} />
      )}
    </div>
  )
}

export default LogIn