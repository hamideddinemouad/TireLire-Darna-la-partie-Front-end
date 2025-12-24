import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="bg-[#F1F3F5] text-[#1B1B1E] font-sans antialiased">
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Footer />
    </div>
  );
}
