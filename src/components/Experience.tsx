export default function Experience() {
  return (
    <section id="experience" className="px-20 py-32 bg-[#0a0b0f]">
      <h2 className="text-5xl font-black mb-10">Experience</h2>

      <div className="grid grid-cols-2 gap-10">
        <div className="bg-[#151821] p-10">
          <h3 className="text-2xl mb-4">Driving Intelligence</h3>
          <p className="text-gray-400">
            AI-assisted driving system for maximum control.
          </p>
        </div>

        <div className="bg-[#151821] p-10">
          <h3 className="text-2xl mb-4">Luxury Interior</h3>
          <p className="text-gray-400">
            Premium materials with futuristic design.
          </p>
        </div>
      </div>
    </section>
  );
}