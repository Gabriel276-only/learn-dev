import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <>
      <header className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-fuchsia-500 to-cyan-300 opacity-15 animate-gradient"></div>

        {/* Container de conteúdo */}
        <div className="relative z-10 w-full px-4">
          {/* Título animado */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Na <span className="bg-gradient-to-r from-blue-600 to-cyan-300 inline-block text-transparent bg-clip-text">BitNinja</span>, você encontra
          </motion.h1>

          {/* Texto dinâmico */}
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
            className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-400 mt-4 block"
            repeat={Infinity}
          />
        </div>

        {/* Container Spline - ajustado para responsividade */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="relative w-full h-full">
            <Spline 
              scene="https://prod.spline.design/N-lNSAHDTu1wDhvb/scene.splinecode" 
              className="absolute right-0 bottom-0 w-full h-full invisible md:visible md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-2/3 xl:w-1/2 xl:h-1/2"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;