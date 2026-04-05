import ScrollReveal from "../ScrollReveal";

export default function VideoSection() {
    return (
        <section id="video" className="bg-white text-[#1a1c1a] antialiased overflow-x-hidden font-poppins relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 pb-24">
                {/* Modern Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Cinematic Video Player Section (Left) */}
                    <div className="col-span-1 lg:col-span-8 group relative">
                        <ScrollReveal delay={0}>
                            <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] shadow-[40px_40px_80px_-40px_rgba(0,0,0,0.08)] aspect-video group-hover:shadow-[40px_40px_80px_-40px_rgba(255,170,0,0.15)] transition-shadow duration-700">
                                {/* YouTube Player */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/i8ol6RhnD60?rel=0"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full border-0 z-0"
                                ></iframe>
                                
                                {/* Gradient Overlays over the video to match template */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#232722]/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 opacity-80 group-hover:opacity-100"></div>
                                
                                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-end pointer-events-none z-20">
                                    <div className="text-white">
                                        <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 mb-1 font-bold">Directed by Lamonte Studio</p>
                                        <h3 className="font-poppins text-xl md:text-2xl font-black italic">Dokumenter Ekosistem Mitra</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1 h-8 bg-white rounded-full"></div>
                                        <div className="w-1 h-6 bg-white/40 rounded-full"></div>
                                        <div className="w-1 h-4 bg-white/40 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Caption bleed effect */}
                            <div className="mt-8 ml-4 md:ml-8 max-w-xl">
                                <p className="font-poppins text-lg md:text-xl text-[#1a1c1a]/60 leading-relaxed italic">
                                    "Ribuan mitra telah membuktikan keberhasilan sistem ekosistem Lamonte di seluruh Indonesia. Dipakai ratusan mitra untuk tembus omzet puluhan juta."
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-[#ffaa00]"></div>
                                    <span className="font-poppins text-[10px] md:text-sm font-bold text-[#ffaa00] uppercase tracking-[0.1em]">Documentary Archive</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    
                    {/* Statistics Section (Right) */}
                    <div className="col-span-1 lg:col-span-4 space-y-12 lg:pt-12">
                        <div className="space-y-10">
                            {/* Stat 1 */}
                            <ScrollReveal delay={200}>
                                <div className="border-l-4 border-[#ffaa00] pl-8">
                                    <h4 className="font-poppins text-4xl md:text-5xl font-black text-[#1a1c1a] mb-2 tracking-tighter">4.2M+</h4>
                                    <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#ffaa00] font-bold">Views Dokumenter</p>
                                    <p className="font-poppins text-sm text-[#1a1c1a]/60 mt-2 max-w-xs">Ditonton jutaan kali oleh calon pebisnis di berbagai platform digital.</p>
                                </div>
                            </ScrollReveal>
                            
                            {/* Stat 2 */}
                            <ScrollReveal delay={400}>
                                <div className="border-l-4 border-[#ffaa00]/60 pl-8">
                                    <h4 className="font-poppins text-4xl md:text-5xl font-black text-[#1a1c1a] mb-2 tracking-tighter">Ratusan</h4>
                                    <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#ffaa00] font-bold">Mitra Tembus Target</p>
                                    <p className="font-poppins text-sm text-[#1a1c1a]/60 mt-2 max-w-xs">Telah mencapai omzet puluhan juta rupiah dalam waktu singkat.</p>
                                </div>
                            </ScrollReveal>
                            
                            {/* Stat 3 */}
                            <ScrollReveal delay={600}>
                                <div className="border-l-4 border-[#ffaa00]/30 pl-8">
                                    <h4 className="font-poppins text-4xl md:text-5xl font-black text-[#1a1c1a] mb-2 tracking-tighter">Seluruh</h4>
                                    <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#ffaa00] font-bold">Indonesia</p>
                                    <p className="font-poppins text-sm text-[#1a1c1a]/60 mt-2 max-w-xs">Jangkauan distribusi dan mitra aktif di bawah binaan Lamonte.</p>
                                </div>
                            </ScrollReveal>
                        </div>
                        
                        {/* CTA */}
                        <ScrollReveal delay={800}>
                            <div className="pt-8">
                                <a href="#paket" className="w-full bg-[#ffaa00] text-[#232722] py-4 md:py-5 rounded-lg font-poppins font-black text-sm md:text-lg flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-[0.98] shadow-xl shadow-[#ffaa00]/20">
                                    Daftar Sekarang
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                                <p className="text-center mt-4 font-poppins text-[10px] uppercase tracking-[0.2em] text-[#1a1c1a]/40 font-bold">Akses Penawaran Harga Spesial</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
