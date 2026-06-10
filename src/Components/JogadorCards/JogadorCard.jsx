import './JogadorCard.css'
import { Link } from 'react-router-dom';

function JogadorCard({ nome, img, estagio, convocadoCopa, id }) {
  return (
    <div className="CardJogador">
      <Link to={`/Samuel-React/${id}`}>
        <img src={img} alt={nome} width={200} height={200} />
      </Link>
      <h2>{nome}</h2>
      <p>Convocado? {estagio === 1 ? "Não" : "Sim"}</p>
      <button onClick={() => convocadoCopa(nome)}>Convocar</button>
    </div>
  );
}

export default JogadorCard;
