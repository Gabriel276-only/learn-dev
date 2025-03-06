import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Componente CursorTrail (Separado)
const CursorTrail = () => {
  const NUM_CIRCLES = 20;
  const [circles, setCircles] = useState(
    new Array(NUM_CIRCLES).fill({ x: 0, y: 0 })
  );
  const circlesRef = useRef(circles);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newCircles = [...circlesRef.current];
      newCircles[0] = { x: e.clientX, y: e.clientY };

      for (let i = 1; i < NUM_CIRCLES; i++) {
        newCircles[i] = {
          x: newCircles[i].x + (newCircles[i - 1].x - newCircles[i].x) * 0.85,
          y: newCircles[i].y + (newCircles[i - 1].y - newCircles[i].y) * 0.85,
        };
      }

      circlesRef.current = newCircles;
      setCircles(newCircles);
    };

    const animate = () => {
      setCircles(circlesRef.current);
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {circles.map((circle, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-cyan-300 rounded-full shadow-lg"
          style={{
            left: circle.x - 2,
            top: circle.y - 2,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
            transform: `scale(${1.5 - i * 0.1})`,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "BitNinjas";
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <CursorTrail /> {/* Adicionando efeito de rastro */}

      <NavBar />

      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-indigo-900">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl font-bold"
  >
    <h1 className="font-bold text-5xl">Na BitNinja você encontra</h1>
    <TypeAnimation
      sequence={[
        'Soluções educacionais inovadoras',
        1500,
        'Plataformas de suporte personalizadas',
        1500,
        'Consultoria em integração tecnológica',
        1500,
        'Ferramentas de aprendizado interativas',
        1500,
        'Transformação digital para empresas e escolas',
        1500,
      ]}
      wrapper="span"
      speed={60}
      style={{
        fontSize: '0.8em',
        display: 'inline-block',
        margin: '30px',
        opacity: 0.9,
        transition: 'opacity 0.3s ease-in-out',
        color: 'cyan',
        
        
      }}
      repeat={Infinity}
    />
  </motion.h1>
</header>


      {/* Sobre */}
      <section id="sobre" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Sobre Nós</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
        A BitNinja é uma empresa especializada em soluções tecnológicas e capacitação profissional, oferecendo serviços inovadores para empresas e indivíduos que desejam se destacar no mundo digital. Nosso foco é fornecer tecnologia de ponta e treinamento de alta qualidade para impulsionar negócios e carreiras.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-10 bg-gray-700">
  <h2 className="text-3xl font-semibold text-center mb-6">Nossos Serviços</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { nome: "Projetos Educacionais para Escolas do Futuro", link: "/servicos/educacao" },
      { nome: "Consultoria e Treinamento para Empresas in Company", link: "/servicos/consultoria" },
      { nome: "Criação de Sites e Aplicações Mobile", link: "/servicos/criacao" }
    ].map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-gray-600 rounded-lg text-center shadow-lg border border-gray-500 hover:border-blue-400 transition-all"
      >
        <Link to={service.link} className="text-xl font-semibold text-blue-400 hover:underline">
          {service.nome}
        </Link>
      </motion.div>
    ))}
  </div>
</section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 px-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Nosso Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Programação Web", "Robótica Educacional", "Jogos Digitais", "Aplicações para Dispositivos Móveis", "Administração de Banco de Dados", "Cybersegurança"].map((projeto, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg text-center shadow-xl border border-gray-600 hover:border-blue-400 transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-300">{projeto}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Botão Voltar ao Topo */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          <FontAwesomeIcon icon={faAngleUp} size="lg" />
        </button>
      )}

      {/* Contato */}
      <Footer />
    </div>
  );
}

export default App;