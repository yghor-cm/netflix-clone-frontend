import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // add this state to handle error message
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
    <div className="auth-form-container">
      <h2>Login</h2>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Senha: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/register" className="link-btn">
        Não possui conta? Cadastre-se
      </Link>
    </div>
  );
};
