export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-[72px] flex items-center justify-between px-[60px] z-50 backdrop-blur bg-black/80 border-b border-white/10">
      
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 grid grid-cols-2 rounded-full overflow-hidden border border-white/20">
          <div className="bg-white" />
          <div className="bg-blue-500" />
          <div className="bg-blue-500" />
          <div className="bg-white" />
        </div>
        <span className="font-bold tracking-widest">BMW</span>
      </div>

      <div className="flex gap-10 text-xs uppercase text-gray-400">
        <a href="#models">Models</a>
        <a href="#showcase">Configure</a>
        <a href="#specs">Performance</a>
        <a href="#experience">Experience</a>
      </div>
    </nav>
  );
}