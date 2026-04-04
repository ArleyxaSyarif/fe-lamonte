"use client"
import { sendWhatsApp } from "@/lib/whatsapp";

export default function CTA() {
    return (
        <div className="w-full bg-[#fffceb] py-10">
            <section className="relative w-full max-w-6xl mx-auto py-20 px-6  rounded-[3rem]">

                {/* Traditional Corner Ornaments - Dikasih Opacity lebih rendah biar gak ganggu text */}
                <div className="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-20">
                    <svg className="text-[#7b5730]" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H40M0 0V40M0 0L30 30" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                        <circle cx="20" cy="20" fill="currentColor" r="4"></circle>
                    </svg>
                </div>
                <div className="absolute bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-20 rotate-180">
                    <svg className="text-[#7b5730]" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H40M0 0V40M0 0L30 30" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                        <circle cx="20" cy="20" fill="currentColor" r="4"></circle>
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Branding Accent */}
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px w-8 md:w-12 bg-[#7b5730]/30"></div>
                        <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#967451] font-bold">
                            Mau konsultasi gratis?
                        </span>
                        <div className="h-px w-8 md:w-12 bg-[#7b5730]/30"></div>
                    </div>

                    {/* Main Title - Diubah biar relevan dengan Lamonte */}
                    <h2 className="font-headline text-2xl md:text-5xl lg:text-7xl text-[#7b5730] mb-8 leading-[1.1] tracking-tight">
                        Ayok <span className="italic font-normal">klik tombol</span> di bawah ini
                    </h2>

                    {/* Description Text */}
                    <p className="font-body text-sm md:text-xl text-[#695c51] mb-12 leading-relaxed max-w-2xl opacity-90">
                        Jangan lewatkan kesempatan menjadi mitra eksklusif di kota Anda. Konsultasikan paket yang tepat untuk Anda secara gratis sekarang juga.
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={() => sendWhatsApp({})}
                        className="group relative inline-flex items-center justify-center gap-3 md:gap-4 bg-[#7b5730] text-white px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#7b5730]/30 active:scale-95 w-full sm:w-auto"
                    >
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                            <span className="material-symbols-outlined text-xl md:text-2xl group-hover:animate-bounce">
                                send
                            </span>
                            <span className="font-body font-bold tracking-wider text-sm md:text-lg uppercase">
                                Mulai Konsultasi Gratis
                            </span>
                        </div>
                    </button>

                    {/* Features List - Diubah biar lebih "Bisnis" banget */}
                    <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6 text-[#7b5730] opacity-60">
                        {[
                            "Free Konsultasi",
                            "Bimbingan Penjualan",
                            "Update Stok Tiap Hari"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7b5730]"></div>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold font-body">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
            </section>
        </div>
    );
};
