export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-[72px] flex items-center justify-between px-[60px] z-50 backdrop-blur bg-black/80 border-b border-white/10">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full border border-white/20 grid grid-cols-2 overflow-hidden">
          <div className="bg-white" />
          <div className="bg-blue-500" />
          <div className="bg-blue-500" />
          <div className="bg-white" />
        </div>
        <span className="font-display text-xl tracking-widest">BMW</span>
      </div>

      {/* Links */}
      <ul className="flex gap-10 text-xs uppercase tracking-widest text-gray-400">
        <li><a href="#models" className="hover:text-white">Models</a></li>
        <li><a href="#showcase" className="hover:text-white">Configure</a></li>
        <li><a href="#specs" className="hover:text-white">Performance</a></li>
        <li><a href="#experience" className="hover:text-white">Experience</a></li>
        <li>
          <button className="bg-blue-600 px-5 py-2 rounded text-white hover:bg-blue-500">
            Book a Drive
          </button>
        </li>
      </ul>
    </nav>
  );
}