import { Link } from "react-router-dom";

const ProgramacaoWeb = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho */}
                <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent mb-6">
                      Programação Web
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Desenvolvimento de soluções digitais sob medida com as tecnologias mais modernas do mercado.
                    </p>
                </header>

                {/* Destaques */}
                <section className="mb-20 grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                        <div className="text-purple-400 text-3xl mb-4">🛠️</div>
                        <h3 className="text-xl font-bold mb-3">Front-end Moderno</h3>
                        <p className="text-gray-300">
                            Interfaces responsivas com React, Vue.js e Tailwind CSS, garantindo perfeita experiência em todos os dispositivos.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                        <div className="text-blue-400 text-3xl mb-4">⚙️</div>
                        <h3 className="text-xl font-bold mb-3">Back-end Robusto</h3>
                        <p className="text-gray-300">
                            Sistemas escaláveis com Node.js, Python (Django/Flask) e Java Spring Boot, arquitetura em microsserviços quando necessário.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                        <div className="text-green-400 text-3xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-3">Full Stack</h3>
                        <p className="text-gray-300">
                            Soluções completas desde o protótipo até deploy em cloud (AWS, Azure, GCP) com CI/CD automatizado.
                        </p>
                    </div>
                </section>

                {/* Casos de Uso */}
              
                {/* Fluxo de Trabalho */}
                  <section className="mb-20">
                      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-8 border-b border-gray-700 pb-2">
                          Nosso Processo
                      </h2>
                      <div className="relative">
                    <div className="absolute left-4 h-full w-0.5 bg-gray-700 md:left-1/2 md:-ml-0.5"></div>
                    
                    <div className="space-y-8">
                      {[
                        {
                          title: "Consultoria Inicial",
                          desc: "Análise de requisitos e definição de escopo",
                          icon: "📝"
                        },
                        {
                          title: "Protótipo Interativo", 
                          desc: "Validação de UX/UI antes do desenvolvimento",
                          icon: "🎨"
                        },
                        {
                          title: "Desenvolvimento Ágil",
                          desc: "Sprints quinzenais com demonstrações regulares",
                          icon: "💻"
                        },
                        {
                          title: "Testes Rigorosos",
                          desc: "QA automatizado e testes de usabilidade",
                          icon: "🔍"
                        },
                        {
                          title: "Deploy e Treinamento",
                          desc: "Implementação e capacitação da equipe",
                          icon: "🚀"
                        }
                      ].map((step, index) => (
                        <div 
                          key={index} 
                          className={`relative pl-10 md:w-1/2 md:pl-12 ${
                            index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                          }`}
                        >
                          <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                            {step.icon}
                          </div>
                          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* CTA Final */}
                <section className="text-center bg-gradient-to-r from-blue-900/50 to-cyan-500/50 p-12 rounded-xl border border-cyan-800/30 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Pronto para transformar sua ideia em realidade?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Solicite um orçamento sem compromisso e receba uma proposta personalizada em 24h.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/contato" 
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-lg transition-all"
                        >
                            Falar com Especialista
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="px-8 py-3 border border-white text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                            Ver Portfólio Completo
                        </Link>
                    </div>
                </section>

                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-2 border border-gray-600 hover:border-white rounded-lg transition-all"
                    >
                        ← Voltar para Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProgramacaoWeb;