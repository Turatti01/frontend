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
  const [sendForm, setSendForm] = useState(false);
  const [name, setName] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setSendForm(true);
    try {
      await api.post("/users.create", { name, email, password });
      alert("Usuário cadastrado");
      history.push("/");
    } catch (err) {
      setSendForm(false);
      alert("Oops, algo deu errado");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <PublicHeader />
      <main className="register-login container flex flex--centro flex--coluna">
        <section className="cartao cadastro">
          <h1 className="cartao__titulo">Cadastro</h1>
          <form className="flex flex--coluna" onSubmit={handleRegister}>
            <div className="input-container">
              <input
                name="nome"
                className="input"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label className="input-label" for="nome">
                Nome
              </label>
            </div>
            <div className="input-container">
              <input
                name="email"
                className="input"
                type="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label className="input-label" for="email">
                E-mail
              </label>
            </div>
            <div className="input-container">
              <input
                name="senha"
                className="input"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label className="input-label" for="senha">
                Senha
              </label>
            </div>
            <button type="submit" disabled={sendForm} className="botao">
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
