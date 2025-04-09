import { Link } from "react-router-dom";


const Robotica = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-6">
<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent mb-8">
        Robótica
    </h1>
<p className="text-lg max-w-2xl  text-gray-300">
            A robótica é um campo multidisciplinar que combina engenharia, ciência da computação e 
            inteligência artificial para projetar, construir e operar robôs.
          </p>
          
      <div className="mt-10 flex gap-4">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold rounded-lg"
        >
          Voltar para Home
        </Link>
      </div>
        </div>
    );
  };
  
  export default Robotica;
  