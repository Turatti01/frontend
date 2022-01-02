import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import image1 from "../../Assets/logomarca.svg";
import image2 from "../../Assets/doguinho1.jpg";
import "./styles.css";
import Header from "../../components/Header";

export default function SelectPet() {
  const history = useHistory();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    async function fetchData() {
      const resp = await api.get(`/pets.list/${userId}`);
      setPets(resp.data);
    }
    fetchData();
  }, []);

  function openPet(id) {
    history.push(`/pet/${id}`);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />

      <div class="register-login container" style={{ height: "100%" }}>
        <div>
          <Link className="botaopet" to="/CadAnimal">
            Cadastrar novo animal
          </Link>
        </div>
        {/* PETS DO USUÁRIO */}
        <div className="pet-cards--wrapper" style={{ marginTop: 100 }}>
          {pets.map((pet) => (
            // CADA UM DENTRO DO MAP É UM PET
            <div
              key={pet.id}
              className="pet-card"
              onClick={() => openPet(pet.id)}
            >
              <div
                className="imageaa"
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
              <div className="pet-card-details">
                <h4>
                  <strong>{pet.nome}</strong>
                </h4>
                <ul>
                  <li>Idade: {pet.idade}</li>
                  <li>Cor: {pet.cor}</li>
                  <li>Tipo: {pet.tipo}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <footer id="footer">
        <div class="center">
          <div class="footer__box">
            <nav class="footer_menu">
              <Link to="#" class="footer__link">
                Quem Somos
              </Link>
              <Link to="#" class="footer__link">
                Blog
              </Link>
              <Link to="#" class="footer__link">
                Como Funciona
              </Link>
              <Link to="#" class="footer__link">
                Acesse Agora
              </Link>
            </nav>
            <div class="footer__newsletter">
              <span class="footer__newsletter-title">NewsLetter</span>
              <span class="footer__newsletter-text">
                Inscreva-se para receber novidades<br></br>
              </span>
              <form action="" class="footer__newsletter-form">
                <input
                  type="text"
                  placeholder="Endereço de E-mail"
                  class="footer__newsletter-input"
                ></input>
                <button
                  type="submit"
                  class="footer__newsletter-button"
                ></button>
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
      </footer> */}
    </div>
  );
}
