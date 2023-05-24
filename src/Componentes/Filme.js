import { useState, useEffect } from "react";
import axios from "axios";

export default function Filme() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    getMovies()
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
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setFilmes(allApi);
      })
      .catch((error) => {
        alert(`deu um problema na sua API ${error}`);
      });
  };
  return (
    <div>
      {filmes.map((item) => (
        <section>
          <img src={item.image} alt={item.title} />
          <h2>Name: {item.title}</h2>
        </section>
      ))}
    </div>
  );
}
