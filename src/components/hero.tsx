import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <>
      <header className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-10 animate-gradient"></div>

        {/* Título animado */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white relative z-10"
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
          className="text-xl md:text-2xl font-medium text-cyan-400 mt-4 block relative z-10"
          repeat={Infinity}
        />

        {/* Container Spline - corrigido o className */}
        <div className="absolute right min-h-screen w-full mr-0 ml-[800px]">
          <Spline scene="https://prod.spline.design/PrLse33RPp09Frtc/scene.splinecode" />
        </div>
      </header>
    </>
  );
};

export default HeroSection;