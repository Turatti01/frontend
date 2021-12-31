import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../api'
import image1 from '../../Assets/logomarca.svg';
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
            history.push('/SelectPet');
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
      <main class="register-login container flex flex--centro flex--coluna">
        <section class="cartao cadastro">
            <h1 class="cartao__titulo">Cadastro</h1>
            <form class="flex flex--coluna" onSubmit={handleRegister}>
                <div class="input-container">
                    <input name="nome" class="input" type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} ></input>
                    <label class="input-label" for="nome">Nome</label>
                </div>
                <div class="input-container">
                    <input name="email" class="input" type="Email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
                    <label class="input-label" for="email" >E-mail</label>
                </div>
                <div class="input-container">
                    <input name="senha" class="input" type="password" placeholder="Senha"value={password} onChange={e => setPassword(e.target.value)}></input>
                    <label class="input-label" for="senha" >Senha</label>
                </div>
                <button type="submit"class="botao">
                Cadastrar
            </button>
            </form>
            <Link class="botao-secundario" to="/" >
              Já possuo cadastro 
             </Link>
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
                
