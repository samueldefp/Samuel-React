import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JogadorCard from "../Components/JogadorCards/JogadorCard";
import jogadores from "../Data/jogadores";
import "../App.css";

function Home() {

  const navigate = useNavigate();

  const jogadoresEstagioInicial = jogadores.filter(
    (jogador) => jogador.evolucao !== null,
  );

  const [listaConvocados, setListaConvocados] = useState(
    jogadoresEstagioInicial,
  );

  const quantidadeCards = listaConvocados.length;
  const quantidadeConvocados = listaConvocados.filter(
    (jogador) => jogador.estagio > 1,
  ).length;

  useEffect(() => {
    if (quantidadeCards > 0 && quantidadeConvocados === quantidadeCards) {
      setTimeout(() => {
        navigate("/Samuel-React/campeao");
      }, 100);
    }
  }, [quantidadeConvocados, quantidadeCards, navigate]);

  function convocadoCopa(nomeJogador) {
    const novaLista = listaConvocados.map((jogador) => {
      if (jogador.nome === nomeJogador) {
        if (!jogador.evolucao) {
          return jogador;
        }

        const dadosEvolucao = jogadores.find(
          (j) => j.nome === jogador.evolucao,
        );

        if (!dadosEvolucao) {
          return jogador;
        }

        return {
          id: dadosEvolucao.id,
          nome: dadosEvolucao.nome,
          evolucao: dadosEvolucao.evolucao,
          estagio: jogador.estagio + 1,
          imagem: dadosEvolucao.imagem,
        };
      }
      return jogador;
    });

    setListaConvocados(novaLista);
  }

  return (
    <>
      <main>
        <h1>Convocados para a Copa</h1>

        <h2>Quantidade de cards: {quantidadeCards}</h2>
        <h2>Jogadores já convocados: {quantidadeConvocados}</h2>

        <section id="center">
          {listaConvocados.map((jogador) => (
            <JogadorCard
              id={jogador.id}
              nome={jogador.nome}
              estagio={jogador.estagio}
              img={jogador.imagem}
              convocadoCopa={() => convocadoCopa(jogador.nome)}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
