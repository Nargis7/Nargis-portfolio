export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#0f172a] shadow-lg fixed w-full z-50">
      {/* <h1 className="text-2xl font-bold text-white">Nargis Perween.</h1> */}
    <span className="text-cyan-400 font-bold text-xl md:text-2xl tracking-wide flex items-center gap-1">
  <span className="bg-cyan-400 text-white rounded-full px-2 py-1 text-lg">N</span>
  Nargis Perween.
</span>

      <ul className="flex space-x-6 text-white">
         <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About Me</a></li>
        <li><a href="#myrecentwork" className="hover:text-cyan-400">My Recent Work</a></li>
         <li><a href="#certificate" className="hover:text-cyan-400">Certificate</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  )
}