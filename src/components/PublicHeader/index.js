import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../Assets/logomarca.svg";
import "./styles.css";

export default function PubçicRegister() {
  return (
    <section id="menu">
      <div class="center">
        <header id="main-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            {<img src={image1} alt="Logomarca Helpet"></img>}
            <h3 style={{ color: "white", fontWeight: 200, fontSize: 30 }}>
              Help<span style={{ fontWeight: 700 }}>Pet </span>
            </h3>
          </div>
          <nav>
            <ul class="menu">
              <li class="menu__item">
                <Link class="menu__link" to="/">
                  Entrar
                </Link>
              </li>
              <li class="menu__item">
                <Link class="menu__link" to="register">
                  Cadastrar-se
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
}
