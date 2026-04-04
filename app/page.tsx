import Image from "next/image";
import HeroSection from "./components/Beranda/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import VideoSection from "./components/VideoHero/VideoSection";
import PartnerSection from "./components/PartnerHero/PartnerSection";
import KolaborasiHero from "./components/Kolaborasi/KolaborasiHero";
import ProdukSection from "./components/Produk/ProdukSection";
import PaketSection from "./components/Paket/PaketSection";
import { getWords } from "@/lib/api";
import CTA from "./components/CTA";
import TestimoniSection from "./components/Testimoni/TestimoniSection";
import FaqSection from "./components/FAQ/FaqSection";
import KontakSection from "./components/Kontak/KontakSection";

import ScrollReveal from "./components/ScrollReveal";

export default async function Home() {
  const words = await getWords();

  return (
    <div className="relative">
      <LoadingScreen />

      <HeroSection initialWords={words} />

      {/* Garis Pembatas Elegan - Transisi ke Video */}
      <div className="relative z-30 w-full py-12 md:py-20 flex items-center justify-center overflow-visible bg-[#f5f1e8]">
        {/* Garis ujung ke ujung */}
        <div className="absolute w-full h-[1px] bg-[#967451] opacity-20"></div>

        {/* Ornamen di tengah */}
        <div className="relative flex items-center justify-center bg-[#f5f1e8] px-8">
          <div className="w-6 h-6 rotate-45 border border-[#967451]/50 flex items-center justify-center bg-[#f5f1e8]">
            <div className="w-2 h-2 bg-[#967451]/70"></div>
          </div>
        </div>
      </div>

      <VideoSection />

      <PartnerSection />

      <KolaborasiHero />

      <ProdukSection />
      <PaketSection />

      <CTA />

      <TestimoniSection />

      <FaqSection />

      <KontakSection />
    </div>
  );
}
