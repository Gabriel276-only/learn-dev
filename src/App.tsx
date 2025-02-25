import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Educacao from "./servicos/educacao";
import Consultoria from "./servicos/consultoria";
import Criacao from "./servicos/criacao";

import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servicos/educacao" element={<Educacao />} />
        <Route path="/servicos/consultoria" element={<Consultoria />} />
        <Route path="/servicos/criacao" element={<Criacao />} />
        </Routes>
    </Router>
  );
}

export default App;
