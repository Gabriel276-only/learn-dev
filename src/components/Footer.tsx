const Footer = () => {

return (
<footer id="contato" className="py-10 bg-gray-900 text-center">
<p className="text-gray-400">
  Entre em contato:{" "}
  <a href="mailto:contato@empresa.com" className="text-blue-400 hover:text-blue-300">
    contato@empresa.com
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
<p className="text-gray-600 text-sm mt-6">&copy; 2025 Empresa. Todos os direitos reservados.</p>
</footer>

)}
export default Footer;