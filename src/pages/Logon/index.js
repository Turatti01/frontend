import {React, useState} from 'react';
import api from '../../api'
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css'; 

import image1 from '../../Assets/logomarca.svg'; 
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
            history.push('/SelectPet')
        }catch(err){
            alert("Oops, algo deu errado")
        }

    }

    return (
        
        <div>
            <section id="menu">
        <div class="center">
          <header id="main-header">
            { <img src={image1} alt="Logomarca Helpet"></img> }
            <nav>
              <ul class="menu">
                <li class="menu__item">
                  <Link class="menu__link" href="./quemsomos.html">Quem Somos</Link>
                </li>
                <li class="menu__item">
                  <Link class="menu__link" href="./blog.html">Blog</Link>
                </li>
                <li class="menu__item">
                  <Link class="menu__link" href="./comoFunciona.html">Como Funciona</Link>
                </li>
                <li class="menu__item">
                    <Link class="menu__link" href="./login_usuario.html">Acesse Agora</Link>
                  </li>
              </ul>
            </nav>
          </header>
        </div>
        </section>
    <main class="register-login container flex flex--centro flex--coluna" >
        <section class="cartao">
            <h1 class="cartao__titulo">Login</h1>
            <form class="flex flex--coluna" onSubmit={handleLogin}>
                <div class="input-container">
                    <input name ="email" class="input" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <label class="input-label" for="email" >E-mail</label>
                </div>
                <div class="input-container">
                <input type = "password"  name="senha" class="input" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <label class="input-label" for="senha" >Senha</label>
                </div>
                <button type="submit"class="botao">
                Fazer Login
            </button>
             <Link class="botao-secundario" to="/register" >
              Não possuo cadastro 
             </Link>
            </form>
        </section>
    </main>
    <footer id="footer">
        <div class="center">
          <div class="footer__box">
            <nav class="footer_menu">
              <Link to="#" class="footer__link">Quem Somos</Link>
              <Link to="#" class="footer__link">Blog</Link>
              <Link to="#" class="footer__link">Como Funciona</Link>
              <Link to="#" class="footer__link">Acesse Agora</Link>
            </nav>
            <div class="footer__newsletter">
              <span class="footer__newsletter-title">NewsLetter</span>
              <span class="footer__newsletter-text">Inscreva-se para receber novidades<br></br></span>
              <form action="" class="footer__newsletter-form">
                  <input type="text" placeholder="Endereço de E-mail" class="footer__newsletter-input"></input>
                  <button type="submit" class="footer__newsletter-button"></button>
              </form>
            </div>
          </div>
          
        </div>
        <div class="footer__copyright">
          <div class="center">
            <span class="footer__copyright-text">2020 © Helpet</span>
            <div>
              <Link to="" class="footer__copyright-link">
                <i class="icon icon-fb"></i>
              </Link>
              <Link to="" class="footer__copyright-link">
                <i class="icon icon-twitter"></i>
              </Link>
              <Link to="" class="footer__copyright-link">
                <i class="icon icon-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
  
    );
}