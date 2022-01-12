import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  function logout() {
    console.log("sair");
    localStorage.clear();
    history.push("/");
  }
  return (
    <header
      className="vsf"
      style={{
        display: "flex",
        flexDirecion: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/SelectPet">
        <h3 style={{ color: "white", fontWeight: 200, fontSize: 20 }}>
          Help<span style={{ fontWeight: 700 }}>Pet </span>
        </h3>
      </Link>
      <button
        onClick={() => logout()}
        className="sair_btn"
        style={{ cursor: "pointer" }}
      >
        Sair
      </button>
    </header>
  );
}
