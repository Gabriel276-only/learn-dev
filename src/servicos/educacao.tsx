import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaGamepad, FaVrCardboard, FaUserGraduate } from "react-icons/fa"; 

const Educacao = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
        Inovação na Educação: Transformando Escolas para o Futuro ✏ 
      </h1>
      
      <p className="text-lg max-w-2xl  text-gray-300">
        Criamos soluções tecnológicas inovadoras para revolucionar o ensino, tornando 
        a aprendizagem mais interativa, imersiva e acessível. Nossos projetos combinam 
        tecnologia de ponta com metodologias ativas para potencializar o aprendizado.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Nossos Serviços</h2>
        <ul className="text-lg text-gray-300 space-y-4">
          <li className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-blue-400" /> Plataformas educacionais interativas
          </li>
          <li className="flex items-center gap-3">
            <FaGamepad className="text-blue-400" /> Desenvolvimento de jogos educativos
          </li>
          <li className="flex items-center gap-3">
            <FaVrCardboard className="text-blue-400" /> Realidade aumentada e virtual na educação
          </li>
          <li className="flex items-center gap-3">
            <FaUserGraduate className="text-blue-400" /> Treinamento para professores e instituições
          </li>
        </ul>
      </div>

      <Link
        to="/"
        className="mt-10 px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold rounded-lg"
      >
        Voltar para Home
      </Link>
    </div>
  );
};

export default Educacao;
