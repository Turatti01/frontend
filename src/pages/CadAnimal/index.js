import React, {useState} from 'react'
import api from '../../api'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'
import image1 from '../../Assets/logomarca.svg';
import { FiHome } from "react-icons/fi";
export default function CadAnimal() {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [cor, setCor] = useState('');
  const [dataani, setDataani] = useState('');
  const [anidotado, setAnidotado] = useState('');
  const [temperamento, setTemperamento] = useState('');
  const [castrado, setCastrado] = useState('');

    async function handleRegister2(e){
        e.preventDefault();
        const userId = localStorage.getItem('userId')
        const data = {
          userId,
          nome, 
          tipo, 
          raca, 
          idade, 
          cor, 
          dataani, 
          anidotado, 
          temperamento, 
          castrado,
        };
        console.log(data)
        try{
            const response = await api.post('/pets.create',data);
          alert(`seu id de acesso: ${response.data.id}`)
            history.push('/home');
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
          <a class="menu__link" href="./quemsomos.html">Quem Somos</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="./blog.html">Blog</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="./comoFunciona.html">Como Funciona</a>
        </li>
        <li class="menu__item">
            <a class="menu__link" href="./login_usuario.html">Acesse Agora</a>
          </li>
      </ul>
    </nav>
  </header>
</div>
</section>
  <main class="register-login container flex flex--centro flex--coluna">
    <section class="cartao cadastro">
        <h1 class="cartao__titulo"><center>Cadastro de Pet</center></h1>
        <form class="flex flex--coluna" onSubmit={handleRegister2}>
            <div class="input-container">
                <input  class="input" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} ></input>
                <label class="input-label" for="nome">Nome</label>
            </div>
            <div class="input-container">
                {/* <input name="raca" class="input" type="text" placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)} ></input> */}
                <select class="input" value={tipo} onChange={e => setTipo(e.target.value)}> 
                <option> Selecione</option> 
                  <option> Gato </option>  
                   <option> Cachorro </option>   
                   <option> Hamster </option> 
                </select>
                <label class="input-label" for="tipo" >Tipo</label>
            </div>

            <div class="input-container">
                <input class="input" type="text" placeholder="Raca" value={raca} onChange={e => setRaca(e.target.value)} ></input>
                <label class="input-label" for="email" >Raça</label>
            </div>
            <div class="input-container">
                <input  class="input" type="text" placeholder="Idade"value={idade} onChange={e => setIdade(e.target.value)} ></input>
                <label class="input-label" for="nome">Idade</label>
            </div>
            <div class="input-container">
                <input  class="input" type="text" placeholder="Cor"value={cor} onChange={e => setCor(e.target.value)}></input>
                <label class="input-label" for="nome">Cor</label>
            </div>
            <div class="input-container">
                <input  class="input" type="date" placeholder="Data de Aniversário"value={dataani} onChange={e => setDataani(e.target.value)}></input>
                <label class="input-label" for="nome">Data de Aniversário</label>
            </div>

            <div class="radio-container">
              <form> 
                {/* <input name="nome" class="input" type="text" placeholder="Animal Adotado"value={anidotado} onChange={e => setAnidotado(e.target.value)}></input> */}
                <p>Animal Adotado</p> 
                <div>
                <input type="radio" id="sim" class="radio" />
                <label for="sim">Sim</label>
                <input type="radio" id="nao" class="radio" />
                <label for="nao">Não</label>
                </div>
                </form>
            </div>
            <div class="input-container">
                <input class="input" type="text" placeholder="Temperamento" value={temperamento} onChange={e => setTemperamento(e.target.value)} ></input>
                <label class="input-label" for="nome">Temperamento</label>
            </div>
            <div class="radio-container">
              <form> 
                {/* <input name="Castrado" class="input" type="text" placeholder="Castrado" value={castrado} onChange={e => setCastrado(e.target.value)} ></input> */}
                <p>Castrado</p>
                <div>
                <input type="radio" 
                name="contact" class="radio" />
                <label for="sim">Sim</label>
                <input type="radio"
                name="contact" class="radio" />
                <label for="nao">Não</label>
                </div>
                </form>
            </div>
            
            <button type="submit"class="botao">
            Cadastrar
        </button>
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
  )
}