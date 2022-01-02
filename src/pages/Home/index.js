import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ReactLoading from "react-loading";

export default function Home() {
  const [pet, setPet] = useState(null);
  let { id } = useParams();

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
      <div class="content dashboard">
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
              <ul>
                <li>{pet.nome}</li>
                <li>{pet.tipo}</li>
                <li>{pet.cor}</li>
                <li>{pet.raca}</li>
                <li>{pet.dataani}</li>
                <li>{pet.aniadotado}</li>
                <li>{pet.temperamento}</li>
                <li>{pet.castrado}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
