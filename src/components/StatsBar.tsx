export default function StatsBar() {
  return (
    <div className="grid grid-cols-4 bg-[#151821] border-y border-white/10 px-20 py-8 text-center">
      {[
        ["510", "hp", "Peak Power"],
        ["650", "nm", "Torque"],
        ["100", "yrs", "Legacy"],
        ["50+", "", "Models"],
      ].map((item, i) => (
        <div key={i}>
          <p className="text-3xl font-bold">
            {item[0]} <span className="text-blue-400 text-sm">{item[1]}</span>
          </p>
          <p className="text-xs text-gray-400 uppercase mt-1">{item[2]}</p>
        </div>
      ))}
    </div>
  );
}