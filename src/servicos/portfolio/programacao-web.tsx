import { Link } from "react-router-dom";


const ProgramacaoWeb = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-6">
<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent mb-8">
  Programação Web
</h1>
          <p className="text-lg max-w-2xl  text-gray-300">
          A programação web é o processo de criação de sites e aplicações para a internet. 
            Envolve o uso de linguagens como HTML, CSS e JavaScript, além de frameworks e bibliotecas 
            que facilitam o desenvolvimento.
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
  
  export default ProgramacaoWeb;
  