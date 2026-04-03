import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamerTypes from "@/components/GamerTypes";
import Features from "@/components/Features";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0b14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <GamerTypes />
      <Features />
      <CTABanner />
      <Footer />
    </main>
  );
}
