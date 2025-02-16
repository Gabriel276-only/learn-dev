import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Empresa - Portfólio";
  }, []);

  return (
    <div className="bg-gray-900 text-white">
       <Navbar />

      <header className="h-screen flex items-center justify-center text-center bg-blue-600">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Bem-vindo à Nossa Empresa
        </motion.h1>
      </header>
      
      <section id="sobre" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Sobre Nós</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
          Somos uma empresa inovadora que entrega soluções tecnológicas de alto nível para diversos setores.
        </p>
      </section>

      <section id="servicos" className="py-20 px-10 bg-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Desenvolvimento Web", "Consultoria", "Design UX/UI"].map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-600 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-400">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section id="portfolio" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Nosso Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Projeto A", "Projeto B", "Projeto C", "Projeto D", "Projeto E", "Projeto F"].map((projeto, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-700 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-blue-300">{projeto}</h3>
            </motion.div>
          ))}
        </div>
      </section>

    
      <footer id="contato" className="py-10 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-blue-400">Entre em contato</h2>
          <p className="text-gray-400 mt-2">Estamos prontos para atender suas necessidades. Envie-nos um e-mail!</p>
          <a href="mailto:contato@empresa.com" className="block mt-4 text-blue-300 text-lg hover:text-blue-500">contato@empresa.com</a>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-facebook text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-linkedin text-2xl"></i></a>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-6">&copy; 2025 Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
