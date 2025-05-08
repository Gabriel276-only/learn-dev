import { useState } from "react";
import logo from "/src/assets/bitninja_logo.png";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-300 bg-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg relative w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link className="flex items-center" to="/">
            <img className="w-40" src={logo} alt="Logo" />
            <h1 className="text-4xl text-gray-900 dark:text-gray-100 fonts-alt">
              BitNinjas
            </h1>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="relative z-10 flex flex-col justify-center items-center w-10 h-10 md:hidden focus:outline-none"
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

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-900 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#sobre"
                smooth
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/#portfolio"
                smooth
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Portfólio
              </Link>
            </li>
            <li>                
                <Link
                  to="/#contato"
                  smooth
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contato
                </Link>
              </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
