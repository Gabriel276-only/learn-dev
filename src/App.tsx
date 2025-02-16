import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "Empresa - Portfólio";
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <NavBar />
      
      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center text-center bg-blue-600">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Bem-vindo à Nossa Empresa
        </motion.h1>
      </header>
      
      {/* Sobre */}
      <section id="sobre" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Sobre Nós</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
          Somos uma empresa inovadora que entrega soluções tecnológicas de alto nível para diversos setores.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-10 bg-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Desenvolvimento Web", "Consultoria", "Design UX/UI"].map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-600 rounded-lg text-center shadow-lg border border-gray-500">
              <h3 className="text-xl font-semibold text-blue-400">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Nosso Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Projeto A", "Projeto B", "Projeto C", "Projeto D", "Projeto E", "Projeto F"].map((projeto, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-700 rounded-lg text-center shadow-xl border border-gray-600 hover:border-blue-400 transition-all">
              <h3 className="text-lg font-semibold text-blue-300">{projeto}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Botão Voltar ao Topo */}
      {scrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          ⬆
        </button>
      )}

      {/* Contato */}
      <footer id="contato" className="py-10 bg-gray-900 text-center">
        <p className="text-gray-400">Entre em contato: <a href="mailto:contato@empresa.com" className="text-blue-400 hover:text-blue-300">contato@empresa.com</a></p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-blue-400">GitHub</a>
        </div>
        <p className="text-gray-600 text-sm mt-6">&copy; 2025 Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
