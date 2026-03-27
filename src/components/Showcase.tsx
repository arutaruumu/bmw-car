"use client";

import { useState } from "react";

export default function Showcase() {
  const [color, setColor] = useState("blue");

  return (
    <section id="showcase" className="px-20 py-32 bg-black">
      <h2 className="text-5xl font-black mb-10">Configure</h2>

      <div className="flex gap-6 mb-10">
        {["black", "white", "blue", "red"].map((c) => (
          <div
            key={c}
            onClick={() => setColor(c)}
            className={`w-8 h-8 rounded-full cursor-pointer border ${
              color === c ? "border-white scale-110" : "border-transparent"
            }`}
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="h-[300px] bg-[#111] flex items-center justify-center">
        <p className="text-gray-400">Car Preview ({color})</p>
      </div>
    </section>
  );
}