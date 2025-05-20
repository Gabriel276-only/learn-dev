import { useRef } from 'react';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef(null);

  return (
    <section className="relative">
      <header 
        ref={heroRef}
        className="HeroSection h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        {/* Gradiente animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-800 via-cyan-300/20 to-gray-900 opacity-35"
        ></motion.div>

        {/* Container de conteúdo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 w-full px-4 py-4 border-2 border-blue-500 rounded-lg shadow-2xl shadow-blue-500 p-10 max-w-4xl backdrop-blur-md backdrop-brightness-90"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white"
          >
            Na <span className="bg-gradient-to-r from-blue-600 to-cyan-300 inline-block text-transparent bg-clip-text fonts-alt px-1">BITNINJAS</span>, você encontra
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Soluções educacionais inovadoras",
              1500,
              "Plataformas de suporte personalizadas",
              1500,
              "Consultoria em integração tecnológica",
              1500,
              "Ferramentas de aprendizado interativas",
              1500,
              "Transformação digital para empresas e escolas",
              1500,
            ]}
            wrapper="span"
            speed={60}
            className="text-lg sm:text-xl md:text-3xl font-medium text-cyan-400 mt-4 block"
            repeat={Infinity}
          />
        </motion.div>

        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-5xl md:text-6xl font-bold fonts-alt absolute right-0 bottom-0 p-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-300"
        >
          O FUTURO
        </motion.h4>
      </header>

    </section>
  );
};

export default HeroSection;