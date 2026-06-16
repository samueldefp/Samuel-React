import './JogadorCard.css'
import { Link } from 'react-router-dom';

function JogadorCard({ nome, img, estagio, convocadoCopa, id }) {
  return (
    <div className="CardJogador">
      <Link to={`/Samuel-React/${id}`}>
        <img src={img} alt= {`ir para a pagina do ${nome}`} width={200} height={200} />
      </Link>
      <p className='name'>{nome}</p>
      <p className='convocado'>Convocado? {estagio === 1 ? "Não" : "Sim"}</p>
      <button onClick={() => convocadoCopa(nome)}>{estagio === 1 ? `CONVOCAR ${nome}` : "CONVOCADO"}</button>
    </div>
  );
}

export default JogadorCard;
