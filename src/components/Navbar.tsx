export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[1000] px-15 h-[72px] flex items-center justify-between bg-gradient-to-b from-black/95 to-transparent backdrop-blur-md border-b border-white/5">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full border-2 border-white/15 overflow-hidden grid grid-cols-2 grid-rows-2 rotate-45">
        <div className="bg-white"></div><div className="bg-blue-600"></div>
        <div className="bg-blue-600"></div><div className="bg-white"></div>
      </div>
      <span className="font-display text-2xl font-bold tracking-[0.15em]">BMW</span>
    </div>
    <ul className="hidden md:flex gap-10 list-none text-[13px] tracking-[0.12em] uppercase text-gray-400">
      <li><a href="#models" className="hover:text-white transition-colors">Models</a></li>
      <li><a href="#showcase" className="hover:text-white transition-colors">Configure</a></li>
      <li><a href="#models" className="hover:text-white transition-colors">Models</a></li>
      <li><a href="#showcase" className="hover:text-white transition-colors">Configure</a></li>
      <li><button className="bg-blue-600 text-white px-6 py-2.5 rounded-sm hover:bg-blue-500 transition-all">Book a Drive</button></li>
    </ul>
  </nav>
  );
}