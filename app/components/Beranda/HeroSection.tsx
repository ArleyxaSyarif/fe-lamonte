"use client";

import { useState, useEffect } from "react";
import FotoHero from "../FotoHero";
import ScrollReveal from "../ScrollReveal";

export default function HeroSection({ initialWords = [] }: { initialWords?: any[] }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const words = initialWords;

    useEffect(() => {
        if (words.length === 0) return;

        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setFade(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, [words]);
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f5f1e8]">

            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#967451]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-[#4c4033]/5 rounded-full blur-3xl" />
            </div>

            <FotoHero />

            {/* Content Canvas */}
            <div className="relative z-10 w-full max-w-6xl px-6 text-center pt-32 md:pt-20">
                <ScrollReveal delay={0}>
                    <span className="block font-body text-[#967451] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-90 font-semibold">
                        Warisan Nusantara Terkurasi
                    </span>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl text-[#4c4033] font-bold mb-8 leading-[1.1] tracking-tight flex flex-col items-center gap-1">
                        <span>Buka Toko Baju</span>
                        <div className="h-10 md:h-16 flex items-center justify-center w-full mt-4">
                            <span className="font-bold text-white bg-[#967451] px-5 py-1 md:px-6 md:py-1 rounded-xl inline-flex items-center justify-center mt-2 min-w-[150px] md:min-w-[180px] transition-all duration-300">
                                <span
                                    className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    {words.length > 0 && words[index]?.word}
                                </span>
                            </span>
                        </div>

                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="max-w-2xl mx-auto text-sm md:text-lg text-[#7d7168] leading-relaxed mb-10 md:mb-12 px-4 md:px-0">
                        Tanpa pusing produksi, tanpa stok numpuk, tanpa perang harga. Lamonte siapkan stok premium + sistem marketing otomatis. Kamu fokus jualan, tim kami yang backup.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-4">
                        <a href="#paket" className="w-full sm:w-auto group relative bg-[#967451] text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-semibold text-xs md:text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#967451]/20">
                            <span className="material-symbols-outlined text-lg md:text-xl">redeem</span>
                            <span className="tracking-wider">LIHAT PAKET & BONUS</span>
                        </a>
                        <a href="#video" className="w-full sm:w-auto bg-[#4c4033] text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-semibold text-xs md:text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4c4033]/20">
                            <span className="material-symbols-outlined text-lg md:text-xl">play_circle</span>
                            <span className="tracking-wider">NONTON DULU STRATEGINYA</span>
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                    <div className="mt-16 md:mt-24 border-t border-[#967451]/10">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16">
                            <div className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#967451]/40 transition-all group-hover:scale-150 group-hover:bg-[#967451]" />
                                <span className="text-[11px] md:text-xs font-label tracking-[0.2em] uppercase text-[#7d7168] font-semibold">Modal Ringan, Branding Mewah</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#967451]/40 transition-all group-hover:scale-150 group-hover:bg-[#967451]" />
                                <span className="text-[11px] md:text-xs font-label tracking-[0.2em] uppercase text-[#7d7168] font-semibold">Pola Jualan Terbukti Jalan</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#967451]/40 transition-all group-hover:scale-150 group-hover:bg-[#967451]" />
                                <span className="text-[11px] md:text-xs font-label tracking-[0.2em] uppercase text-[#7d7168] font-semibold">Untuk IRT & Pebisnis</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

        </main>
    );
}