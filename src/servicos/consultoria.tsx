import { Link } from "react-router-dom";
import { FaLaptopCode, FaNetworkWired, FaChalkboardTeacher } from "react-icons/fa";
import { useEffect } from "react";

const Consultoria = () => {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 flex flex-col items-center">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-10 mt-10">
            Transformamos Negócios com Tecnologia
          </h1>
          <div className="text-3xl mb-6">🚀</div>
          <p className="text-xl text-gray-300 max-w-4xl">
            Nossos serviços de consultoria ajudam empresas a modernizar seus processos, 
            integrar novas tecnologias e capacitar suas equipes.
          </p>
        </header>

        {/* Conteúdo Principal */}
        <main className="w-full">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-300 mb-6 border-b border-gray-700 pb-2">
              Nossos Serviços
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card de Serviço 1 */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                <div className="text-blue-400 text-3xl mb-4">
                  <FaLaptopCode />
                </div>
                <h3 className="text-xl font-bold mb-3">Plataformas Personalizadas</h3>
                <p className="text-gray-300">
                  Soluções sob medida para suas necessidades específicas.
                </p>
              </div>
              
              {/* Card de Serviço 2 */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                <div className="text-blue-400 text-3xl mb-4">
                  <FaNetworkWired />
                </div>
                <h3 className="text-xl font-bold mb-3">Sistemas em Rede</h3>
                <p className="text-gray-300">
                  Infraestrutura robusta e integrada para seu negócio.
                </p>
              </div>
              
              {/* Card de Serviço 3 */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                <div className="text-blue-400 text-3xl mb-4">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="text-xl font-bold mb-3">Capacitação</h3>
                <p className="text-gray-300">
                  Treinamentos especializados para sua equipe.
                </p>
              </div>
            </div>
          </section>

          {/* Seção Adicional */}
          <section className="bg-gray-800 p-8 rounded-xl border-2 border-gray-700 mb-10 hover:bg-blue-800/10 hover:border-blue-400">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Como Trabalhamos</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Diagnóstico completo da situação atual</li>
              <li>Plano de ação personalizado</li>
              <li>Implementação com acompanhamento</li>
              <li>Treinamento e suporte contínuo</li>
            </ol>
          </section>
        </main>

        {/* Rodapé */}
        <footer className="mt-8">
        <div className="text-center">
        <Link
            to="/contato"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg text-white font-bold transition-all"
          >
            Fale com nossos especialistas
          </Link>
        </div>
                <div className="text-center mt-8">
        <Link
                        to="/"
                        className="inline-flex items-center px-6 py-2 border border-gray-600 hover:border-white rounded-lg transition-all"
                    >
                        ← Voltar para Home
                    </Link>
                </div>
        </footer>
      </div>
    </div>
  );
};

export default Consultoria;