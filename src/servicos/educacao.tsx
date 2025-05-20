import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaGamepad, FaVrCardboard, FaUserGraduate, FaLaptopCode, FaRobot } from "react-icons/fa";
import { useEffect } from "react";

const Educacao = () => {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        {/* Cabeçalho Impactante */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-10 mt-10 ">
            Inovação na Educação 
          </h1>
          <div className="text-4xl mb-6">✏️</div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformando escolas para o futuro com tecnologia e metodologias ativas de aprendizagem.
          </p>
        </header>

        {/* Seção de Serviços */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-8 border-b border-gray-700 pb-2">
            Nossas Soluções Educacionais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaChalkboardTeacher className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Plataformas Educacionais</h3>
              </div>
              <p className="text-gray-300">
                Ambientes virtuais de aprendizagem personalizados com ferramentas interativas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaGamepad className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Jogos Educativos</h3>
              </div>
              <p className="text-gray-300">
                Gamificação do aprendizado com mecânicas pedagógicas comprovadas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaVrCardboard className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Realidade Virtual</h3>
              </div>
              <p className="text-gray-300">
                Experiências imersivas para explorar conceitos complexos de forma prática.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaUserGraduate className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Formação Docente</h3>
              </div>
              <p className="text-gray-300">
                Capacitação em tecnologias educacionais e metodologias ativas.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Programação Escolar</h3>
              </div>
              <p className="text-gray-300">
                Ensino de pensamento computacional para todas as idades.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
              <div className="flex items-center mb-4">
                <FaRobot className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-xl font-bold">Robótica Educacional</h3>
              </div>
              <p className="text-gray-300">
                Kits pedagógicos para ensino STEM/STEAM em sala de aula.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-20 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">Resultados Comprovados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📈", title: "+45%", desc: "Engajamento dos alunos" },
              { icon: "🏆", title: "2x mais", desc: "Retenção de conteúdo" },
              { icon: "👩‍🏫", title: "87%", desc: "Professores satisfeitos" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-3xl font-bold mb-2">{item.title}</p>
                <p className="text-gray-400">{item.desc}</p>
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
            Transforme sua escola
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

export default Educacao;