"use client";

import ScrollReveal from "../ScrollReveal";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-8 pt-28 md:pt-36 pb-16 flex flex-col items-center bg-white">
            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1a1c1a 1px, transparent 1px),
                        linear-gradient(to bottom, #1a1c1a 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                {/* Top Badge */}
                <ScrollReveal delay={100}>
                    <span className="inline-block bg-[#ffaa00] text-[#232722] text-[10px] font-poppins font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-8">
                        Premium Kids Fashion Brand
                    </span>
                </ScrollReveal>

                {/* Two-Column Grid: Headline Left, Description Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Side: Big Headline */}
                    <div>
                        <ScrollReveal delay={200}>
                            <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] text-[#1a1c1a]">
                                Buka Toko Baju Anak
                            </h1>
                            <h2 className="font-poppins text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tighter leading-[1.1] text-[#ffaa00] mt-2">
                                dengan Sistem Siap Pakai
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Description + Actions */}
                    <div className="space-y-10 pt-0 lg:pt-4">
                        <ScrollReveal delay={300}>
                            <p className="font-poppins text-lg md:text-xl font-bold text-[#1a1c1a]/30 italic tracking-tight mb-4">
                                "Rasakan Punya Brand Sendiri Tanpa Pusing Produksi"
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-[#1a1c1a]/60 leading-relaxed max-w-xl">
                                Tanpa pusing produksi, tanpa stok numpuk, tanpa perang harga. Lamonte siapkan stok premium + sistem marketing otomatis. Kamu fokus jualan, tim kami yang backup.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <a
                                    href="#paket"
                                    className="bg-gradient-to-r from-[#825500] to-[#ffaa00] text-white px-10 py-4 rounded-md font-poppins font-semibold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#ffaa00]/20 active:scale-95 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                                >
                                    Lihat Paket & bonus
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                </a>
                                <a
                                    href="#video"
                                    className="bg-transparent border-2 border-[#1a1c1a] text-[#1a1c1a] px-10 py-4 rounded-md font-poppins font-semibold text-lg hover:bg-[#1a1c1a] hover:text-white transition-all active:scale-95 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">play_circle</span>
                                    Nonton Dulu Strateginya
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Selling Points Above Image */}
            <div className="w-full max-w-screen-2xl mx-auto mt-20 relative z-10 px-0">
                <ScrollReveal delay={550}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Modal ringan, branding mewah",
                            "Pola jualan terbukti jalan",
                            "Dibimbing sampai benar-benar bisa",
                            "Cocok untuk ibu rumah tangga & pebisnis"
                        ].map((point, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-[#1a1c1a]/5 p-4 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="w-8 h-8 rounded-full bg-[#ffaa00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ffaa00] transition-colors">
                                    <span className="material-symbols-outlined text-[#ffaa00] text-sm group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        verified
                                    </span>
                                </div>
                                <p className="font-poppins text-xs md:text-sm font-bold text-[#1a1c1a]/70 leading-snug">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {/* Glassmorphism Image Section Below */}
            <div className="w-full max-w-screen-2xl mx-auto mt-8 relative z-10 px-0">
                <ScrollReveal delay={600}>
                    <div className="relative w-full">
                        {/* Ambient glow behind the image */}
                        <div className="absolute inset-0 bg-[#ffaa00]/5 rounded-full blur-[120px] -z-10 transform -translate-y-1/2"></div>

                        <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-2xl bg-white py-3 lg:py-6 px-0">
                            <div className="w-full h-full rounded-lg border border-[#1a1c1a]/5 bg-[#f5f5f5] overflow-hidden relative group">
                                {/* Glassmorphism Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                    <div className="w-[55%] h-[55%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-inner flex flex-col items-center justify-center gap-4">
                                        <span className="material-symbols-outlined text-[#ffaa00] text-5xl md:text-6xl opacity-60">inventory_2</span>
                                        <div className="text-center">
                                            <p className="font-poppins font-black text-white text-lg md:text-2xl drop-shadow-lg">READY STOCK RIBUAN PCS</p>
                                            <p className="font-poppins font-bold text-white/80 text-xs md:text-sm mt-1 drop-shadow-lg">Model baru drop tiap bulan</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg border-l-4 border-[#ffaa00] flex items-center gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ffaa00] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-lg md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] font-poppins font-black text-[#ffaa00] uppercase leading-none mb-0.5">OMZET MITRA AKTIF</p>
                                        <p className="text-lg md:text-2xl font-poppins font-black text-[#1a1c1a] leading-none">Rp 15–80 Juta<span className="text-[10px] md:text-sm font-bold text-[#1a1c1a]/40 ml-1">/bulan</span></p>
                                    </div>
                                </div>

                                {/* Floating Badge Top Right */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-[#ffaa00] text-[#232722] px-3 py-1.5 rounded-lg shadow-md font-poppins font-black text-[10px] md:text-xs uppercase flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                        Sistem Terbukti
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <img
                                    alt="Gudang Lamonte - Premium Kids Fashion"
                                    className="w-full h-full object-cover grayscale-[30%] opacity-90 transition-transform duration-700 group-hover:scale-105"
                                    src="/gudang/gudang1.png"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}