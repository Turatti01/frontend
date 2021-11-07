import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../api'

import "./styles.css";

export default function Register(){
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        try{
            await api.post('/users.create', {name, email, password});
            alert("Usuário cadastrado")
            history.push('/selecionar');
        }catch(err){
            alert("Oops, algo deu errado")
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>

                    <Link className="back-link" to = "/">
                        <FiArrowLeft size={13} color="#000000"  />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                    <input type="Password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button> 
                
                </form>
            </div>
        </div>
    )
}