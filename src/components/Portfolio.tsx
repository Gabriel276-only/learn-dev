import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

// Dados dos projetos
const projetos = [
  { nome: "Programação Web", link: "/portfolio/programacao-web", descricao: "Desenvolvimento de sites e aplicações web responsivas com as últimas tecnologias do mercado." },
  { nome: "Robótica Educacional", link: "/portfolio/robotica", descricao: "Soluções de robótica para educação, promovendo aprendizado prático e interativo." },
  { nome: "Jogos Digitais", link: "/portfolio/jogosDigitais", descricao: "Criação de jogos 2D e 3D para diversas plataformas, desde mobile até consoles." },
  { nome: "Aplicações para Dispositivos Móveis", link: "/portfolio/apliMoveis", descricao: "Desenvolvimento de apps nativos e híbridos para iOS e Android." },
  { nome: "Administração de Banco de Dados", link: "/portfolio/adm-bd", descricao: "Gestão, otimização e segurança de bancos de dados relacionais e NoSQL." },
  { nome: "Cybersegurança", link: "/portfolio/cyberseguranca", descricao: "Soluções completas de segurança digital para proteger seus dados e sistemas." },
];

const ProjetoCard = ({ projeto, index, expanded, onExpand }: { projeto: any, index: number, expanded: number | null, onExpand: (index: number | null) => void }) => {
  const isExpanded = expanded === index;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600 hover:border-blue-400 transition-all cursor-pointer hover:aspect-ratio-1 "
      onClick={() => onExpand(isExpanded ? null : index)}
    >
      <motion.div layout="position" className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-blue-500">{projeto.nome}</h3>
        {isExpanded ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
      </motion.div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-4 text-gray-300"
          >
            <p>{projeto.descricao}</p>
            <div className="mt-4">
              <Link 
                to={projeto.link}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-all"
              >
                Ver Detalhes
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Portfolio = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const projetosMemo = useMemo(() => projetos, []);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-10 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-cyan-400">
          Nosso Portfólio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosMemo.map((projeto, index) => (
            <ProjetoCard
              key={index}
              projeto={projeto}
              index={index}
              expanded={expanded}
              onExpand={setExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;