"use client";

import ScrollReveal from "../ScrollReveal";

export default function HeroSection() {
    return (
        <section className="relative flex-grow flex items-center px-8 pt-20 md:pt-28 pb-8 lg:py-20 lg:pt-24 overflow-hidden bg-[#faf9f6]">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ffd786]/5 -skew-x-12 transform origin-top-right -z-10"></div>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
                {/* Content Column */}
                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <ScrollReveal delay={200}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a7f4b8]/20 text-[#237227] text-[10px] font-poppins font-black tracking-[0.2em] uppercase mb-6 border border-[#237227]/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#237227] animate-pulse"></span>
                            Premium Kids Fashion Brand
                        </div>

                        <div className="space-y-4 mb-8">
                            <h1 className="font-poppins text-[#1a1c1a] tracking-[-0.05em] leading-[0.95]">
                                <span className="block text-4xl md:text-6xl font-black mb-1">
                                    Buka Toko <span className="text-[#237227]">Baju Anak</span>
                                </span>
                            </h1>

                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1c1a] leading-tight font-poppins tracking-tight">
                                    dengan Sistem <span className="text-[#237227]">Siap Pakai</span>
                                </h2>
                                <p className="text-lg md:text-xl font-bold text-[#40493d]/50 italic tracking-tight font-poppins">
                                    "Rasakan Punya Brand Sendiri Tanpa Pusing Produksi"
                                </p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-[#40493d] font-poppins font-medium leading-relaxed max-w-xl mb-8 opacity-80 mx-auto lg:mx-0">
                            Tanpa pusing produksi, tanpa stok numpuk, tanpa perang harga. Lamonte siapkan stok premium + sistem marketing otomatis. Kamu fokus jualan, tim kami yang backup.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="#paket" className="px-8 py-4 bg-[#237227] text-white rounded-xl font-poppins font-extrabold text-base md:text-lg shadow-xl shadow-[#237227]/20 hover:bg-[#519a66] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto">
                                Lihat Paket & bonus
                                <span className="material-symbols-outlined">shopping_bag</span>
                            </a>
                            <a href="#video" className="px-8 py-4 bg-transparent border-2 border-[#237227] text-[#237227] rounded-xl font-poppins font-extrabold text-base md:text-lg hover:bg-[#237227]/5 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto">
                                <span className="material-symbols-outlined">play_circle</span>
                                Nonton Dulu Strateginya
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Trust Indicators */}
                    <ScrollReveal delay={600}>
                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 opacity-80">
                            <div className="flex items-center gap-2 font-poppins font-extrabold text-[#237227] text-sm md:text-base">
                                <span className="material-symbols-outlined text-[#ffaa00] text-2xl md:text-3xl">verified</span> Modal ringan
                            </div>
                            <div className="flex items-center gap-2 font-poppins font-extrabold text-[#237227] text-sm md:text-base">
                                <span className="material-symbols-outlined text-[#ffaa00] text-2xl md:text-3xl">verified</span> Pola terbukti
                            </div>
                            <div className="flex items-center gap-2 font-poppins font-extrabold text-[#237227] text-sm md:text-base">
                                <span className="material-symbols-outlined text-[#ffaa00] text-2xl md:text-3xl">supervised_user_circle</span> Full Bimbingan
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Visual Column */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0 max-w-lg mx-auto">
                    <ScrollReveal delay={800}>
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(35,114,39,0.15)] group">
                            <img alt="Hero Visual" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/gudang/gudang1.png" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#237227]/30 to-transparent"></div>

                            {/* Floating Status Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/20 flex items-center gap-2 w-fit">
                                    <span className="material-symbols-outlined text-[#237227] text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                                    <span className="text-[10px] md:text-sm font-poppins font-black text-[#1a1c1a] uppercase">READY STOCK RIBUAN PCS</span>
                                </div>
                                <div className="bg-[#ffd786] px-3 py-1.5 rounded-lg shadow-md border border-[#ffd786]/20 flex items-center gap-2 w-fit">
                                    <span className="material-symbols-outlined text-[#237227] text-xs md:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                    <span className="text-[10px] md:text-sm font-poppins font-black text-[#237227] uppercase">Model baru drop tiap bulan</span>
                                </div>
                            </div>

                            {/* Floating Detail Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-[#faf9f6]/95 backdrop-blur-[15px] p-4 md:p-6 rounded-2xl border-l-[4px] md:border-l-[6px] border-[#ffaa00] shadow-xl">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#237227] flex items-center justify-center text-[#ffd786]">
                                            <span className="material-symbols-outlined text-lg md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                                        </div>
                                        <div>
                                            <p className="text-[8px] md:text-[10px] font-poppins font-black text-[#237227] uppercase leading-none mb-1">OMZET MITRA</p>
                                            <p className="text-[8px] md:text-[10px] font-poppins font-black text-[#1a1c1a] uppercase leading-none">AKTIF JUALAN</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#237227]/5 p-2 md:p-3 rounded-xl border border-[#237227]/10 flex items-baseline gap-1">
                                        <p className="text-xl md:text-3xl font-poppins font-black text-[#237227] whitespace-nowrap">Rp 15–80 Juta</p>
                                        <span className="text-[10px] md:text-sm font-bold text-[#237227]/60">/bulan</span>
                                    </div>

                                    <p className="text-[9px] md:text-xs text-[#40493d] font-poppins font-semibold leading-relaxed">
                                        Sistem terbukti, tinggal ikuti polanya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Decorative Background Elements */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#ffd786]/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#237227]/10 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}