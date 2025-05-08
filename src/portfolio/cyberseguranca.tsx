import { Link } from "react-router-dom";

const Cyberseguranca = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho Impactante */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent mb-6">
                        CyberSegurança
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Proteção avançada contra ameaças digitais em tempo real para sua empresa
                    </p>
                </header>

                {/* Seção de Serviços */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 border-b border-gray-700 pb-2 ">
                        Nossas Soluções
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Proteção Corporativa",
                                icon: "🛡️",
                                items: [
                                    "Firewalls de última geração",
                                    "SIEM (Security Information and Event Management)",
                                    "Prevenção contra vazamento de dados (DLP)"
                                ]
                            },
                            {
                                title: "Testes de Invasão",
                                icon: "🔐",
                                items: [
                                    "Pentest ético completo",
                                    "Análise de vulnerabilidades",
                                    "Relatórios detalhados com recomendações"
                                ]
                            },
                            {
                                title: "Treinamento & Conscientização",
                                icon: "🎓",
                                items: [
                                    "Simulações de phishing",
                                    "Workshops de segurança",
                                    "Certificação de equipes"
                                ]
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-green-800/20 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-emerald-400 mr-2">▸</span>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Estatísticas Impactantes */}
                <section className="mb-20 bg-gradient-to-r from-green-500/50 to-green-500/20 p-8 rounded-xl border border-green-800/30">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: "97%", label: "greenução em incidentes de segurança após nossa consultoria" },
                            { value: "24/7", label: "Monitoramento contínuo por nossa equipe SOC" },
                            { value: "500+", label: "Vulnerabilidades identificadas e corrigidas em 2023" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fluxo de Trabalho */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 border-b border-gray-700 pb-2">
                        Nossa Metodologia
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute left-4 h-full w-0.5 bg-gray-700 md:left-1/2 md:-ml-0.5"></div>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Análise de Risco",
                                    desc: "Avaliação completa da infraestrutura atual",
                                    icon: "🔍"
                                },
                                {
                                    title: "Proteção Personalizada", 
                                    desc: "Implementação de soluções específicas",
                                    icon: "🛠️"
                                },
                                {
                                    title: "Monitoramento Constante",
                                    desc: "Detecção proativa de ameaças",
                                    icon: "📡"
                                },
                                {
                                    title: "Resposta a Incidentes",
                                    desc: "Ações imediatas para mitigar ataques",
                                    icon: "🚨"
                                },
                                {
                                    title: "Melhoria Contínua",
                                    desc: "Atualização periódica das defesas",
                                    icon: "🔄"
                                }
                            ].map((step, index) => (
                                <div 
                                    key={index} 
                                    className={`relative pl-10 md:w-1/2 md:pl-12 ${
                                        index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                    }`}
                                >
                                    <div className="absolute left-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
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

                {/* Casos de Sucesso */}
              
                {/* CTA Urgente */}
                <section className="text-center bg-gradient-to-r from-emerald-900/50 to-green-900 p-12 rounded-xl border border-green-800/30 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Sua Empresa Está Protegida?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Faça um scan gratuito de vulnerabilidades e receba um relatório detalhado em 24h.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/contato" 
                            className="px-8 py-3 bg-white hover:bg-green-200 text-green-900 font-bold rounded-lg transition-all"
                        >
                            Avaliação Gratuita
                        </Link>
                        <Link 
                            to="/blog/guia-seguranca" 
                            className="px-8 py-3 border border-white text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                            Guia de Melhores Práticas
                        </Link>
                    </div>
                </section>

                <div className="bg-gray-800 p-6 rounded-lg border-b-1 border-l-4 mb-10 border-red-800">
  <h2 className="text-lg font-bold mb-4 font-mono border-b-1 w-fit">Será que estou realmente seguro?</h2>
  <h4 className="font-bold mb-3">Verifique sua Empresa:</h4>
 
  {["Backups criptografados e testados", 
    "Autenticação multifator em todos os sistemas",
    "Atualizações de segurança aplicadas"]
    .map((item, i) => (
      <div key={i} className="flex items-center mb-2">
        <input type="checkbox" className="mr-3" />
        <span>{item}</span>
      </div>
      
  ))}
  <p className="mt-6 text-gray-200 "> Se não estiver, talvez seja hora de mudar.Vamos conversar sobre isso?</p> <a className=" text-green-500 font-bold rounded-lg transition-all underline" href="/contato">Marcar Avaliação</a>
</div>

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

export default Cyberseguranca;