import React, { useState } from "react";
import api from "../../api";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

export default function CadAnimal() {
  const history = useHistory();
  const [sendForm, setSendForm] = useState(false);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [file, setFile] = useState("");
  const [idade, setIdade] = useState("");
  const [cor, setCor] = useState("");
  const [dataani, setDataani] = useState("");
  const [anidotado, setAnidotado] = useState("");
  const [temperamento, setTemperamento] = useState("");
  const [castrado, setCastrado] = useState("");

  async function handleRegister2(e) {
    e.preventDefault();
    setSendForm(true);
    const userId = localStorage.getItem("userId");

    const form = new FormData();
    form.append("file", file);
    form.append("nome", nome);
    form.append("tipo", tipo);
    form.append("userId", userId);
    form.append("raca", raca);
    form.append("idade", idade);
    form.append("cor", cor);
    form.append("dataani", dataani);
    form.append("anidotado", anidotado);
    form.append("temperamento", temperamento);
    form.append("castrado", castrado);

    try {
      const response = await api.post("/pets.create", form);
      history.push(`/pet/${response.data.id}`);
    } catch (err) {
      setSendForm(false);
      alert("Oops, algo deu errado");
    }
  }
  return (
    <div>
      <Header />
      <main class="register-login container flex flex--centro flex--coluna">
        <section class="cartao cadastro">
          <h1 class="cartao__titulo">
            <center>Cadastro de Pet</center>
          </h1>
          <form class="flex flex--coluna" onSubmit={handleRegister2}>
            <div class="input-container">
              <input
                class="input"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Nome
              </label>
            </div>
            <div class="input-container">
              {/* <input name="raca" class="input" type="text" placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)} ></input> */}
              <select
                class="input"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option> Selecione</option>
                <option> Gato </option>
                <option> Cachorro </option>
                <option> Hamster </option>
              </select>
              <label class="input-label" for="tipo">
                Tipo
              </label>
            </div>

            <div class="input-container">
              <input
                class="input"
                type="text"
                placeholder="Raca"
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
              ></input>
              <label class="input-label" for="email">
                Raça
              </label>
            </div>
            <div class="input-container">
              <input
                class="input"
                type="text"
                placeholder="Idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Idade
              </label>
            </div>
            <div class="input-container">
              <input
                class="input"
                type="text"
                placeholder="Cor"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Cor
              </label>
            </div>
            <div class="input-container">
              <input
                class="input"
                type="date"
                placeholder="Data de Aniversário"
                value={dataani}
                onChange={(e) => setDataani(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Data de Aniversário
              </label>
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
              <input
                class="input"
                type="text"
                placeholder="Temperamento"
                value={temperamento}
                onChange={(e) => setTemperamento(e.target.value)}
              ></input>
              <label class="input-label" for="nome">
                Temperamento
              </label>
            </div>
            <div class="radio-container">
              <form>
                {/* <input name="Castrado" class="input" type="text" placeholder="Castrado" value={castrado} onChange={e => setCastrado(e.target.value)} ></input> */}
                <p>Castrado</p>
                <div>
                  <input type="radio" name="contact" class="radio" />
                  <label for="sim">Sim</label>
                  <input type="radio" name="contact" class="radio" />
                  <label for="nao">Não</label>
                </div>
              </form>
            </div>

            <input
              type="file"
              name="file"
              accept="image/png, image/jpeg, image/pjpeg, image/jpg"
              id="file-upload"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit" disabled={sendForm} class="botao">
              Cadastrar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
