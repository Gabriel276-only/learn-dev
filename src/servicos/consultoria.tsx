import { Link } from "react-router-dom";
import { FaLaptopCode, FaNetworkWired, FaChalkboardTeacher } from "react-icons/fa";

const Consultoria = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
        Transformamos Negócios com Tecnologia 🚀
      </h1>
      
      <p className="text-lg max-w-2xl  text-gray-300">
        Nossos serviços de consultoria ajudam empresas a modernizar seus processos, 
        integrar novas tecnologias e capacitar suas equipes para um futuro mais eficiente.  
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Nossos Serviços</h2>
        <ul className="text-lg text-gray-300 space-y-4">
          <li className="flex items-center gap-3">
            <FaLaptopCode className="text-blue-400" /> Desenvolvimento de plataformas personalizadas
          </li>
          <li className="flex items-center gap-3">
            <FaNetworkWired className="text-blue-400" /> Implementação de sistemas em rede
          </li>
          <li className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-blue-400" /> Treinamento de equipes e setores
          </li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold rounded-lg"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default Consultoria;
