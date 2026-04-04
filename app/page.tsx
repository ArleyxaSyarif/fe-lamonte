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

      <HeroSection />



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
