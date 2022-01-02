import { React, useState } from "react";
import api from "../../api";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import PublicHeader from "../../components/PublicHeader";
import Footer from "../../components/Footer";

export default function Logon() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [sendForm, setSendForm] = useState(false);
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setSendForm(true);
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("userId", response.data.id);
      console.log(response.data.id);
      history.push("/SelectPet");
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
      <main class="register-login container flex flex--centro flex--coluna">
        <section class="cartao">
          <h1 class="cartao__titulo">Login</h1>
          <form class="flex flex--coluna" onSubmit={handleLogin}>
            <div class="input-container">
              <input
                name="email"
                class="input"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label class="input-label" for="email">
                E-mail
              </label>
            </div>
            <div class="input-container">
              <input
                type="password"
                name="senha"
                class="input"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label class="input-label" for="senha">
                Senha
              </label>
            </div>
            <button type="submit" disabled={sendForm} class="botao">
              Fazer Login
            </button>
            <Link
              style={{
                color: "rgb(255, 103, 82)",
                textAlign: "center",
                marginTop: 20,
                fontWeight: 600,
              }}
              to="/register"
            >
              Não possuo cadastro
            </Link>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
