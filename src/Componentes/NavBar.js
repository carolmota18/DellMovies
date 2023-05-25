import React from "react";
import Pesquisa from "../Imagens/pesquisa.png";
import styled from "styled-components";

const Conteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  background-color: black;
  ul {
    display: flex;
    list-style: none;
    gap: 100px;
    font-family: "Open Sans", sans-serif;
  }
`;

const Caixa = styled.div`
  width: 30%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function NavBar() {
  return (
    <Conteiner>
      <nav>
        <ul>
          <li>Popular</li>
          <li>Drama</li>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Comédia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Família</li>
        </ul>
      </nav>
      <Caixa>
        <img src={Pesquisa} alt="icone de  pesquisa" />
      </Caixa>
    </Conteiner>
  );
}
