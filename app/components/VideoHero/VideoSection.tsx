import ScrollReveal from "../ScrollReveal";

export default function VideoSection() {
    return (
        <section id="video" className="bg-[#fefae6] text-[#1a3c04] antialiased overflow-x-hidden font-body relative">
            
            {/* Premium Cinematic Video Section */}
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-20 mb-12 relative z-10">
                <ScrollReveal delay={0}>
                    <div className="relative group w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden bg-[#bbf295] shadow-2xl">
                        {/* YouTube Player */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/i8ol6RhnD60?rel=0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                        ></iframe>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c04]/20 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="absolute bottom-10 left-10 text-white z-10 hidden md:block pointer-events-none">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-white/50"></div>
                                <span className="font-label text-sm tracking-[0.2em] uppercase font-bold text-[#f4e04d]">Directed by Lamonte Studio</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bento Grid Insights - Made to stretch horizontally ('manjang ke kanan') */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 pb-32">
                
                {/* Large Horizontal Card */}
                <div className="lg:col-span-9">
                    <ScrollReveal delay={200}>
                        <div className="bg-[#e4ffcd] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center min-h-[140px] md:min-h-[160px] relative overflow-hidden group border border-[#1a3c04]/5 shadow-premium w-full">
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
                                <div className="flex-shrink-0">
                                    <span className="text-[#675c00] font-bold tracking-widest uppercase text-[9px] mb-1 block">Documentary Archive</span>
                                    <h2 className="text-xl md:text-2xl font-black text-[#1a3c04] font-headline leading-tight tracking-tight whitespace-nowrap">
                                        Dipakai ratusan mitra untuk tembus <br className="hidden xl:block" /> omzet <span className="text-[#675c00] italic">puluhan juta</span>
                                    </h2>
                                </div>
                                
                                <div className="hidden md:block h-12 w-px bg-[#1a3c04]/10"></div>

                                <p className="text-[#1a3c04]/70 text-sm leading-relaxed font-medium max-w-sm">
                                    Ribuan mitra telah membuktikan keberhasilan sistem ekosistem Lamonte di seluruh Indonesia.
                                </p>

                                <div className="md:ml-auto">
                                    <a href="#paket" className="inline-block bg-[#1a3c04] text-[#f4e04d] px-6 py-3 rounded-full font-bold hover:translate-y-[-2px] hover:shadow-2xl transition-all active:scale-95 shadow-xl shadow-[#1a3c04]/20 text-[10px] uppercase tracking-widest whitespace-nowrap">Daftar Sekarang</a>
                                </div>
                            </div>
                            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Small Horizontal Stat Card */}
                <div className="lg:col-span-3">
                    <ScrollReveal delay={400}>
                        <div className="bg-[#f4e04d] rounded-[2rem] p-6 md:p-8 flex items-center justify-center gap-6 group cursor-default border border-[#1a3c04]/5 shadow-xl shadow-[#1a3c04]/5 min-h-[140px] md:min-h-[160px] w-full">
                            <div className="w-12 h-12 bg-[#1a3c04] rounded-full flex items-center justify-center text-[#f4e04d] shadow-lg flex-shrink-0">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-black text-[#1a3c04] font-headline leading-none mb-1">4.2M+ Views</h3>
                                <div className="flex flex-col">
                                    <span className="text-[#1a3c04] font-black text-[8px] uppercase tracking-[0.2em] opacity-40">Maret 2024</span>
                                    <span className="text-[#1a3c04]/70 font-bold text-[10px]">Release Date</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
