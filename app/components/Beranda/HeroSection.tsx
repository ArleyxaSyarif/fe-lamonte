"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import FotoHero from "../FotoHero";

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
        }, 3000);

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
            <div className="relative z-10 w-full max-w-6xl px-6 text-center pt-20">
                <span className="block font-body text-[#967451] text-sm tracking-[0.3em] uppercase mb-6 opacity-90 font-semibold">
                    Warisan Nusantara Terkurasi
                </span>

                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-[#4c4033] font-bold mb-8 leading-[1.1] tracking-tight flex flex-col items-center gap-1">
                    <span>Lamonte Toko Baju</span>
                    <div className="h-16 flex items-center justify-center w-full mt-4">
                        <span className="font-bold text-white bg-[#967451] px-6 py-1 rounded-xl inline-flex items-center justify-center mt-2 min-w-[180px] transition-all duration-300">
                            <span
                                className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {words.length > 0 && words[index]?.word}
                            </span>
                        </span>
                    </div>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#7d7168] leading-relaxed mb-12">
                    Tanpa pusing produksi, tanpa stok numpuk, tanpa perang harga. Lamonte siapkan stok premium + sistem marketing otomatis. Kamu fokus jualan, tim kami yang backup.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="group relative bg-[#967451] text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#967451]/20">
                        <span className="material-symbols-outlined">redeem</span>
                        <span>LIHAT PAKET & BONUS</span>
                    </button>
                    <button className="bg-[#4c4033] text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#4c4033]/20">
                        <span className="material-symbols-outlined">play_circle</span>
                        <span>NONTON DULU STRATEGINYA</span>
                    </button>
                </div>


                <div className="flex items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#967451]">check_circle</span>
                        <span className="text-sm text-[#7d7168]">Modal ringan, branding mewah</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#967451]">check_circle</span>
                        <span className="text-sm text-[#7d7168]">Pola jualan terbukti jalan</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#967451]">check_circle</span>
                        <span className="text-sm text-[#7d7168]">Cocok untuk ibu rumah tangga & pebisnis</span>
                    </div>
                </div>
            </div>

        </main>
    );
}