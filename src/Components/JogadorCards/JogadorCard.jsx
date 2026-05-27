import './JogadorCard.css'

function JogadorCard({ nome, img, estagio, convocadoCopa }) {
  return (
    <div className="CardJogador">
      <img src={img} alt={nome}/>
      <h2>{nome}</h2>
      <p>Convocado? {estagio === 1 ? "Não" : "Sim"}</p>
      <button onClick={() => convocadoCopa(nome)}>Convocar</button>
    </div>
  );
}

export default JogadorCard;
