import { Link } from "react-router-dom";

const Games = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent py-10 mt-10">
                        Aprenda Programação Jogando
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transforme linhas de código em aventuras, jogos e uma jornada épica de aprendizado.
                    </p>
                </header>

                {/* Níveis de Aprendizado */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 border-b border-gray-700 pb-2">
                        Jornada do Herói Dev
                    </h2>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                level: "Iniciante",
                                title: "O Aprendiz",
                                desc: "Domine os fundamentos resolvendo quebra-cabeças",
                                icon: "🧙‍♂️",
                                concepts: ["Variáveis", "Loops", "Condicionais"],
                                color: "from-green-900/30 to-green-800/30"
                            },
                            {
                                level: "Intermediário",
                                title: "O Artesão do Código",
                                desc: "Construa sistemas completos em missões épicas",
                                icon: "⚔️",
                                concepts: ["Funções", "OOP", "APIs"],
                                color: "from-cyan-900/30 to-cyan-800/30"
                            },
                            {
                                level: "Avançado",
                                title: "O Arquimago Dev",
                                desc: "Desafios de algoritmos em batalhas multiplayer",
                                icon: "🧪",
                                concepts: ["Estruturas de dados", "Otimização", "Design Patterns"],
                                color: "from-purple-900/30 to-purple-800/30"
                            }
                        ].map((stage, index) => (
                            <div key={index} className={`bg-gradient-to-br ${stage.color} p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all`}>
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{stage.icon}</span>
                                    <div>
                                        <span className="block text-sm text-green-300">{stage.level}</span>
                                        <h3 className="text-xl font-bold">{stage.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4">{stage.desc}</p>
                                <ul className="space-y-2">
                                    {stage.concepts.map((concept, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-green-400 mr-2">▸</span>
                                            <span className="text-gray-300">{concept}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Plataforma Interativa */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 border-b border-gray-700 pb-2">
                        Plataforma de Aprendizado
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-blue-200">Já imaginou dar seus primeiros passos como desenvolvedor jogando?</h3>
                            <p className="text-gray-300 mb-4">
                                Resolva desafios em um ambiente gamificado com feedback instantâneo.
                            </p>
                            <ul className="space-y-2">
                                {["Jogos 2D e 3D", "Desafios de programação", "Diversão e aprendizado"].map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-400 mr-2">▸</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-blue-200">Comunidade Ativa</h3>
                            <p className="text-gray-300 mb-4">
                                Participe de fóruns, grupos de estudo e eventos online.
                            </p>
                            <ul className="space-y-2">
                                {["Mentoria personalizada", "Eventos ao vivo", "Hackathons"].map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-400 mr-2">▸</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </section>
                {/* Tecnologias Ensinadas */}
           
              

                {/* CTA Final */}
                <section className="text-center bg-gradient-to-br from-green-900/40 to-cyan-900/40 p-12 rounded-xl border border-green-800/30 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Sua Jornada Começa Aqui!</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Primeiro capítulo grátis - sem cartão de crédito necessário
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/cadastro" 
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-green-900 font-bold rounded-lg transition-all"
                        >
                            Começar Agora
                        </Link>
                        <Link 
                            to="/demo" 
                            className="px-8 py-3 border border-white text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                            Ver Demonstração
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

export default Games;