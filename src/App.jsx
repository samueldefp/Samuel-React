import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Jogador from "./Pages/Jogador";
import Campeao from "./Pages/Campeao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Samuel-React/" element={<Home />} />
        <Route path="/Samuel-React/campeao" element={<Campeao/>} /> 
        <Route path="/Samuel-React/:jogadorId" element={<Jogador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
