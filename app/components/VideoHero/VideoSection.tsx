export default function VideoSection() {
    return (
        <section className="bg-[#f5f1e8] min-h-screen pt-12 pb-24 px-6 md:px-12 lg:px-24">
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
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdfae9] text-[#7b5730] border border-[#d3c4b7]/50 text-[10px] font-bold uppercase tracking-widest font-label shadow-sm">
                                    <span className="material-symbols-outlined text-xs leading-none">videocam</span>
                                    Documentary
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#967451] font-label opacity-70">
                                    4.2M Views
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#d3c4b7]"></span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#967451] font-label opacity-70">
                                    Maret 2024
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-headline italic tracking-tight text-[#7b5730] leading-[1.1] mb-12">
                                "Dipakai ratusan mitra untuk tembus omzet belasan hingga puluhan juta"
                            </h1>

                            <div className="h-px w-full bg-gradient-to-r from-[#d3c4b7]/50 to-transparent"></div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div className="p-8 bg-white/50 backdrop-blur-md rounded-2xl border border-[#d3c4b7]/30 shadow-xl shadow-[#7b5730]/5">
                                <h3 className="text-lg font-headline italic text-[#7b5730] mb-4">Siap untuk mulai perjalanan Anda?</h3>
                                <p className="text-[#695c51] text-sm leading-relaxed mb-6 font-body">
                                    Bergabunglah dengan ekosistem Lamonte dan nikmati sistem bisnis siap pakai yang telah teruji keberhasilannya.
                                </p>
                                <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Lamonte" className="w-full bg-[#7b5730] text-[#fdfae9] py-4 px-6 rounded-full font-label font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#7b5730]/20 hover:bg-[#967451] transition-all transform hover:-translate-y-1 active:translate-y-0">
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
