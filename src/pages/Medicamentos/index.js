import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import { FiTrash2 } from "react-icons/fi";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactLoading from "react-loading";

export default function Medicamentos() {
  const [pet, setPet] = useState(null);
  const [medicamentos, setMedicamentos] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const med = await api.get(`/medicamentos.list/${id}`);
      console.log("med", med);
      setMedicamentos(med.data);

      const response = await api.get(`/pet.list/${id}`);
      setPet(response.data);
    }
    fetchData();
    console.log(medicamentos);
    console.log(pet);
  }, []);

  async function deleteMedicamento(id) {
    const response = window.confirm(
      "Tem certeza que deseja excluir o medicamento?"
    );
    if (response) {
      try {
        await api.post(`/deleteVacina/${id}`);
        setMedicamentos((state) => state.filter((med) => med.id !== id));
      } catch (err) {
        console.log(err);
        alert("Oops, algo deu errado");
      }
    }
  }

  return (
    <div className="dashboard-page">
      <Header />
      <div className="content dashboard">
        {pet == null && medicamentos == null && (
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
        {pet != null && medicamentos != null && (
          <>
            <Sidebar pet={pet} />
            <div style={{ width: "100%", padding: 20 }}>
              <Link className="botaopet" to={`/CadMed/${id}`}>
                Cadastrar Medicamento
              </Link>
              <div className="profile-container" style={{ marginTop: 30 }}>
                <ul>
                  {medicamentos.map((medicamentos) => (
                    <li key={medicamentos.id} className="vacina-card card-med">
                      <div>
                        <strong
                          style={{
                            fontWeight: 800,
                            textTransform: "uppercase",
                            textAlign: "center",
                          }}
                        >
                          {medicamentos.nome}
                        </strong>
                        <div className="vacina-data">
                          <strong>Primeira dose: </strong>
                          {new Date(medicamentos.data1).toLocaleDateString(
                            "pt-BR",
                            {
                              timeZone: "UTC",
                            }
                          )}
                        </div>

                        <div className="vacina-data">
                          <strong>Segunda dose: </strong>
                          {new Date(medicamentos.data2).toLocaleDateString(
                            "pt-BR",
                            {
                              timeZone: "UTC",
                            }
                          )}
                        </div>
                        {medicamentos.descricao && (
                          <div className="vacina-data">
                            <strong>Obs.:</strong>
                            {medicamentos.descricao}
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          className="delete-red-button"
                          onClick={() => deleteMedicamento(medicamentos.id)}
                        >
                          <FiTrash2 size={15} color="white" />
                          Remover
                        </button>
                      </div>
                    </li>
                    // <li key={medicamentos.id}>
                    //   <strong>Nome:</strong>
                    //   {medicamentos.nome}
                    //   <strong>Data da Primeira dose: </strong>
                    //   {medicamentos.data1}
                    //   <strong>Data da Segunda dose: </strong>
                    //   {medicamentos.data2}
                    //   <strong>Descrição:</strong>
                    //   {medicamentos.descricao}

                    //   <button type="button">
                    //     <FiTrash2 size={20} color="#a8a8b3" />
                    //   </button>
                    // </li>
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
