import { getTestimonis } from '@/lib/api';
import React from 'react';
import ScrollReveal from "../ScrollReveal";

export default async function TestimoniSection() {
    const testimoni = await getTestimonis();
    return (
        <section className="relative bg-white py-16 md:py-24 overflow-hidden font-poppins">

            {/* Dots Pattern Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#1a1c1a 2px, transparent 2px)`,
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
                    <span className="font-poppins text-sm tracking-[0.3em] uppercase text-[#ffaa00] mb-4 block font-bold">
                        Bukti Nyata Bukan Sekadar Janji
                    </span>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <h2 className="font-poppins text-4xl md:text-5xl text-[#1a1c1a] leading-tight mb-6 md:mb-8 font-black">
                        Testimoni Mitra
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="max-w-2xl mx-auto text-[#1a1c1a]/60 text-lg font-light leading-relaxed">
                        Beberapa dokumentasi mitra yang sudah jalan. Ada yang mulai dari nol, ada yang sebelumnya mentok. Mereka naik omzet setelah pakai sistem yang sama.
                    </p>
                </ScrollReveal>
            </div>

            {/* Infinite Photo Carousel */}
            <ScrollReveal delay={600}>
                <div className="relative z-10 py-10">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-infinite-scroll gap-8 px-4">
                        {/* Render Set Pertama */}
                        {testimoni.map((item: any, idx: any) => (
                            <div key={`set-1-${idx}`} className="w-[240px] md:w-[360px] h-[320px] md:h-[480px] flex-shrink-0 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:scale-[1.03] shadow-2xl border-4 border-[#ffaa00]/10 hover:border-[#ffaa00]/30">
                                <img className="w-full h-full object-cover" src={item.fotos} alt={`Testimoni Lamonte ${idx}`} />
                            </div>
                        ))}

                        {/* Render Set Kedua (Duplikat untuk Loop) */}
                        {testimoni.map((item: any, idx: any) => (
                            <div key={`set-2-${idx}`} className="w-[240px] md:w-[360px] h-[320px] md:h-[480px] flex-shrink-0 rounded-[2rem] overflow-hidden transition-transform duration-500 hover:scale-[1.03] shadow-2xl border-4 border-[#ffaa00]/10 hover:border-[#ffaa00]/30">
                                <img className="w-full h-full object-cover" src={item.fotos} alt={`Testimoni Lamonte ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
