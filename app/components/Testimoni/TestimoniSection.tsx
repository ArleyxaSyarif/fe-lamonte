import { getTestimonis } from '@/lib/api';
import React from 'react';
import ScrollReveal from "../ScrollReveal";

export default async function TestimoniSection() {
    const testimoni = await getTestimonis();
    return (
        <section className="relative bg-white py-16 md:py-24 overflow-hidden font-body">

            {/* Dots Pattern Background - Green Accent */}
            <div
                className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#1a3c04 2px, transparent 2px)`,
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Header Section */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 mb-16 text-center">
                <ScrollReveal delay={0}>
                    <span className="font-label text-sm tracking-[0.3em] uppercase text-[#1a3c04] mb-4 block font-bold opacity-70">
                        Bukti Nyata Bukan Sekadar Janji
                    </span>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <h2 className="font-headline text-2xl md:text-5xl text-[#1a3c04] leading-tight mb-6 md:mb-8">
                        Testimoni
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="max-w-2xl mx-auto text-[#1a3c04]/70 text-lg font-light leading-relaxed">
                        Beberapa dokumentasi mitra yang sudah jalan. Ada yang mulai dari nol, ada yang sebelumnya mentok. Mereka naik omzet setelah pakai sistem yang sama.
                    </p>
                </ScrollReveal>
            </div>

            {/* Infinite Photo Carousel */}
            <ScrollReveal delay={600}>
                <div className="relative z-10 py-10">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#fefae6] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#fefae6] to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-infinite-scroll gap-8 px-4">
                        {/* Render Set Pertama */}
                        {testimoni.map((item: any, idx: any) => (
                            <div key={`set-1-${idx}`} className="w-[240px] md:w-[360px] h-[320px] md:h-[480px] flex-shrink-0 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:scale-[1.03] shadow-2xl border-4 border-[#1a3c04]/10">
                                <img className="w-full h-full object-cover" src={item.fotos} alt={`Testimoni Lamonte ${idx}`} />
                            </div>
                        ))}

                        {/* Render Set Kedua (Duplikat untuk Loop) */}
                        {testimoni.map((item: any, idx: any) => (
                            <div key={`set-2-${idx}`} className="w-[240px] md:w-[360px] h-[320px] md:h-[480px] flex-shrink-0 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:scale-[1.03] shadow-2xl border-4 border-[#1a3c04]/10">
                                <img className="w-full h-full object-cover" src={item.fotos} alt={`Testimoni Lamonte ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
