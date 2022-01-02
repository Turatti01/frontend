import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import PublicHeader from "../../components/PublicHeader";
import "./styles.css";
import Footer from "../../components/Footer";

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/users.create", { name, email, password });
      alert("Usuário cadastrado");
      history.push("/SelectPet");
    } catch (err) {
      alert("Oops, algo deu errado");
    }
  }

  return (
    <div>
      <PublicHeader />
      <main class="register-login container flex flex--centro flex--coluna">
        <section class="cartao cadastro">
          <h1 class="cartao__titulo">Cadastro</h1>
          <form class="flex flex--coluna" onSubmit={handleRegister}>
            <div class="input-container">
              <input
                name="nome"
                class="input"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Nome
              </label>
            </div>
            <div class="input-container">
              <input
                name="email"
                class="input"
                type="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label class="input-label" for="email">
                E-mail
              </label>
            </div>
            <div class="input-container">
              <input
                name="senha"
                class="input"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label class="input-label" for="senha">
                Senha
              </label>
            </div>
            <button type="submit" class="botao">
              Cadastrar
            </button>
          </form>
          <Link
            to="/"
            style={{
              color: "rgb(255, 103, 82)",
              textAlign: "center",
              marginTop: 20,
              fontWeight: 600,
            }}
          >
            Já possuo cadastro
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
