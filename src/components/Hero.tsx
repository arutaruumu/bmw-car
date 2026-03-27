"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex items-center px-20 bg-gradient-to-r from-[#0a1628] to-black relative">

      <div className="max-w-xl">
        <p className="text-blue-400 text-xs tracking-[0.3em] mb-6 uppercase">
          BMW Excellence · 2025
        </p>

        <h1 className="text-[80px] font-black uppercase leading-none">
          The <br />
          <span className="text-blue-400">Future</span> <br />
          <span className="italic font-light">of driving</span>
        </h1>

        <p className="text-gray-400 mt-6 mb-10">
          Engineered for those who refuse to compromise.
        </p>

        <div className="flex gap-4">
          <button onClick={() => scrollTo("models")} className="bg-blue-600 px-8 py-4 text-xs uppercase">
            Explore Models
          </button>

          <button onClick={() => scrollTo("showcase")} className="text-gray-400">
            Configure →
          </button>
        </div>
      </div>
    </section>
  );
}