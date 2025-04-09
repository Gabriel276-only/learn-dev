import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Educacao from "./servicos/educacao";
import Consultoria from "./servicos/consultoria";
import Criacao from "./servicos/criacao";
import NavBar from "./components/NavBar";


import "./App.css";
import ProgramacaoWeb from "./servicos/portfolio/programacao-web";


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
        </Routes>
    </Router>
  );
}

export default App;
