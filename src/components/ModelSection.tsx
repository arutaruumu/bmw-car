import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ModelsSection() {
  return (
    <section id="models" className="px-20 py-32 bg-[#0a0b0f]">
      <h2 className="text-5xl font-black mb-10 uppercase">
        Iconic Series
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}