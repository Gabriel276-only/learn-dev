import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaGamepad, FaVrCardboard, FaUserGraduate, FaMobile, FaLaptopCode } from "react-icons/fa";
import { useEffect } from "react";

const Criacao = () => {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        {/* Cabeçalho Impactante */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  py-10 mt-10">
            Soluções Digitais Sob Medida
          </h1>
          <div className="text-4xl mb-6">📱</div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvemos aplicativos e sites personalizados que combinam inovação e tecnologia para resultados excepcionais.
          </p>
        </header>

        {/* Seção de Serviços */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8 border-b border-gray-700 pb-2">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaChalkboardTeacher className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Plataformas Educacionais</h3>
              </div>
              <p className="text-gray-300">
                Sistemas completos para instituições de ensino com ferramentas interativas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaGamepad className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Aplicativos Mobile</h3>
              </div>
              <p className="text-gray-300">
                Desenvolvimento nativo e híbrido para iOS e Android com UX aprimorado.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaVrCardboard className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Experiências Imersivas</h3>
              </div>
              <p className="text-gray-300">
                Soluções em realidade virtual e aumentada para engajamento máximo.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaUserGraduate className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Capacitação Profissional</h3>
              </div>
              <p className="text-gray-300">
                Treinamentos técnicos e workshops para equipes de desenvolvimento.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaMobile className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Sites Responsivos</h3>
              </div>
              <p className="text-gray-300">
                Desenvolvimento web que se adapta perfeitamente a qualquer dispositivo.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Sistemas Personalizados</h3>
              </div>
              <p className="text-gray-300">
                Soluções de software sob medida para necessidades empresariais específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Processo de Trabalho */}
        <section className="mb-20 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">Nosso Processo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🧠", title: "Consultoria", desc: "Entendemos suas necessidades" },
              { icon: "✏️", title: "Projeto", desc: "Criamos a solução ideal" },
              { icon: "💻", title: "Desenvolvimento", desc: "Implementamos com qualidade" },
              { icon: "🚀", title: "Entrega", desc: "Lançamos e damos suporte" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/contato"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg text-white font-bold transition-all"
          >
            Fale com nossos especialistas
          </Link>
          <p className="mt-4">
          <Link
                        to="/"
                        className="inline-flex items-center px-6 py-2 border border-gray-600 hover:border-white rounded-lg transition-all"
                    >
                        ← Voltar para Home
                    </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Criacao;