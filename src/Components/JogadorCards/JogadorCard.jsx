import "./JogadorCard.css";
import { Link } from "react-router-dom";

function JogadorCard({ nome, img, estagio, convocadoCopa, id }) {
  const registrarClick = (destino) => {
    console.log("Evento de clique enviado, destino:", destino);

    window.dataLayer.push({
      event: "click",
      destino: destino,
    });
  };

  return (
    <div className="CardJogador">
      <Link to={`/Samuel-React/${id}`} onClick={() => registrarClick(nome)}>
        <img
          src={img}
          alt={`ir para a pagina do ${nome}`}
          width={200}
          height={200}
        />
      </Link>
      <p className="name">{nome}</p>
      {/* <p className='convocado'>Convocado? {estagio === 1 ? "Não" : "Sim"}</p> */}
      <button
        onClick={() => {
          // if (estagio > 1) return;
          convocadoCopa(nome);
          registrarClick(`Convocar ${nome}`);
        }}
        disable ={ estagio > 1}
      >
        {estagio === 1 ? `CONVOCAR ${nome}` : `${nome} CONVOCADO`}
      </button>
    </div>
  );
}

export default JogadorCard;
