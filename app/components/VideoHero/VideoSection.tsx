export default function VideoSection() {
    return (
        <section className="bg-[#fefae6] min-h-screen pt-12 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">



                {/* Single Video Section */}
                <div id="video" className="flex flex-col gap-12">

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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        <div className="lg:col-span-7 whitespace-pre-wrap">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1a3c04] border border-[#1a3c04]/20 text-[10px] font-bold uppercase tracking-widest font-label shadow-sm">
                                    <span className="material-symbols-outlined text-xs leading-none">videocam</span>
                                    Documentary
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a3c04]/70 font-label opacity-70">
                                    4.2M Views
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#1a3c04]/20"></span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a3c04]/70 font-label opacity-70">
                                    Maret 2024
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-5xl font-headline italic tracking-tight text-[#1a3c04] leading-[1.1] mb-12">
                                "Dipakai ratusan mitra untuk tembus omzet belasan hingga <span className="text-[#f4e04d]">puluhan juta</span>"
                            </h2>

                            <div className="h-px w-full bg-gradient-to-r from-[#1a3c04]/20 to-transparent"></div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div className="p-6 md:p-8 bg-white/50 backdrop-blur-md rounded-2xl border border-[#1a3c04]/10 shadow-xl shadow-[#1a3c04]/5">
                                <h3 className="text-lg font-headline italic text-[#1a3c04] mb-4">Siap untuk mulai perjalanan Anda?</h3>
                                <p className="text-[#1a3c04]/70 text-sm leading-relaxed mb-6 font-body">
                                    Bergabunglah dengan ekosistem Lamonte dan nikmati sistem bisnis siap pakai yang telah teruji keberhasilannya.
                                </p>
                                <a
                                    href="#paket"
                                    className="flex w-full bg-[#1a3c04] text-white py-4 px-6 rounded-xl md:rounded-full font-label font-bold text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-widest shadow-lg shadow-[#1a3c04]/20 hover:bg-[#1a3c04]/90 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center items-center justify-center min-h-[56px]"
                                >
                                    Daftar Kerjasama Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
