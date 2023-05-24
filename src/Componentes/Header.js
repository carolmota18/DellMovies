import React from "react";
import styled from "styled-components";
import Logo from "../Imagens/logodellmovies.png";
import Pesquisa from "../Imagens/pesquisa.png";

const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;

export default function Header() {
  return (
    <Conteiner>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>Séries</li>
          <li>Filmes</li>
        </ul>
      </div>
      <div>
        <img src={Pesquisa} alt="pesquisa" />
        <ul>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </div>
    </Conteiner>
  );
}
