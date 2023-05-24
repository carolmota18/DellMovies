import React from "react";
import styled from "styled-components";
import Avatar from "../Imagens/AVTR-217.jpg";

const MainConteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80vh;
  background-image: url(${Avatar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
  color: white;
  font-family: "Open Sans", sans-serif;
  p {
    width: 40%;
    font-size: 1.1rem;
  }
`;

const ButtonAssitir = styled.button`
  width: 12vh;
  height: 5vh;
  border-radius: 5px;
  border: none;
  background-color: #d53a00;
  color: #f2f2f2;
  font-weight: bold;
`;

const ButtonTrailer = styled.button`
  width: 12vh;
  height: 5vh;
  border-radius: 5px;
  border: none;
  background-color: #717171;
  color: #f2f2f2;
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
`;

export default function Main() {
  return (
    <MainConteiner>
      <MainContent>
        <h2>Avatar:o Caminho da Água</h2>
        <h4>3hr 23 min | Fantasia, Família | 2023 </h4>
        <h3>9,9</h3>
        <p>
          {" "}
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.
        </p>
        <div>
          <ButtonAssitir>Assitir Agora</ButtonAssitir>
          <ButtonTrailer>Trailer</ButtonTrailer>
        </div>
      </MainContent>
    </MainConteiner>
  );
}
