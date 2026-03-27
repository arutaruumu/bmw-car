"use client";
import { Button } from "../components/Ui/Button";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,#0a1628_0%,#050608_70%)]">
    <div className="relative z-10 px-20 max-w-[560px]">
      <div className="text-[11px] font-medium tracking-[0.35em] text-blue-400 uppercase mb-6 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-blue-600"></span> BMW Excellence · 2025
      </div>
      <h1 className="font-display text-[clamp(64px,8vw,110px)] font-extrabold leading-[0.9] uppercase mb-7">
        The <span className="text-blue-400">Future</span> <br/> 
        <span className="italic font-thin">of driving</span>
      </h1>
      <p className="text-[15px] text-gray-400 leading-relaxed mb-12 max-w-[380px]">
        Engineered for those who refuse to compromise. Experience the perfect union of power and precision.
      </p>
      <div className="flex gap-4">
        <Button>Explore Models</Button>
        <Button variant="secondary">Configure Yours</Button>
      </div>
    </div>
    {/* Masukkan SVG Mobil 3D di sini sebagai komponen terpisah atau file terpisah */}
  </section>
  );
}