import { Link } from "react-router-dom";

const ApliMoveis = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6 ">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho Impactante */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent mt-10 py-10">
                        Aplicativos Móveis Sob Medida
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transformamos suas ideias em aplicativos performáticos para iOS e Android
                    </p>
                </header>

                {/* Abordagens de Desenvolvimento */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-8 border-b border-gray-700 pb-2">
                        Nossas Especialidades
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Apps Nativos",
                                icon: "📱",
                                desc: "Máximo desempenho e acesso total aos recursos do dispositivo",
                                tech: ["Swift (iOS)", "Kotlin (Android)", "Jetpack Compose"],
                                color: "from-indigo-900/30 to-indigo-800/30"
                            },
                            {
                                title: "Apps Híbridos",
                                icon: "🔀",
                                desc: "Código único para múltiplas plataformas com custo reduzido",
                                tech: ["Flutter", "React Native", "Ionic"],
                                color: "from-purple-900/30 to-purple-800/30"
                            },
                            {
                                title: "PWAs",
                                icon: "🌐",
                                desc: "Aplicativos web progressivos com experiência app-like",
                                tech: ["React", "Vue.js", "Service Workers"],
                                color: "from-violet-900/30 to-violet-800/30"
                            }
                        ].map((approach, index) => (
                            <div key={index} className={`bg-gradient-to-br ${approach.color} p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all`}>
                                <div className="text-4xl mb-4">{approach.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                                <p className="text-gray-300 mb-4">{approach.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {approach.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fluxo de Desenvolvimento */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-8 border-b border-gray-700 pb-2">
                        Nosso Processo
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { icon: "🧠", title: "Idealização", desc: "Workshops de UX" },
                            { icon: "✏️", title: "Design", desc: "Prototipação interativa" },
                            { icon: "💻", title: "Desenvolvimento", desc: "Sprints ágeis" },
                            { icon: "🚀", title: "Lançamento", desc: "Deploy nas lojas" }
                        ].map((step, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                                <div className="text-3xl mb-2">{step.icon}</div>
                                <h3 className="font-bold mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cases de Sucesso */}
               

                {/* Comparativo Técnico */}
                <section className="mb-20 bg-gray-800 p-8 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-8">Tecnologias que Dominamos</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="pb-4 text-left">Tecnologia</th>
                                    <th className="pb-4 text-left">Vantagens</th>
                                    <th className="pb-4 text-left">Casos Ideais</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        tech: "Flutter",
                                        pros: "Hot Reload, UI consistente",
                                        useCase: "MVP rápidos, apps multiplataforma"
                                    },
                                    {
                                        tech: "SwiftUI",
                                        pros: "Performance nativa, integração iOS",
                                        useCase: "Apps iOS premium"
                                    },
                                    {
                                        tech: "React Native",
                                        pros: "Ecossistema JavaScript",
                                        useCase: "Apps com web counterpart"
                                    }
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-gray-700 last:border-0">
                                        <td className="py-4 font-medium">{row.tech}</td>
                                        <td className="py-4 text-gray-300">{row.pros}</td>
                                        <td className="py-4 text-gray-300">{row.useCase}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-12 rounded-xl border border-indigo-800/30 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Pronto para levar seu app para as lojas?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Agende uma consultoria gratuita e receba um roadmap personalizado
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/contato" 
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-indigo-900 font-bold rounded-lg transition-all"
                        >
                            Fale com Especialista
                        </Link>
                        <Link 
                            to="/portfolio/apps" 
                            className="px-8 py-3 border border-white text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                            Ver Mais Projetos
                        </Link>
                    </div>
                </section>
                <div className="mb-12">
    <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
    <div className="space-y-3">
        {[
            {
                q: "Quanto tempo leva para desenvolver um app?",
                a: "De 3 meses (MVP simples) a 12+ meses (apps complexos)"
            },
            {
                q: "Como publicar nas app stores?",
                a: "Cuidamos de todo processo de submissão"
            }
        ].map((item, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold">{item.q}</h4>
                <p className="text-gray-300 mt-1">{item.a}</p>
            </div>
        ))}
    </div>
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

export default ApliMoveis;