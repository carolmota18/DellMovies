import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  color: blue;
  background-color: black;
  color: #f2f2f2;
`;
const Titulo = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  font-family: "Open Sans", sans-serif;
`;
const Cards = styled.section`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    height: 10vh;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
  }
`;

const ImageBox = styled.img`
  width: 10vw;
`;

export default function Filme() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    getMovies();
  });
  const getMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=27ac748f8867276bd1ddb54c68a9df84&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setFilmes(allApi);
      })
      .catch((error) => {
        alert(`deu um problema na sua API ${error}`);
      });
  };
  return (
    <Conteiner>
      <Titulo>
        <h1>Últimos Lançamentos</h1>
      </Titulo>
      {filmes.map((item) => (
        <Cards>
          <ImageBox src={item.image} alt={item.title} />
          <h2> {item.title}</h2>
        </Cards>
      ))}
    </Conteiner>
  );
}
