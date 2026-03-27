export default function ProductCard({ product }: any) {
  return (
    <div className="bg-[#151821] border border-white/10 p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-400 mb-4">{product.desc}</p>

      <div className="flex gap-4 text-sm">
        <span>{product.power}</span>
        <span>{product.speed}</span>
        <span>{product.top}</span>
      </div>
    </div>
  );
}