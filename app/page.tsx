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

export default async function Home() {
  const words = await getWords();

  return (
    <div className="relative">
      <LoadingScreen />

      <HeroSection initialWords={words} />

      {/* Garis Pembatas Elegan (Versi Lebih Besar) - Memotong Foto */}
      <div className="relative z-30 w-full h-0 flex items-center justify-center overflow-visible">
        {/* Garis ujung ke ujung (lebih tegas) */}
        <div className="absolute w-full h-[2px] bg-[#967451] opacity-30"></div>

        {/* Ornamen di tengah yang menimpa garis */}
        <div className="relative flex items-center justify-center bg-[#f5f1e8] px-12 py-2">
          {/* Diamond luar membesar */}
          <div className="w-8 h-8 rotate-45 border-[2px] border-[#967451]/70 flex items-center justify-center bg-[#f5f1e8]">
            {/* Diamond dalam membesar */}
            <div className="w-3 h-3 bg-[#967451]/90"></div>
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
    </div>
  );
}
