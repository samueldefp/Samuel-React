import { useState, useEffect } from "react";
import "./index.css"
import JogadorCard from "./Components/JogadorCards/JogadorCard";
import jogadores from "./Data/jogadores";


function App() {
  const [listaConvocados, setListaConvocados] = useState([
    { nome: "NeymarSantos", estagio: 1, img: jogadores["NeymarSantos"].imagem },
    { nome: "EndrickLyon", estagio: 1, img: jogadores["EndrickLyon"].imagem },
    { nome: "DaniloFogao", estagio: 1, img: jogadores["DaniloFogao"].imagem },
    { nome: "LuizZenit", estagio: 1, img: jogadores["LuizZenit"].imagem },
    { nome: "ViniReal", estagio: 1, img: jogadores["ViniReal"].imagem },
  ]);

  const [quantidadeCards, setQuantidadeCards] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuantidadeCards(listaConvocados.length);
  }, [listaConvocados]);

  const quantidadeConvocados = listaConvocados.filter((jogador) => jogador.estagio > 1).length;

  function convocadoCopa(nomeJogador) {
    const novaLista = listaConvocados.map((jogador) => {
      if (jogador.nome === nomeJogador) {
        const proximaEvolucao = jogadores[jogador.nome].evolucao;

        if (!proximaEvolucao) {
          return jogador;
        }

        return {
          nome: proximaEvolucao,
          estagio: jogador.estagio + 1,
          img: jogadores[proximaEvolucao].imagem,
        };
      }
      return jogador;
    });

    setListaConvocados(novaLista);
  }

  return (
    <>
      <h1>Alguns dos convocados para a Copa</h1>

      <h2>quantidade de cards: {quantidadeCards}</h2>
      <h2>jogadores ja convocados: {quantidadeConvocados}</h2>

      <section id="center">
        {listaConvocados.map((jogador) => (
          <JogadorCard
            nome={jogador.nome}
            estagio={jogador.estagio}
            img={jogador.img}
            convocadoCopa={() => convocadoCopa(jogador.nome)}
          />
        ))}

        
      </section>
    </>
  );
}

export default App;
