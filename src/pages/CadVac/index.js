import { React, useState } from "react";
import api from "../../api";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";
import image1 from "../../Assets/cachorro-sorrindo.png";
import { FiHome } from "react-icons/fi";
import Header from "../../components/Header";

export default function EditVac() {
  const history = useHistory();
  const { id } = useParams();
  const [sendForm, setSendForm] = useState(false);
  const [nome, setNome] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setSendForm(true);
    const data = {
      nome,
      petId: id,
      data1,
      data2,
      descricao,
    };
    console.log(data);
    try {
      await api.post(`/vacina.create/${id}`, data);
      history.push(`/Vacina/${id}`);
    } catch (err) {
      setSendForm(false);
      alert("Oops, algo deu errado");
    }
  }

  return (
    <div className="dashboard-page">
      <Header />
      <div class="content dashboard">
        <nav class="sidebar">
          <center>
            <img src={image1} class="image" alt="" />
            <h2>Sisi</h2>
          </center>
          <a href="/Vacina">
            <FiHome size={16} />
            <span>Vacinas</span>
          </a>
          <a href="/Medicamentos">
            <FiHome size={16} />
            <span>Medicamentos</span>
          </a>
        </nav>
        <main>
          <section class="cartao cadastro">
            <h1 class="cartao__titulo">Cadastrar Vacina</h1>
            <form class="flex flex--coluna" onSubmit={handleRegister}>
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label class="input-label" for="vacina">
                  Nome Da Vacina
                </label>
                <span class="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div class="input-container">
                <input
                  class="input"
                  type="date"
                  placeholder="Data da Vacina"
                  value={data1}
                  onChange={(e) => setData1(e.target.value)}
                />
                <label class="input-label" for="dataVacina">
                  Data da Vacina
                </label>
                <span class="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div class="input-container">
                <input
                  class="input"
                  type="date"
                  placeholder="Data da Vacina"
                  value={data2}
                  onChange={(e) => setData2(e.target.value)}
                />
                <label class="input-label" for="senha">
                  Data Para Revacinar
                </label>
                <span class="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <label class="input-label" for="senha">
                  Observação
                </label>
                <span class="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <button type="submit" disabled={sendForm} class="botao">
                Salvar
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
