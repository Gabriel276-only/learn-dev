import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Portfolio from "./Portfolio.tsx";
import HeroSection from "./hero.tsx";


// Componente CursorTrail (Separado)
const CursorTrail = () => {
  const NUM_CIRCLES = 20;
  const [circles, setCircles] = useState(
    new Array(NUM_CIRCLES).fill({ x: 0, y: 0 })
  );
  const circlesRef = useRef(circles);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Verifica se a tela é grande o suficiente para ser considerada desktop
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // ou outro breakpoint
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop) return; // Sai se não for desktop

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
      if (isDesktop) {
        setCircles(circlesRef.current);
      }
      requestAnimationFrame(animate);
    };

    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Não renderiza em mobile/tablet

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

      
   
<HeroSection/>


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
      { nome: "Criação de Sites e Aplicações Mobile", link: "/servicos/criacao" },

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
     <Portfolio/>

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

