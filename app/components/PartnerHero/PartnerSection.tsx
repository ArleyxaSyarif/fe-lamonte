"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "../ScrollReveal";

export default function PartnerSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);
    const isAutoScrolling = useRef(true);

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const updateDots = () => {
        const track = trackRef.current;
        const dots = Array.from(dotsRef.current?.children || []) as HTMLDivElement[];
        if (!track || dots.length === 0) return;

        const scrollLeft = track.scrollLeft;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32; // card + gap
        const visibleCount = getVisibleCount();
        const activeIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, idx) => {
            const groupIndex = Math.floor(activeIndex / visibleCount);
            if (idx === groupIndex % dots.length) {
                dot.className = "dot h-2 w-6 rounded-full bg-[#1a3c04] transition-all duration-300";
            } else {
                dot.className = "dot h-2 w-2 rounded-full bg-[#1a3c04]/20 transition-all duration-300";
            }
        });
    };

    const scrollNext = () => {
        const track = trackRef.current;
        if (!track) return;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32;
        const visibleCount = getVisibleCount();

        if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: itemWidth * visibleCount, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        const track = trackRef.current;
        if (!track) return;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32;
        const visibleCount = getVisibleCount();
        track.scrollBy({ left: -itemWidth * visibleCount, behavior: 'smooth' });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => updateDots();
        const handleMouseEnter = () => { isAutoScrolling.current = false; };
        const handleMouseLeave = () => { isAutoScrolling.current = true; };

        track.addEventListener('scroll', handleScroll);
        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        const autoPlay = setInterval(() => {
            if (isAutoScrolling.current) {
                scrollNext();
            }
        }, 5000);

        // Initial setup
        setTimeout(updateDots, 100);

        return () => {
            track.removeEventListener('scroll', handleScroll);
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
            clearInterval(autoPlay);
        };
    }, []);

    const features = [
        {
            title: "Branding Toko Naik Kelas",
            desc: "Toko kecil rasa official store. Dapat desain sertifikat, ID card, banner dan template feed seragam. Bikin calon pembeli langsung percaya.",
            icon: "auto_awesome",
            footer: "Toko terlihat rapi & niat"
        },
        {
            title: "Angka Jelas, Target Nyata",
            desc: "Masukkan modal dan target penghasilan. Sistem hitung otomatis target harian, harga ideal, dan skenario promo. Jualan pakai data, bukan feeling.",
            icon: "payments",
            footer: "Tau angka, berani gas"
        },
        {
            title: "Konten Katalog Auto Cakep",
            desc: "Diajarin cara foto anak pakai HP, angle yang laku, dan filter praktis. Plus stok foto katalog profesional yang siap pakai.",
            icon: "photo_library",
            footer: "Feed keliatan brand besar"
        },
        {
            title: "Toko Online Siap Panen",
            desc: "Step-by-step buka toko di marketplace. Dapat contoh judul, deskripsi, foto, dan pola diskon yang bikin produk sering muncul di pencarian.",
            icon: "shopping_cart",
            footer: "Enggak bingung mulai darimana"
        },
        {
            title: "CS Robot Jago Nego",
            desc: "Tinggal copy-paste template chat yang sudah teruji. Dari chat nanya harga sampai minta diskon. Bisa diset otomatis, jadi tetap closing walau kamu lagi sibuk.",
            icon: "chat",
            footer: "Chat rapi, closing naik"
        },
        {
            title: "Sekolah Pebisnis Lapangan",
            desc: "Kelas Zoom rutin: update tren jualan, studi kasus mitra, dan sesi tanya jawab. Kamu nggak cuma ikut-ikutan, tapi paham cara mainnya.",
            icon: "school",
            footer: "Cek jadwal kelas"
        }
    ];

    return (
        <section id="partner" className="bg-[#fdf8e8] py-16 md:py-24 relative overflow-hidden font-body">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent pointer-events-none opacity-50" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f4e04d]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Transparent Grid Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(#1a3c04 1px, transparent 1px), linear-gradient(90deg, #1a3c04 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <ScrollReveal delay={0}>
                        <span className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-[#1a3c04] mb-4 block px-4 py-1.5 rounded-full bg-[#f4e04d]/10 inline-block">Ekosistem Lamonte</span>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <h2 className="font-headline text-3xl md:text-5xl text-[#1a3c04] italic font-black leading-tight">Kenapa Bermitra <br className="md:hidden" /> <span className="text-gradient">Dengan Kami?</span></h2>
                    </ScrollReveal>
                    <div className="w-20 h-1 bg-[#f4e04d] mx-auto mt-8 rounded-full"></div>
                </div>

                <ScrollReveal delay={400}>
                    <div className="relative group">
                        <button onClick={() => { isAutoScrolling.current = false; scrollPrev(); }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 rounded-full border border-[#1a3c04]/20 bg-white text-[#1a3c04] hidden lg:flex items-center justify-center hover:bg-[#1a3c04] hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button onClick={() => { isAutoScrolling.current = false; scrollNext(); }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 rounded-full border border-[#1a3c04]/20 bg-white text-[#1a3c04] hidden lg:flex items-center justify-center hover:bg-[#1a3c04] hover:text-white transition-all">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>

                        <div ref={trackRef} className="flex gap-8 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12">
                            {features.map((feat, i) => (
                                <div key={i} className="min-w-[85%] md:min-w-[calc(50%-1.25rem)] lg:min-w-[calc(33.333%-1.667rem)] snap-start">
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-3 group/card border border-white/50">
                                        <div className="p-10 flex-grow">
                                            <div className="w-16 h-16 bg-[#1a3c04]/5 rounded-2xl flex items-center justify-center mb-8 group-hover/card:bg-[#1a3c04] text-[#1a3c04] group-hover/card:text-white transition-all duration-500 shadow-sm">
                                                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                                            </div>
                                            <h3 className="font-headline text-2xl text-[#1a3c04] mb-5 font-black italic tracking-tight">{feat.title}</h3>
                                            <p className="text-[#1a3c04]/60 text-base md:text-lg leading-relaxed font-medium">{feat.desc}</p>
                                        </div>
                                        <div className="bg-[#fdf8e8]/50 py-5 px-10 flex items-center space-x-3 border-t border-[#1a3c04]/5">
                                            <span className="material-symbols-outlined text-[#1a3c04] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <span className="font-sans text-[11px] font-black uppercase tracking-widest text-[#1a3c04]/70">{feat.footer}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div ref={dotsRef} className="flex justify-center space-x-3 mt-8">
                            {Array.from({ length: Math.ceil(features.length / getVisibleCount()) }).map((_, i) => (
                                <div key={i} className="dot h-2 w-2 rounded-full bg-[#1a3c04]/20 transition-all duration-300"></div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
