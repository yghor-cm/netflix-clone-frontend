import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/netflix/Register', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, senha: pass })
        });
        const data = await response.json();
        if (data.codigo) {
            console.error(data.descricao);
        } else {
            console.log(data);
            navigate('/');
        }
    }

    return (
        <>
    <img className="nav-logo-login" src={logo} alt="NetFlix"></img>
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registrar</h2>
            <label htmlFor="name">Nome completo: </label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nome completo" />
            <label htmlFor="email">E-mail: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Senha: </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Registrar</button>
            <Link to="/" className="link-btn">
      Já possui conta? Faça o login.
    </Link>
        </form>
    </div>
    </>
    )
}