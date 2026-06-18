import { Link } from "react-router-dom";
import ancelottiTaça from "../assets/ancelotti.jpg";
import "./Campeao.css";
import botaoVoltar from "../assets/botao-de-voltar.png";
import wakaWakaAudio from "../assets/waka-waka.mp3";
import { useEffect, useRef, useState } from "react";

function Campeao() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.1);

  useEffect(() => {
    const audio = new Audio(wakaWakaAudio);
    audio.volume = 1;
    audioRef.current = audio;
    audio.play().catch((erro) => console.log("Áudio bloqueado:", erro));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  function handleVolume(e) {
    const novoVolume = Number(e.target.value);
    setVolume(novoVolume);
    if (audioRef.current) {
      audioRef.current.volume = novoVolume;
    }
  }

  return (
    <div className="container-campeao">
      <h1>O Hexa já é nosso</h1>
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <img
        src={ancelottiTaça}
        alt="Ancelotti com a taça"
        width={400}
        className="imagem-campeao"
      />
      <div className="volume-container">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="volume-slider"
        />
        <span className="volume-icone">🔊</span>
      </div>
    </div>

    <h2 className="titulo-campeao">Todos os craques foram convocados com sucesso.</h2>

      <Link to="/Samuel-React/" className="botao-voltar">
        <img src={botaoVoltar} alt="Voltar para a página inicial" width={200} height={100} />
      </Link>
    </div>
  );
}

export default Campeao;