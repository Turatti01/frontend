import {React, useState} from 'react';
import api from '../../api'
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css'; 

export default function Logon(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        try{
            const response = await api.post('/login', data)
            localStorage.setItem('userId', response.data.id)
            history.push('/selecionar')
        }catch(err){
            alert("Oops, algo deu errado")
        }

    }

    return (
        <div className="back">
            <h1>
                <div className="logonContainer">
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu login</h1>

                        <label>Email</label>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
 
                        <label>Senha</label>
                        <input type = "password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input> 
                    
                        <button className="button" type="submit">Entrar</button>
                        
                        <Link className="back-link" to = "/register" >
                            <FiLogIn size={16} color="#111111"  />
                            Registre-se
                        </Link>
                    </form>
                </div>
            </h1>
        </div>
    );
}