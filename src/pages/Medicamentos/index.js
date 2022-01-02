import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import { FiTrash2 } from "react-icons/fi";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
export default function Medicamentos() {
  const [pet, setPet] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const med = await api.get(`/medicamentos.list/${id}`);
      setMedicamentos(med.data);

      const response = await api.get(`/pet.list/${id}`);
      setPet(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <Header />
      <div class="content dashboard">
        <Sidebar pet={pet} />
        <div style={{ width: "100%", padding: 20 }}>
          <Link className="botaopet" to={`/CadMed/${id}`}>
            Cadastrar Medicamento
          </Link>
          <div className="profile-container" style={{ marginTop: 30 }}>
            <ul>
              {medicamentos.map((medicamentos) => (
                <li key={medicamentos.id}>
                  <strong>Nome:</strong>
                  {medicamentos.nome}
                  <strong>Data da Primeira dose: </strong>
                  {medicamentos.data1}
                  <strong>Data da Segunda dose: </strong>
                  {medicamentos.data2}
                  <strong>Descrição:</strong>
                  {medicamentos.descricao}

                  <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
