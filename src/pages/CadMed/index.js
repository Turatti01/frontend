import { React, useState, useEffect } from "react";
import api from "../../api";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CadMed() {
  const history = useHistory();
  const { id } = useParams();
  const [sendForm, setSendForm] = useState(false);
  const [nome, setNome] = useState("");
  const [pet, setPet] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/pet.list/${id}`);
      setPet(response.data);
    }
    fetchData();
  }, []);

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
      await api.post(`/medicamentos.create/${id}`, data);
      history.push(`/Medicamentos/${id}`);
    } catch (err) {
      setSendForm(false);
      alert("Oops, algo deu errado");
    }
  }

  return (
    <div className="dashboard-page">
      <Header />
      <div class="content dashboard">
        <Sidebar pet={pet} />
        <div style={{ width: "100%", padding: 20 }}>
          <section class="cartao cadastro">
            <h1 class="cartao__titulo">Cadastrar Medicamento</h1>
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
                  Nome Do Medicamento
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
                  Data do Medicamento
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
        </div>
      </div>
    </div>
  );
}
