import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import Header from "../../components/Header";
import ReactLoading from "react-loading";
import { FiTrash } from "react-icons/fi";

export default function SelectPet() {
  const history = useHistory();
  const [pets, setPets] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    async function fetchData() {
      const resp = await api.get(`/pets.list/${userId}`);
      setPets(resp.data);
    }
    fetchData();
  }, []);

  function openPet(id) {
    history.push(`/pet/${id}`);
  }

  async function deletePet(id) {
    const response = window.confirm("Tem certeza que deseja excluir o pet?");
    if (response) {
      try {
        await api.post(`/pet.delete/${id}`);
        setPets((state) => state.filter((pet) => pet.id !== id));
      } catch (err) {
        alert("Não foi possível deletar");
      }
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div className="register-login container" style={{ height: "100%" }}>
        <div>
          <Link className="botaopet" to="/CadAnimal">
            Cadastrar novo animal
          </Link>
        </div>
        {pets == null && (
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
        {pets != null && (
          <div className="pet-cards--wrapper" style={{ marginTop: 70 }}>
            {pets.map((pet) => (
              <div key={pet.id} className="pet-card">
                <div
                  onClick={() => openPet(pet.id)}
                  className="imageaa"
                  style={{
                    backgroundImage: `url(${
                      pet.img ||
                      "https://vmcom.com.br/adm_cursos/admpanel-vm/img/default.jpg"
                    })`,
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    background: "rgb(247, 247, 247)",
                    borderRadius: "0px 0px 8px 8px",
                  }}
                >
                  <div
                    className="pet-card-details"
                    onClick={() => openPet(pet.id)}
                  >
                    <h4>
                      <strong>{pet.nome}</strong>
                    </h4>
                    <ul>
                      <li>Idade: {pet.idade}</li>
                      <li>Cor: {pet.cor}</li>
                      <li>Tipo: {pet.tipo}</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      width: "max-content",
                      padding: 10,
                    }}
                  >
                    <FiTrash size={20} onClick={() => deletePet(pet.id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
