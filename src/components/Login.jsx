import './Login.css';

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email: email,
      senha: password
    };

    try {
      const response = await fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('sessionID', data.sessionID);
        navigate('/Main');
      } else {
        setErrorMsg(data.descricao);
      }
    } catch (error) {
      setErrorMsg('Ocorreu um erro ao realizar o login.');
    }
  }

  return (
    <>
    <img className="nav-logo-login" src={logo} alt="NetFlix"></img>
    <div className="auth-form-container">
      {errorMsg && <div className="error">{errorMsg}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <label htmlFor="email">E-mail: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Senha: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Login</button>
        <Link to="/register" className="link-btn">
        Não possui conta? Cadastre-se
      </Link>
      </form>
    </div>
    </>
  );
};
