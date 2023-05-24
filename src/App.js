import React from "react";
import Header from "./Componentes/Header.js";
import Filme from "./Componentes/Filme.js";
import { createGlobalStyle } from "styled-components";
import Main from "./Componentes/Main.js";

export const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
}
`;

export default function App() {
  return (
    <div>
      <GlobalStyled />
      <Header />
      <Main />
      <Filme />
    </div>
  );
}
