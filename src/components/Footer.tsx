const year = new Date().getFullYear();



const Footer = () => {

return (
<footer id="contato" className="py-10 bg-gray-950 text-center">
<p className="text-gray-400">
  Entre em contato:{" "}
  <a href="mailto:contato@empresa.com" className="text-blue-400 hover:text-blue-300">
  contato@bitninjas.com.br
  </a>
</p>
<div className="mt-4 flex justify-center space-x-4">
  <a href="#" className="text-gray-400 hover:text-blue-400">
    LinkedIn
  </a>
  <a href="#" className="text-gray-400 hover:text-blue-400">
    Instagram
  </a>
  <a href="#" className="text-gray-400 hover:text-blue-400">
    GitHub
  </a>
</div>
<p className="text-gray-600 text-sm mt-6">&copy; {year} BitNinjas. Todos os direitos reservados.</p>
</footer>

)}
export default Footer;