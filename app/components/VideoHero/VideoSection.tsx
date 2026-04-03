export default function VideoSection() {
    return (
        <section className="bg-[#f5f1e8] min-h-screen pt-12 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">



                {/* Single Video Section */}
                <div className="flex flex-col gap-12">

                    {/* Video Player */}
                    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/i8ol6RhnD60?rel=0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full border-0"
                        ></iframe>
                    </div>

                    {/* Content Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#967451] bg-[#f2f4f4] px-3 py-1 rounded font-label">Documentary</span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#967451] font-label">4.2M Views</span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#967451] font-label">Oct 2023</span>
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight text-[#967451] mb-8 font-headline">
                                The Silent Architecture of Silence
                            </h1>
                            <p className="text-xl leading-relaxed text-[#967451] font-body max-w-3xl">
                                An intimate exploration of minimalist design and its psychological impact on urban dwellers. This visual essay tracks the evolution of quiet spaces in the world's most chaotic metropolises, questioning the future of solitude in a hyper-connected age.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-10 lg:pt-2">

                            {/* Metadata List */}
                            <div className="grid grid-cols-2 gap-y-8 border-t border-zinc-100 pt-10">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-black mb-2 font-label">Director</h4>
                                    <p className="text-base font-bold text-[#967451] font-body">Marcus Aurel</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-black  mb-2 font-label">Cinematography</h4>
                                    <p className="text-base font-bold text-[#967451] font-body">Sarah Jenkins</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-black  mb-2 font-label">Studio</h4>
                                    <p className="text-base font-bold text-[#967451] font-body">Vanguard Media</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-black mb-2 font-label">Location</h4>
                                    <p className="text-base font-bold text-[#967451] font-body">Copenhagen, DK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Footer */}
                <footer className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-body">
                        Standard Cinéaste License. All rights reserved. Content curated for editorial and professional gallery exhibition only.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[10px] font-black tracking-widest text-zinc-300 font-label">4K ULTRA HD</span>
                        <span className="text-[10px] font-black tracking-widest text-zinc-300 font-label">DOLBY ATMOS</span>
                        <span className="text-[10px] font-black tracking-widest text-zinc-300 font-label">CC</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}
