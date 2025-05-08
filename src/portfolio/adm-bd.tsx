import { Link } from "react-router-dom";

const BdAdm = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Cabeçalho com título e introdução */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent mb-6">
                        Administração de Banco de Dados
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Soluções especializadas para gestão, otimização e segurança de seus dados corporativos.
                    </p>
                </header>

                {/* Seção de Serviços */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
                        Nossos Serviços
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card de Serviço 1 */}
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                            <h3 className="text-xl font-bold text-cyan-300 mb-3">Gestão Completa</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Monitoramento 24/7
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Configuração e tuning
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Atualizações e patches
                                </li>
                            </ul>
                        </div>

                        {/* Card de Serviço 2 */}
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                            <h3 className="text-xl font-bold text-cyan-300 mb-3">Otimização</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Ajuste de queries
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Indexação estratégica
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Particionamento de dados
                                </li>
                            </ul>
                        </div>

                        {/* Card de Serviço 3 */}
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all">
                            <h3 className="text-xl font-bold text-cyan-300 mb-3">Segurança</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Políticas de acesso
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Criptografia de dados
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">✓</span>
                                    Prevenção de SQL injection
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Seção de Tecnologias */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
                        Tecnologias que Dominamos
                    </h2>
                    
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="">MySQL</div>
                        <div className="">PostgreSQL</div>
                        <div className="">MongoDB</div>
                        <div className="">Oracle</div>
                        <div className="">SQL Server</div>
                        <div className="">Redis</div>
                    </div>
                </section>

                {/* Seção de Casos de Sucesso */}
               

                {/* CTA Final */}
                <section className="text-center bg-gray-800 p-8 rounded-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">Pronto para otimizar seus bancos de dados?</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Nossa equipe está pronta para ajudar sua empresa a extrair o máximo potencial dos seus dados com segurança e performance.
                    </p>
                    <Link 
                        to="/contato" 
                        className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg text-white font-semibold transition-all"
                    >
                        Fale com nossos especialistas
                    </Link>
                </section>

                {/* Botão de Voltar */}
                <div className="mt-12 text-center">
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

export default BdAdm;

// Adicione no seu arquivo CSS global:
// . {
//   @apply px-4 py-2 bg-gray-700 rounded-full text-sm font-medium;
//   @apply hover:bg-gray-600 transition-all;
// }