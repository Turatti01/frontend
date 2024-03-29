import { React, useState, useEffect } from "react";
import api from "../../api";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactLoading from "react-loading";

export default function EditVac() {
  const history = useHistory();
  const { id } = useParams();
  const [sendForm, setSendForm] = useState(false);
  const [nome, setNome] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pet, setPet] = useState(null);

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

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/pet.list/${id}`);
      setPet(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <Header />
      <div className="content dashboard">
        {pet == null && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 150,
              width: "100%",
            }}
          >
            <ReactLoading
              type={"bubbles"}
              color={"rgb(255, 103, 82)"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
        {pet != null && (
          <>
            <Sidebar pet={pet} />
            <div style={{ width: "100%", padding: 20 }}>
              <section className="cartao cadastro">
                <h1 className="cartao__titulo">Cadastrar Vacina</h1>
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
                      Nome Da Vacina
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
                      Data da Vacina
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
                  <button type="submit" disabled={sendForm} className="botao">
                    Salvar
                  </button>
                </form>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
