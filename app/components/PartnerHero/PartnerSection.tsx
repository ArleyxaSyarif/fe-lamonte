"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ScrollReveal";

export default function PartnerSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isAutoScrolling = useRef(true);

    const features = [
        {
            title: "Branding Toko Naik Kelas",
            desc: "Toko kecil rasa official store. Dapat desain sertifikat, ID card, banner dan template feed seragam. Bikin calon pembeli langsung percaya.",
            icon: "branding_watermark",
            iconBg: "bg-[#a7f4b8]/30",
            iconColor: "text-[#237227]",
            footer: "Toko terlihat rapi & niat"
        },
        {
            title: "Angka Jelas, Target Nyata",
            desc: "Masukkan modal dan target penghasilan. Sistem hitung otomatis target harian, harga ideal, dan skenario promo. Jualan pakai data, bukan feeling.",
            icon: "analytics",
            iconBg: "bg-[#ffd786]/30",
            iconColor: "text-[#694300]",
            footer: "Tau angka, berani gas"
        },
        {
            title: "Konten Katalog Auto Cakep",
            desc: "Diajarin cara foto anak pakai HP, angle yang laku, dan filter praktis. Plus stok foto katalog profesional yang siap pakai.",
            icon: "camera",
            iconBg: "bg-[#88d981]/30",
            iconColor: "text-[#00530f]",
            footer: "Feed keliatan brand besar"
        },
        {
            title: "Toko Online Siap Panen",
            desc: "Step-by-step buka toko di marketplace. Dapat contoh judul, deskripsi, foto, dan pola diskon yang bikin produk sering muncul di pencarian.",
            icon: "storefront",
            iconBg: "bg-[#a7f4b8]/30",
            iconColor: "text-[#237227]",
            footer: "Enggak bingung mulai darimana"
        },
        {
            title: "CS Robot Jago Nego",
            desc: "Tinggal copy-paste template chat yang sudah teruji. Dari chat nanya harga sampai minta diskon. Bisa diset otomatis, jadi tetap closing walau kamu lagi sibuk.",
            icon: "smart_toy",
            iconBg: "bg-[#ffd786]/30",
            iconColor: "text-[#694300]",
            footer: "Chat rapi, closing naik"
        },
        {
            title: "Sekolah Pebisnis Lapangan",
            desc: "Kelas Zoom rutin: update tren jualan, studi kasus mitra, dan sesi tanya jawab. Kamu nggak cuma ikut-ikutan, tapi paham cara mainnya.",
            icon: "school",
            iconBg: "bg-[#88d981]/30",
            iconColor: "text-[#00530f]",
            footer: "Cek jadwal kelas"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        const track = trackRef.current;
        if (!track) return;
        const scrollAmount = track.offsetWidth * 0.8;

        if (direction === 'right' && track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const index = Math.round(track.scrollLeft / (track.offsetWidth * 0.8));
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutoScrolling.current) {
                scroll('right');
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="partner"
            className="relative py-16 md:py-24 overflow-hidden bg-[#faf9f6] font-poppins"
            onMouseEnter={() => { isAutoScrolling.current = false; }}
            onMouseLeave={() => { isAutoScrolling.current = true; }}
            onTouchStart={() => { isAutoScrolling.current = false; }}
            onTouchEnd={() => { isAutoScrolling.current = true; }}
        >
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#237227 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
                    <div className="max-w-2xl">
                        <ScrollReveal delay={0}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a7f4b8]/20 text-[#237227] text-[10px] font-poppins font-black tracking-[0.2em] uppercase mb-6 border border-[#237227]/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#237227] animate-pulse"></span>
                                Ekosistem Lamonte
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-poppins font-black tracking-tight text-[#1a1c1a] leading-[1.1]">
                                Kenapa <span className="text-[#237227]">Bermitra</span> <br className="hidden md:block" /> Dengan Kami?
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={400}>
                        <div className="flex gap-3 md:gap-4 mb-2">
                            <button
                                onClick={() => { isAutoScrolling.current = false; scroll('left'); }}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#237227]/10 flex items-center justify-center bg-white shadow-sm hover:bg-[#faf9f6]/80 transition-colors group"
                            >
                                <span className="material-symbols-outlined text-[#1a1c1a] text-xl md:text-2xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
                            </button>
                            <button
                                onClick={() => { isAutoScrolling.current = false; scroll('right'); }}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#237227] flex items-center justify-center shadow-lg shadow-[#237227]/20 hover:opacity-90 transition-opacity group"
                            >
                                <span className="material-symbols-outlined text-white text-xl md:text-2xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Slider Track */}
                <div className="relative">
                    <div
                        ref={trackRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-4 md:gap-8 no-scrollbar snap-x snap-mandatory pb-8 md:pb-12 cursor-grab active:cursor-grabbing"
                    >
                        {features.map((feat, i) => (
                            <div key={i} className="min-w-[85%] sm:min-w-[60%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.5rem)] snap-start group/card">
                                <ScrollReveal delay={200 + (i * 100)}>
                                    <div className="flex flex-col h-auto min-h-[380px] md:h-[500px] md:min-h-0 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-12px_rgba(26,28,26,0.04)] border border-[#237227]/5 hover:border-[#237227]/20 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4">
                                        <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[1.25rem] ${feat.iconBg} flex items-center justify-center mb-6 md:mb-10 transition-transform duration-500 group-hover/card:scale-110`}>
                                            <span className={`material-symbols-outlined ${feat.iconColor} text-2xl md:text-4xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                                {feat.icon}
                                            </span>
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-xl md:text-2xl font-poppins font-black mb-3 md:mb-4 text-[#1a1c1a] tracking-tight">{feat.title}</h3>
                                            <p className="text-[#40493d] font-poppins leading-relaxed text-sm md:text-lg mb-6 md:mb-8 opacity-80">{feat.desc}</p>
                                        </div>

                                        <div className="pt-5 md:pt-8 border-t border-[#237227]/5 flex items-center gap-2 mt-auto">
                                            <span className="material-symbols-outlined text-[#237227] text-lg md:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <span className="text-[10px] md:text-xs font-poppins font-black tracking-widest uppercase text-[#237227] opacity-60">
                                                {feat.footer}
                                            </span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-3 mt-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === Math.floor(activeIndex / 2) ? 'w-10 bg-[#237227]' : 'w-2 bg-[#237227]/20'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
