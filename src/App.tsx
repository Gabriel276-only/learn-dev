import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import MainPage from "./components/MainPage";
import Educacao from "./servicos/educacao";
import Consultoria from "./servicos/consultoria";
import Criacao from "./servicos/criacao";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";
import ProgramacaoWeb from "./portfolio/programacao-web";
import Robotica from "./portfolio/robotica";
import ApliMoveis from "./portfolio/apliMoveis";
import Games from "./portfolio/jogosDigitais";
import BdAdm from "./portfolio/adm-bd";
import Cyberseguranca from "./portfolio/cyberseguranca";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola instantaneamente para o topo
  }, [pathname]);

  return null;
}

function App() {
  return ( 
    <Router>
       <ScrollToTop /> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servicos/educacao" element={<Educacao />} />
        <Route path="/servicos/consultoria" element={<Consultoria />} />
        <Route path="/servicos/criacao" element={<Criacao />} />
        <Route path="/portfolio/programacao-web" element={<ProgramacaoWeb />} />
        <Route path="/portfolio/robotica" element={<Robotica />} />
        <Route path="/portfolio/jogosDigitais" element={<Games/>} />
        <Route path="/portfolio/apliMoveis" element={<ApliMoveis/>} />
        <Route path="/portfolio/adm-bd" element={<BdAdm/>} />
        <Route path="/portfolio/cyberseguranca" element={<Cyberseguranca/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;