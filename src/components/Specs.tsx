export default function Specs() {
  const specs = [
    ["Acceleration", "95%"],
    ["Top Speed", "90%"],
    ["Efficiency", "80%"],
  ];

  return (
    <section id="specs" className="px-20 py-32">
      <h2 className="text-5xl font-black mb-10">Performance</h2>

      <div className="space-y-6">
        {specs.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-2">
              <span>{s[0]}</span>
              <span className="text-blue-400">{s[1]}</span>
            </div>
            <div className="h-1 bg-gray-800">
              <div className="h-1 bg-blue-500" style={{ width: s[1] }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}