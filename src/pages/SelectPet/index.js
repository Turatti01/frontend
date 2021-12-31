import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';
import api from '../../api'
//import { FiPower, FiTrash2 } from 'react-icons/fi'
//import { FiLogIn } from 'react-icons/fi';
import image1 from '../../Assets/logomarca.svg';
import image2 from '../../Assets/doguinho1.jpg';
import "./styles.css";

export default function SelectPet(){
  const [pets, setPets] = useState([]);

    useEffect(()=>{
     const userId = localStorage.getItem('userId')
        async function fetchData() {
        const resp = await api.get(`/pets.list/${userId}`);
            setPets(resp.data);
            console.log(resp.data)
        }
        fetchData();
    }, []);


    // function logout() {
    //   localStorage.clear()
    //   history.push('/')
    // }
return(
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
    <Link className="botaopet" to="/CadAnimal">Cadastrar novo animal</Link>
    
    {/* PETS DO USUÁRIO */}
    <div className='pet-cards--wrapper'> 
      {pets.map( pet=> 
      // CADA UM DENTRO DO MAP É UM PET
        <div key={pet.id} className='pet-card'> 
          <img src={image2}  position= "flex" height= "200px" width= "100px"></img>
          <div className='pet-card-details'>
            <h4><strong>{pet.nome}</strong></h4>
            <ul>
              <li>Idade: {pet.idade}</li>
              <li>Cor: {pet.cor}</li>
              <li>Tipo: {pet.tipo}</li>
            </ul>
          </div>
        </div>
      )} 
    </div>


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