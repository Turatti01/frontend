import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import { FiTrash2 } from "react-icons/fi";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactLoading from "react-loading";

export default function Vacina() {
  const [vacina, setVacina] = useState(null);
  const [pet, setPet] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const vac = await api.get(`/vacina.list/${id}`);
      setVacina(vac.data);

      const pet = await api.get(`/pet.list/${id}`);
      setPet(pet.data);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <Header />
      <div class="content dashboard">
        {pet == null && vacina == null && (
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
        {pet != null && vacina != null && (
          <>
            <Sidebar pet={pet} />
            <div style={{ width: "100%", padding: 20 }}>
              <Link className="botaopet" to={`/CadVac/${id}`}>
                Cadastrar Vacina
              </Link>
              <div style={{ marginTop: 30 }}>
                <ul>
                  {vacina.map((vacina) => (
                    <li key={vacina.id}>
                      <strong>Nome:</strong>
                      {vacina.nome}
                      <strong>Data da Primeira dose: </strong>
                      {vacina.data1}
                      <strong>Data da Segunda dose: </strong>
                      {vacina.data2}
                      <strong>Descrição:</strong>
                      {vacina.descricao}

                      <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
