import { useParams, Link } from "react-router-dom";
import jogadores from "../Data/jogadores";
import "./Jogador.css";
import botaoVolta from "../assets/botao-de-voltar.png";

function Jogador() {
  const { jogadorId } = useParams();
  const jogador = jogadores.find((jogador) => jogador.id === Number(jogadorId));

  if (!jogador) {
    return <h1>Jogador não encontrado</h1>;
  }

  return (
    <div className="container-jogador">
      <h1>{jogador.nome}</h1>

      <h2>{jogador.descricao}</h2>

      <img
        src={jogador.imagem}
        width={200}
        height={200}
        alt={jogador.nome}
        className="imagem-detalhe"
      />

      <Link to="/Samuel-React/" className="link-voltar-jogador">
        <img src={botaoVolta} alt="botaoVolta" width={200} height={100} />
      </Link>
    </div>
  );
}

export default Jogador;
