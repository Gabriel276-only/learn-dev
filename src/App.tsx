import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Educacao from "./servicos/educacao";
import Consultoria from "./servicos/consultoria";
import Criacao from "./servicos/criacao";
import NavBar from "./components/NavBar";


import "./App.css";
import ProgramacaoWeb from "./servicos/portfolio/programacao-web";
import Robotica from "./servicos/portfolio/robotica";
import ApliMoveis from "./servicos/portfolio/apliMoveis";
import Games from "./servicos/portfolio/jogosDigitais";
import BdAdm from "./servicos/portfolio/adm-bd";
import Cyberseguranca from "./servicos/portfolio/cyberseguranca";


function App() {
  return ( 
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servicos/educacao" element={<Educacao />} />
        <Route path="/servicos/consultoria" element={<Consultoria />} />
        <Route path="/servicos/criacao" element={<Criacao />} />
        <Route path="/servicos/portfolio/programacao-web" element={<ProgramacaoWeb />} />
        <Route path="/servicos/portfolio/robotica" element={<Robotica />} />
        <Route path="/servicos/portfolio/jogosDigitais" element={<Games/>} />
        <Route path="/servicos/portfolio/apliMoveis" element={<ApliMoveis/>} />
        <Route path="/servicos/portfolio/adm-bd" element={<BdAdm/>} />
        <Route path="/servicos/portfolio/cyberseguranca" element={<Cyberseguranca/>} />
        </Routes>
    </Router>
  );
}

export default App;
