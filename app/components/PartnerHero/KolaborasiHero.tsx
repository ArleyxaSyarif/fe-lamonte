"use client";

import ScrollReveal from "../ScrollReveal";
import { sendWhatsApp } from "@/lib/whatsapp";

export default function KolaborasiHero() {
    return (
        <section id="kolaborasi" className="relative py-24 md:py-32 bg-[#fefae6] overflow-hidden font-body">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1a3c04]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#f4e04d]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <ScrollReveal delay={0}>
                        <div className="max-w-xl">
                            <span className="block font-label text-sm tracking-[0.3em] uppercase text-[#1a3c04] mb-4 font-bold">
                                Kolaborasi Bisnis
                            </span>
                            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl text-[#1a3c04] leading-[1.1] mb-8">
                                Bangun Kerajaan <span className="italic font-light text-[#f4e04d]">Fashion</span> Anak Anda
                            </h2>
                            <p className="text-lg text-[#1a3c04]/80 mb-12 font-light leading-relaxed">
                                Kami bukan sekadar supplier. Kami adalah partner strategis yang memberikan akses ke produk premium, bimbingan marketing, hingga sistem operasional otomatis.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: "verified_user", title: "Produk Premium", desc: "Akses ke koleksi baju anak dengan kualitas ekspor dan desain yang selalu update." },
                                    { icon: "trending_up", title: "Bimbingan Marketing", desc: "Dukungan materi iklan, copywriting, dan strategi jualan yang sudah terbukti jalan." },
                                    { icon: "precision_manufacturing", title: "Sistem Terpadu", desc: "Manajemen stok dan pengiriman yang rapi, memudahkan Anda fokus pada penjualan." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="relative">
                                            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a3c04] rounded-2xl rotate-12 -z-10 opacity-10 group-hover:rotate-45 transition-transform duration-500" />
                                            <div className="flex-shrink-0 w-14 h-14 bg-[#1a3c04] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-headline text-xl text-[#1a3c04] mb-2">{item.title}</h3>
                                            <p className="text-[#1a3c04]/70 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Content - CTA Card */}
                    <ScrollReveal delay={400}>
                        <div className="p-8 md:p-12 bg-white rounded-[2.5rem] border border-[#1a3c04]/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a3c04]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f4e04d]/5 rounded-full -ml-16 -mb-16 transition-transform group-hover:scale-150 duration-700" />

                            <h3 className="font-headline text-2xl md:text-3xl text-[#1a3c04] mb-6 leading-tight">
                                Siap Melangkah <br /> Bersama Kami?
                            </h3>
                            <p className="text-[#1a3c04]/70 mb-10 text-sm md:text-base leading-relaxed">
                                Ribuan mitra telah membuktikan bahwa dengan sistem yang tepat, bisnis fashion bisa dijalankan dengan tenang dan menguntungkan.
                            </p>

                            <button
                                onClick={() => sendWhatsApp({ customMessage: "Halo, saya ingin bertanya tentang kolaborasi bisnis" })}
                                className="w-full bg-[#1a3c04] text-white py-5 rounded-2xl font-bold tracking-[0.1em] flex items-center justify-center gap-3 hover:bg-[#1a3c04]/90 transition-all shadow-xl shadow-[#1a3c04]/20 active:scale-95 uppercase"
                            >
                                HUBUNGI STRATEGI KAMI
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
