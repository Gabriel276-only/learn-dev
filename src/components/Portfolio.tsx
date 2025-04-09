import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Dados dos projetos (poderia ser separado em outro arquivo)
const projetos = [
  { 
    nome: "Programação Web", 
    link: "../servicos/portfolio/programacao-web",
    descricao: "Desenvolvimento de sites e aplicações web responsivas com as últimas tecnologias do mercado."
  },
  { 
    nome: "Robótica Educacional", 
    link: "../servicos/portfolio/robotica",
    descricao: "Soluções de robótica para educação, promovendo aprendizado prático e interativo."
  },
  { 
    nome: "Jogos Digitais", 
    link: "../servicos/portfolio/jogosDigitais",
    descricao: "Criação de jogos 2D e 3D para diversas plataformas, desde mobile até consoles."
  },
  { 
    nome: "Aplicações para Dispositivos Móveis", 
    link: "../servicos/portfolio/apliMoveis",
    descricao: "Desenvolvimento de apps nativos e híbridos para iOS e Android."
  },
  { 
    nome: "Administração de Banco de Dados", 
    link: "../servicos/portfolio/adm-bd",
    descricao: "Gestão, otimização e segurança de bancos de dados relacionais e NoSQL."
  },
  { 
    nome: "Cybersegurança", 
    link: "../servicos/portfolio/cyberseguranca",
    descricao: "Soluções completas de segurança digital para proteger seus dados e sistemas."
  },
];

// Componente para cada projeto
const ProjetoCard = ({ projeto, index, expanded, onExpand }: any) => {
  const isExpanded = expanded === index;

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className={`p-6 bg-gray-700 rounded-lg shadow-xl border border-gray-600 hover:border-blue-400 transition-all cursor-pointer`}
      onClick={() => onExpand(index)}
    >
      <motion.div layout="position" className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-blue-300">{projeto.nome}</h3>
        {isExpanded ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden mt-4 text-gray-300"
          >
            <p>{projeto.descricao}</p>
            <div className="mt-4">
              <a 
                href={projeto.link} 
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-all"
              >
                Ver Detalhes
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Portfolio = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const memoizedProjetos = useMemo(() => projetos, []);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-10 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Nosso Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoizedProjetos.map((projeto, index) => (
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
