import { Link } from "react-router-dom";
import ancelottiTaça from "../assets/ancelotti.jpg";
import "./Campeao.css";
import botaoVoltar from "../assets/botao-de-voltar.png";
import wakaWakaAudio from "../assets/waka-waka.mp3";
import { useEffect, useRef, useState } from "react";

function Campeao() {
  const audioRef = useRef(null);
  const barraRef = useRef(null);

  const [volume, setVolume] = useState(0.1);
  const [tocando, setTocando] = useState(true);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [duracao, setDuracao] = useState(0);

  useEffect(() => {
    const audio = new Audio(wakaWakaAudio);
    audio.volume = 0.1;
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setDuracao(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setTempoAtual(audio.currentTime);
    });

    audio.play().catch((erro) => console.log("Áudio bloqueado:", erro));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (barraRef.current && duracao) {
      const porcentagem = (tempoAtual / duracao) * 100;
      barraRef.current.style.setProperty("--progress", `${porcentagem}%`);
    }
  }, [tempoAtual, duracao]);

  function handleVolume(e) {
    const novoVolume = Number(e.target.value);
    setVolume(novoVolume);
    if (audioRef.current) audioRef.current.volume = novoVolume;
  }

  function handlePlayPause() {
    if (!audioRef.current) return;
    if (tocando) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setTocando(!tocando);
  }

  function handleProgresso(e) {
    const novoTempo = Number(e.target.value);
    setTempoAtual(novoTempo);
    if (audioRef.current) audioRef.current.currentTime = novoTempo;
  }

  function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60).toString().padStart(2, "0");
    return `${min}:${seg}`;
  }

  return (
    <div className="container-campeao">
      <h1>O Hexa já é nosso</h1>

      <div className="foto-volume">
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

      <div className="player-container">
        <div className="player-tempo">
          <span>{formatarTempo(tempoAtual)}</span>
          <span>{formatarTempo(duracao)}</span>
        </div>

        <input
          ref={barraRef}
          type="range"
          min="0"
          max={duracao || 1}
          step="0.1"
          value={tempoAtual}
          onChange={handleProgresso}
          className="player-barra"
        />

        <button onClick={handlePlayPause} className="player-botao">
          {tocando ? "⏸" : "▶"}
        </button>
      </div>

      <h2 className="titulo-campeao">Todos os craques foram convocados com sucesso.</h2>

      <Link to="/Samuel-React/" className="botao-voltar">
        <img src={botaoVoltar} alt="Voltar para a página inicial" width={200} height={100} />
      </Link>
    </div>
  );
}

export default Campeao;