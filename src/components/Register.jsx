import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/Register', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, senha: pass })
        });
        const data = await response.json();
        if (data.codigo) {
            // handle error
            console.error(data.descricao);
        } else {
            // handle success
            console.log(data);
            navigate('/');
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Registrar</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome completo: </label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nome completo" />
            <label htmlFor="email">E-mail: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Senha: </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Registrar</button>
        </form>
        <Link to="/" className="link-btn">
      Já possui conta? Faça o login.
    </Link>
    </div>
    )
}