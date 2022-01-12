import { React, useState } from "react";
import api from "../../api";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import image1 from "../../Assets/cachorro-sorrindo.png";
import { FiHome } from "react-icons/fi";
// import { GiDogBowl } from "react-icons/fi";
//import StorageIcon from '@material-ui/icons/Storage';
export default function EditMed() {
  const history = useHistory();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [descricao, setDescricao] = useState("");

  function logout() {
    localStorage.clear();
    history.push("/");
  }
  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      petId: id,
      data1,
      data2,
      descricao,
    };
    console.log(data);
    try {
      const response = await api.post(`/medicamentos.create/${id}`, data);
      history.push(`/Medicamentos/${id}`);
    } catch (err) {
      alert("Oops, algo deu errado");
    }
  }

  return (
    <div className="dashboard-page">
      <header className="vsf">
        <div className="left">
          <h3>
            Help <span>Pet </span>
          </h3>
        </div>
        <div className="right">
          <a to="#" onClick={logout} className="sair_btn">
            Sair
          </a>
        </div>
      </header>
      <div className="content dashboard">
        <nav className="sidebar">
          <center>
            <img src={image1} className="image" alt="" />
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
          <section className="cartao cadastro">
            <h1 className="cartao__titulo">Cadastrar Medicamento</h1>
            <form className="flex flex--coluna" onSubmit={handleRegister}>
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label className="input-label" for="vacina">
                  Nome Do Medicamento
                </label>
                <span className="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div className="input-container">
                <input
                  className="input"
                  type="date"
                  placeholder="Data da Vacina"
                  value={data1}
                  onChange={(e) => setData1(e.target.value)}
                />
                <label className="input-label" for="dataVacina">
                  Data do Medicamento
                </label>
                <span className="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div className="input-container">
                <input
                  className="input"
                  type="date"
                  placeholder="Data da Vacina"
                  value={data2}
                  onChange={(e) => setData2(e.target.value)}
                />
                <label className="input-label" for="senha">
                  Data Para Revacinar
                </label>
                <span className="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <label className="input-label" for="senha">
                  Observação
                </label>
                <span className="input-mensagem-erro">
                  Esse campo não pode estar vazio
                </span>
              </div>
              <button type="submit" className="botao">
                Salvar
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
