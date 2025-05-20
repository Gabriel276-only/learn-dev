import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import logo from "/src/assets/bitninja_logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // Efeito de scroll para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animação para os itens do menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo com efeito de corte ninja */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onClick={() => setIsOpen(false)}
        >
          <motion.img 
            src={logo} 
            alt="BitNinja Logo" 
            className="w-20 h-20 object-contain"
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.h1 
          className="text-2xl fonts-alt bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            BITNINJAS
            <span className="absolute ml-1 inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </motion.h1>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-1">
          <NavItem to="/" text="Home" />
          <NavItem to="/#sobre" text="Serviços" />
          <NavItem to="/#portfolio" text="Portfólio" />
          <NavItem to="/#contato" text="Contato" />
          
          {/* Efeito de shuriken interativo */}
          <motion.div 
            className="ml-4 relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 border-2 border-cyan-400 rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-cyan-400 rotate-45"></div>
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-cyan-400 font-bold text-xs -rotate-45">
              MENU
            </span>
          </motion.div>
        </div>

        {/* Botão mobile */}
       <button
          onClick={toggleMenu}
        className="relative z-60 flex flex-col justify-center items-center w-10 h-10 md:hidden focus:outline-none" 
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded mt-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded mt-1 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>


        {/* Menu mobile animado */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md pt-24 px-6 z-40"
            >
              <motion.ul className="space-y-8">
                <MobileNavItem to="/" text="Home" toggleMenu={toggleMenu} variants={itemVariants} />
                <MobileNavItem to="/#sobre" text="Serviços" toggleMenu={toggleMenu} variants={itemVariants} />
                <MobileNavItem to="/#portfolio" text="Portfólio" toggleMenu={toggleMenu} variants={itemVariants} />
                <MobileNavItem to="/#contato" text="Contato" toggleMenu={toggleMenu} variants={itemVariants} />
              </motion.ul>

              {/* Efeito de assinatura ninja */}
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-cyan-400 text-xs tracking-widest">BITNINJA</div>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Componente de item de menu para desktop
const NavItem = ({ to, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={to}
        smooth
        className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors relative block"
      >
        {text}
        {isHovered && (
          <motion.span
            layoutId="navHover"
            className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

// Componente de item de menu para mobile
const MobileNavItem = ({ to, text, toggleMenu, variants }) => {
  return (
    <motion.li variants={variants}>
      <Link
        to={to}
        smooth
        onClick={toggleMenu}
        className="text-2xl text-gray-300 hover:text-cyan-400 block py-3 border-b border-gray-800"
      >
        <span className="relative">
          {text}
          <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-cyan-400">→</span>
        </span>
      </Link>
    </motion.li>
  );
};

export default NavBar;