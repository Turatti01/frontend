import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import { FiTrash2, FiPlus } from "react-icons/fi";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactLoading from "react-loading";
// import moment from "moment";

export default function Vacina() {
  const [vacina, setVacina] = useState(null);
  const [pet, setPet] = useState(null);
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const vac = await api.get(`/vacina.list/${id}`);

      // vac.data.map((vacina) => {
      //   var a = moment(new Date(vacina.data1));
      //   var b = moment();
      //   var diffDays = b.diff(a, "days");
      //   vacina.diasRestantes = diffDays;
      // });
      setVacina(vac.data);

      const pet = await api.get(`/pet.list/${id}`);
      setPet(pet.data);
    }
    fetchData();
  }, []);

  function novaDose(vacina) {
    history.push(`/CadDose/${id}/${vacina}`);
  }

  return (
    <div className="dashboard-page">
      <Header />
      <div className="content dashboard">
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
              <div className="vacina-wrapper">
                <h3>Para que serve a vacinação?</h3>
                <div>
                  Seguir um calendário vacinal completo e efetivo é fundamental
                  para garantir a saúde e a longevidade do seu animal de
                  estimação, além de impedir a disseminação de doenças como: a
                  raiva, a leptospirose ou a giardíase em seres humanos.
                  Vaciná-los preventivamente também evita doenças que podem
                  deixar sequelas nos animais como, por exemplo, a leucemia
                  felina...
                </div>
                <a href="/Vacinas" target="_blank">
                  <button>Ver mais</button>
                </a>
              </div>
              <Link className="botaopet" to={`/CadVac/${id}`}>
                Cadastrar Vacina
              </Link>
              <div className="profile-container" style={{ marginTop: 30 }}>
                <ul>
                  {vacina.map((vacina) => (
                    <li key={vacina.id} className="vacina-card">
                      {/* <div className="vacina-label">
                        {new Date().toLocaleDateString("pt-BR", {
                          timeZone: "UTC",
                        })}
                        {vacina.diasRestantes} dias
                      </div> */}
                      <div>
                        <strong
                          style={{
                            fontWeight: 800,
                            textTransform: "uppercase",
                            textAlign: "center",
                          }}
                        >
                          {vacina.nome}
                        </strong>
                        <div className="vacina-data">
                          <strong>Primeira dose: </strong>
                          {new Date(vacina.data1).toLocaleDateString("pt-BR", {
                            timeZone: "UTC",
                          })}
                        </div>

                        <div className="vacina-data">
                          <strong>Segunda dose: </strong>
                          {new Date(vacina.data2).toLocaleDateString("pt-BR", {
                            timeZone: "UTC",
                          })}
                        </div>
                        {vacina.descricao && (
                          <div className="vacina-data">
                            <strong>Obs.:</strong>
                            {vacina.descricao}
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() => novaDose(vacina.id)}
                          className="add-light-button"
                          disabled={vacina.completo}
                        >
                          <FiPlus size={15} color="white" />
                          Adicionar dose
                        </button>
                        <button className="delete-red-button">
                          <FiTrash2 size={15} color="white" />
                          Remover
                        </button>
                      </div>
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
