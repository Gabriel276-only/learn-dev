import { Link } from "react-router-dom";


const Cyberseguranca = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-6">
<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent mb-8">
        CyberSegurança
    </h1>
<p className="text-lg max-w-2xl  text-gray-300">
       
       Cyberseguranca é o conjunto de práticas, tecnologias e processos projetados para proteger sistemas, redes e dados contra ataques, danos ou acesso não autorizado. Isso inclui a proteção de informações sensíveis, a prevenção de vazamentos de dados e a mitigação de riscos associados a ameaças cibernéticas. A segurança cibernética é essencial para garantir a integridade, confidencialidade e disponibilidade das informações em um mundo cada vez mais digital.

          </p>
          
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
  
  export default Cyberseguranca;
  