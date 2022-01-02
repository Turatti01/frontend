import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import image2 from "../../Assets/doguinho1.jpg";
import "./styles.css";
import Header from "../../components/Header";
import ReactLoading from "react-loading";

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

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div class="register-login container" style={{ height: "100%" }}>
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
              <div
                key={pet.id}
                className="pet-card"
                onClick={() => openPet(pet.id)}
              >
                <div
                  className="imageaa"
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
                <div className="pet-card-details">
                  <h4>
                    <strong>{pet.nome}</strong>
                  </h4>
                  <ul>
                    <li>Idade: {pet.idade}</li>
                    <li>Cor: {pet.cor}</li>
                    <li>Tipo: {pet.tipo}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
