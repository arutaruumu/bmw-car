import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ModelsSection from "../components/ModelSection";
import Showcase from "../components/Showcase";
import Specs from "../components/Specs";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ModelsSection />
      <Showcase />
      <Specs />
      <Experience />
      <Footer />
    </>
  );
}
