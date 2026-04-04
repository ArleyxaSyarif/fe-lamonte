"use client";

import ScrollReveal from "../ScrollReveal";

export default function HeroSection() {
    return (
        <section className="relative min-h-[75vh] flex flex-col items-center justify-start px-8 md:px-16 lg:px-24 bg-white overflow-hidden pt-10 md:pt-8 pb-12">

            {/* Background Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#f4e04d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1a3c04] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>

            <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

                {/* Hero Content (Left) */}
                <div className="lg:col-span-6 space-y-8 md:space-y-10">
                    <ScrollReveal delay={0}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4e04d]/20 rounded-full border border-[#f4e04d]/30">
                            <span className="material-symbols-outlined text-[#1a3c04] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                            <span className="text-[10px] font-bold text-[#1a3c04] uppercase tracking-widest">Premium Kids Fashion Hub</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-black text-[#1a3c04] leading-[0.95] tracking-tighter italic font-headline mb-4">
                                Buka Toko Baju <br />
                                <span className="text-[#1a3c04] underline decoration-[#f4e04d] decoration-[12px] underline-offset-8">Anak</span>
                            </h1>
                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-5xl font-black text-[#1a3c04] leading-tight font-headline italic">
                                    dengan Sistem Siap Pakai
                                </h2>
                                <p className="text-xl md:text-2xl font-headline font-bold text-[#1a3c04]/40 italic tracking-tight">
                                    Rasakan Punya Brand Sendiri
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <p className="text-lg md:text-xl text-[#1a3c04]/80 max-w-lg leading-relaxed font-body font-medium">
                            Bangun bisnis fashion anak Anda dengan stok premium dan sistem otomatis. Kualitas editorial untuk kenyamanan sang buah hati.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={600}>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#paket" className="bg-[#1a3c04] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-xl">
                                <span>Lihat Paket & bonus</span>
                            </a>
                            <a href="#video" className="border-2 border-[#1a3c04] text-[#1a3c04] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#1a3c04]/5 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 backdrop-blur-sm shadow-md">
                                <span>Nonton Dulu Strateginya</span>
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={800}>
                        <div className="mt-12 flex items-center gap-6 pt-10 border-t border-[#1a3c04]/10">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-[#1a3c04]/10 shadow-lg">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2HRc7avYU7hbk5hCUjjuPyfFywB9VIPfIJdsBqU9D7zD0bTL-wHYV_0csA92AAANDuKzurs6_jLMUIG3FL-RptW6c7zHQtqmJWioc4mBtdVOMzAix-97VRGqfnGlHNKL2VsQKeNX81Y8TuONkhfToOmUYV81CIymZQGT1WDMaNMW-jsEGYHxKFjFVTKFHSHM_zB8qjgEWA_aOS7Z8DE_UVpLO1FVTa3UO3JA76q3WwdiF6hts9BSd44zPZCn2wbhE_BRzc1AsuIPU" alt="Client 1" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-[#1a3c04]/10 shadow-lg">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4qwq0mqXYRBkHtyVJaQOE6BP_Xop4S7npMz1pNLwHwdRld37icemJrSlGY0Yqs-N8vE_VEtp_aPt0q4mWEqHwcuew3bahDRsSWc5xYxH-yzhsS5NOdLJcKvX7rk7c4TC7UH_c9f0d7-enAT0sxhGqnp4cCEfeMb9hN4ccCPqEe6_GqItkODffP4MHyaIDf6ifJjt7fOrPa9zxFVTQQpe55b1myUmEUxLvzL2A6o75Y0dAQ_kWQkVBdmOtp4QboIaxKMxQqmUF3iBO" alt="Client 2" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-[#1a3c04]/10 shadow-lg">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfmEWVSR0oN5nPb7JmdMvXCvWrV-5DtYXMJwoDPeO0NWEsznWX0wB0O-CgMxx58fpPVIAcX1hNUeBo9CkqE2RNtH-JrYuIH7d8Pq_TFpitkQ1KmJOWkk2tnn5MXw3pIWn0Id_Cjq_n2CAqinl9XuGK74FEP3kSvpmCCxhDXM0hCeII0DB5IVDht9L2mgVAIND9qGZs-BbJAyD8ZzE-aqJ5n7PtuPQT9mmszQoGovtk4x5e0rjsDMAZtqvYnxNvM2q_PwUj_0B3x528" alt="Client 3" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-[#1a3c04]/70">
                                <span className="text-[#1a3c04] font-black">2,500+</span> Mitra Terdaftar di Seluruh Kota
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Hero Visual (Editorial Bento Style) */}
                <div className="lg:col-span-6 relative">
                    <ScrollReveal delay={1000}>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-4 md:space-y-6">
                                <div className="h-44 md:h-64 rounded-2xl overflow-hidden shadow-2xl relative group">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfmAEIYmSGLOYPCJ3C19tMjY0TqVrtSiLoEFYWm0FvPFyEjamlHHwm9IRPgEby5OW8rebSZO_U0M0obCQsPtlrlDmbGUvJ87Hi3W95WN01XBqoNY4xbSskJ303_GqrkPQJ5pCEBY8Qjg4HBkUGtdspUliO_lVSwupJUizlUo6-I7S8MIAdtOFQLmnVvRafCNP019dCPxXMvn4WMRlF2vGOZhXI4wABIQiokKXNUFQsqXjPsRT7H5-3C_T5OPU0LluwYAsH7HSsnVLT" alt="Editorial Kids 1" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c04]/40 to-transparent"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-[#1a3c04]/10">
                                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#1a3c04]">Ready Stock Ribuan Pcs</p>
                                    </div>
                                </div>
                                <div className="h-60 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative group bg-[#f4e04d]/20 border-4 border-[#f4e04d]/30">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDlIs6NLxXBY5301Xlsfm2XTl6AK3RyQdiVLyJbMCxsBvhxGFx7v4qQ-MkXYry3d92W8Pnbxv8WD1xHy-5Q4rk7VKIxv-RgM8mZrQrLKpSxRpiJ3C4bWBXn-qnqTqo9_ctdw13ewDhL7uHLfUiuN6RE_-G6o6ZDPD1JngSgA7Hv2yK1b3q85PDFcsPUO_1wjhpFIqIZWnH2PhyzOgFhNYrlgqzLuzoqnni8gvNyhSxWl1D_oMMCYuhhcKfacJeplMaujYppm3Eygsj" alt="Editorial Kids 2" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-[#1a3c04] text-[#f4e04d] p-4 md:p-6 rounded-2xl shadow-2xl border border-[#f4e04d]/30">
                                            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black opacity-60 mb-2">Partner Revenue</p>
                                            <p className="text-sm md:text-lg font-black leading-tight mb-2">Rp 15–80 Juta<span className="text-[10px] md:text-sm font-medium ml-1">/bulan</span></p>
                                            <p className="text-[9px] md:text-[11px] leading-relaxed text-[#fefae6]/70 font-medium">Berdasarkan data rata-rata omzet mitra aktif jualan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-6 pt-12">
                                <div className="h-60 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative group">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1vhS4S1h9CXpat3hhcmj_UDTPdYtUAgPijgjq6ZLrjTG9NhdQZrt_iaWPucuz0MghrAJpODnEmmb8ZPD9t6uTOxJgiG3Vok5OdrcEROcTuaXvyd1lvncDMCehPD3G93T_AcDVj3huwCOZGAiNUZ34SKMhHvl1Vbe3_MQJAo6DhHRR9Q0jNmoVVYcJxCK0eew1IqCcjiAUiK-IzF5L6p25F1h30WQnsUX6tSMGWg0cd1yw34MBSNAzH-tt3qE-uFHVYQ7sugdC-MSM" alt="Editorial Kids 3" />
                                    <div className="absolute bottom-4 left-2 right-2 md:left-4 md:right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#1a3c04]/10">
                                        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#1a3c04]">Model baru drop tiap bulan</p>
                                        <p className="font-black text-[#1a3c04] text-[10px] md:text-sm mt-1">Ganti Koleksi Sekali Klik</p>
                                    </div>
                                </div>
                                <div className="h-44 md:h-64 rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-[#f4e04d]/50 bg-white">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgN4DoDbLDnSVNEXZDJWgquKjjjmBe2zZCEVhlAK7IoZ1F_F0mRa6Zi2iWJL-urGPIURK3qZBL71Lp1GXaDeg5XixSjCTQv3Euy2LRNXAltqyVKDEIdxCe6iMX5lGC0beR56OrRIpL9MHZac3nvg0qWKoQnhFCAfEU1H3F0BjzCyMuyFwQYNT7Ui7DH8owBNb0dHokMP7TfxmUXFPRDqQTZoz2QCmqcN6I_5BTUMHqaNxAzbD_9jfKZDjSDkKnI-vcU-OX8JFAnSu8" alt="Editorial Kids 4" />
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <div className="text-center">
                                            <p className="text-[10px] md:text-xs font-black text-[#1a3c04] uppercase tracking-tighter leading-none">Terbukti</p>
                                            <p className="text-[12px] md:text-base font-black text-[#1a3c04] uppercase tracking-tighter">Iku Pola Jalan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Value Propositions Section - Vibrant Style */}
            <ScrollReveal delay={1200}>
                <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-10 md:py-12 mt-12 md:mt-16 border-t border-[#1a3c04]/10 bg-white shadow-2xl rounded-3xl md:rounded-[3rem]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 lg:gap-12">

                        <div className="flex items-center gap-4 font-black text-xs md:text-sm text-[#1a3c04] uppercase tracking-[0.1em] md:tracking-[0.15em] border-b border-[#1a3c04]/5 pb-4 md:border-none md:pb-0">
                            <span className="material-symbols-outlined text-[#f4e04d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span>Modal ringan, branding mewah</span>
                        </div>

                        <div className="flex items-center gap-4 font-black text-xs md:text-sm text-[#1a3c04] uppercase tracking-[0.1em] md:tracking-[0.15em] border-b border-[#1a3c04]/5 pb-4 md:border-none md:pb-0">
                            <span className="material-symbols-outlined text-[#f4e04d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span>Pola jualan terbukti jalan</span>
                        </div>

                        <div className="flex items-center gap-4 font-black text-xs md:text-sm text-[#1a3c04] uppercase tracking-[0.1em] md:tracking-[0.15em] border-b border-[#1a3c04]/5 pb-4 md:border-none md:pb-0">
                            <span className="material-symbols-outlined text-[#f4e04d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span>Dibimbing sampai benar-benar bisa</span>
                        </div>

                        <div className="flex items-center gap-4 font-black text-xs md:text-sm text-[#1a3c04] uppercase tracking-[0.1em] md:tracking-[0.15em] pb-2 md:pb-0">
                            <span className="material-symbols-outlined text-[#f4e04d] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <span>Cocok untuk IRT & pebisnis</span>
                        </div>

                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}