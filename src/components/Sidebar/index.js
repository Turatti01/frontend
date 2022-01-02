import React from "react";
import { Link } from "react-router-dom";
import { CgPill } from "react-icons/cg";
import { GiLoveInjection } from "react-icons/gi";
import { FiHome } from "react-icons/fi";

import "./styles.css";

export default function Sidebar({ pet }) {
  return (
    <nav class="sidebar">
      <Link
        to={`/pet/${pet.id || pet.petId}`}
        style={{ margin: 0, padding: 0, paddingTop: 20 }}
      >
        <center>
          <img
            src={
              "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg"
            }
            class="image"
            alt=""
          />
          <h2>{pet.nome}</h2>
        </center>
      </Link>
      <div style={{ marginTop: 60 }}>
        <Link to={`/SelectPet`}>
          <FiHome size={16} />
          <span style={{ marginLeft: 7 }}>home</span>
        </Link>
        <Link to={`/Vacina/${pet.id || pet.petId}`}>
          <GiLoveInjection size={16} />
          <span style={{ marginLeft: 7 }}>Vacinas</span>
        </Link>
        <Link to={`/Medicamentos/${pet.id}`}>
          <CgPill size={16} />
          <span style={{ marginLeft: 7 }}>Medicamentos</span>
        </Link>
      </div>
    </nav>
  );
}
