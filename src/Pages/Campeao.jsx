import { Link } from "react-router-dom";
import ancelottiTaça from "../assets/ancelotti.jpg"; 
import "./Campeao.css"; 
import botaoVoltar from "../assets/botao-de-voltar.png"

function Campeao() {
  return (
    <div className="container-campeao">
      <h1>O Hexa já é nosso</h1>
      
      <img 
        src={ancelottiTaça} 
        alt="Ancelotti com a taça" 
        width={400} 
        className="imagem-campeao"
      />
      
      <h2 className="titulo-campeao">Todos os craques foram convocados com sucesso.</h2>
      
      <Link to="/Samuel-React/" className="botao-voltar">
        <img src={botaoVoltar} alt="botaoVolta" width={100} height={100} />
      </Link>
    </div>
  );
}

export default Campeao;