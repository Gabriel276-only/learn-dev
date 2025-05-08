import { Link } from "react-router-dom";

const Robotica = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho Impactante */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-violet-500 bg-clip-text text-transparent mb-6">
                        Robótica Educacional
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Formando os inovadores do futuro através da aprendizagem prática e multidisciplinar
                    </p>
                </header>

                {/* Benefícios */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
                        Além do Ensino: Desenvolvimento Integral
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "🧠",
                                title: "Pensamento Computacional",
                                desc: "Estruturação lógica de problemas"
                            },
                            {
                                icon: "👐",
                                title: "Trabalho em Equipe",
                                desc: "Colaboração em projetos desafiadores"
                            },
                            {
                                icon: "💡",
                                title: "Criatividade",
                                desc: "Solução inovadora de problemas reais"
                            },
                            {
                                icon: "📊",
                                title: "Gestão de Projetos",
                                desc: "Planejamento e execução de ideias"
                            }
                        ].map((skill, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all text-center">
                                <div className="text-4xl mb-4">{skill.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                                <p className="text-gray-300">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Programas por Idade */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
                        Nossos Programas
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            {
                                age: "6-10 anos",
                                title: "Robótica Lúdica",
                                desc: "Introdução através de histórias e desafios tangíveis",
                                activities: [
                                    "Montagem com blocos programáveis",
                                    "Controle de robôs simples",
                                    "Noções de sensores"
                                ],
                                color: "border-l-4 border-blue-600"
                            },
                            {
                                age: "11-14 anos",
                                title: "Maker Júnior",
                                desc: "Prototipagem e soluções criativas",
                                activities: [
                                    "Arduino básico",
                                    "Impressão 3D simplificada",
                                    "Programação por blocos avançada"
                                ],
                                color: "border-l-4 border-cyan-400"
                            },
                            {
                                age: "15-18 anos",
                                title: "Robótica Avançada",
                                desc: "Preparação para competições e projetos complexos",
                                activities: [
                                    "Programação em Python/C++",
                                    "Visão computacional",
                                    "IoT e automação"
                                ],
                                color: "border-l-4 border-emerald-500"
                            }
                        ].map((program, index) => (
                            <div key={index} className={`bg-gray-800 p-6 rounded-lg ${program.color}`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-bold">{program.title}</h3>
                                    <span className="text-blue-400">{program.age}</span>
                                </div>
                                <p className="text-gray-300 mb-4">{program.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {program.activities.map((activity, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-blue-400 mr-2">▸</span>
                                            <span className="text-gray-300">{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resultados Mensuráveis */}
                <section className="mb-20 bg-gradient-to-r from-blue-900/30 to-red-900/30 p-8 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Impacto nas Escolas</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                stat: "+72%",
                                desc: "de interesse em exatas após 1 ano"
                            },
                            {
                                stat: "3x",
                                desc: "mais premiações em feiras científicas"
                            },
                            {
                                stat: "89%",
                                desc: "dos alunos desenvolvem projetos autônomos"
                            }
                        ].map((result, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl font-bold mb-2">{result.stat}</p>
                                <p className="text-gray-300">{result.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Kits e Tecnologias */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
                        Ecossistema Completo
                    </h2>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold mb-4">Nossos Kits</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "Starter Kit", level: "Iniciante" },
                                    { name: "IoT Explorer", level: "Intermediário" },
                                    { name: "AI Robotics", level: "Avançado" },
                                    { name: "Competition Kit", level: "Profissional" }
                                ].map((kit, index) => (
                                    <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                        <h4 className="font-bold">{kit.name}</h4>
                                        <p className="text-sm text-blue-400">{kit.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold mb-4">Plataforma de Apoio</h3>
                            <ul className="space-y-4">
                                {[
                                    "Videoaulas passo a passo",
                                    "Desafios semanais gamificados",
                                    "Fórum de dúvidas com especialistas",
                                    "Biblioteca de projetos compartilhados"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-2">▸</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA para Escolas */}
                <section className="text-center bg-gray-800 p-12 rounded-xl border border-blue-800/50 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Leve a Robótica para Sua Escola</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Pacotes completos incluindo capacitação de professores e material didático
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/contato" 
                            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-gray-900 font-bold rounded-lg transition-all"
                        >
                            Solicitar Proposta
                        </Link>
                        <Link 
                            to="/demo" 
                            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-lg transition-all"
                        >
                            Agendar Demonstração
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

export default Robotica;