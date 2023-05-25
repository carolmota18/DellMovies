import React from "react";
import styled from "styled-components";
import Logo from "../Imagens/logodellmovies.png";
import Pesquisa from "../Imagens/pesquisa.png";

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;
const Lista = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-envely;
  font-family: "Open Sans", sans-serif;
  color: #f2f2f2;
  gap: 20px;
`;

const CaixaDaLista = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <Conteiner>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <Lista>
          <li>Séries</li>
          <li>Filmes</li>
        </Lista>
      </div>
      <CaixaDaLista>
        <img src={Pesquisa} alt="pesquisa" />
        <Lista>
          <li>Filtro</li>
          <li>Login</li>
        </Lista>
      </CaixaDaLista>
    </Conteiner>
  );
}
