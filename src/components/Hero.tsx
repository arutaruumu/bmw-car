"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex items-center relative px-20 bg-gradient-to-r from-[#0a1628] to-black">

      <div className="max-w-xl">
        <p className="text-blue-400 tracking-[0.3em] text-xs mb-6 uppercase">
          BMW Excellence · 2025
        </p>

        <h1 className="font-display text-[80px] leading-none uppercase">
          The <br />
          <span className="text-blue-400">Future</span> <br />
          <span className="italic font-light">of driving</span>
        </h1>

        <p className="text-gray-400 mt-6 mb-10">
          Engineered for those who refuse to compromise.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => scrollTo("models")}
            className="bg-blue-600 px-8 py-4 text-xs uppercase tracking-widest"
          >
            Explore Models
          </button>

          <button
            onClick={() => scrollTo("showcase")}
            className="text-gray-400 hover:text-white text-xs"
          >
            Configure →
          </button>
        </div>
      </div>
    </section>
  );
}