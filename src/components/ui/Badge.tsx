export const Badge = ({ label, value, unit }: { label: string; value: string; unit?: string }) => (
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 lg:p-5">
    <div className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-1">{label}</div>
    <div className="font-display text-3xl font-bold text-blue-400">{value}</div>
    {unit && <div className="text-[11px] text-gray-400 mt-1">{unit}</div>}
  </div>
);