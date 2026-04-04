import ScrollReveal from "../ScrollReveal";

export default function KolaborasiHero() {
    return (
        <section className="relative bg-white text-[#1a3c04] overflow-hidden py-24 md:py-32 antialiased">

            {/* Background Decorative Elements */}
            <div className="absolute top-20 -right-20 w-96 h-96 bg-[#f4e04d]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 -left-20 w-80 h-80 bg-[#1a3c04]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none" />
            
            {/* Transparent Grid Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(#1a3c04 1px, transparent 1px), linear-gradient(90deg, #1a3c04 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">

                {/* Left Section: Why Choose Us */}
                <div className="w-full lg:w-7/12 space-y-12">
                    <header className="space-y-6">
                        <ScrollReveal delay={0}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#1a3c04]/5 rounded-xl border border-[#1a3c04]/10 shadow-sm backdrop-blur-md">
                                <span className="material-symbols-outlined text-[#1a3c04] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                                <span className="text-[10px] font-bold text-[#1a3c04] uppercase tracking-[0.25em]">Market Analysis 2024</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <h1 className="text-2xl md:text-6xl font-headline font-black text-[#1a3c04] leading-[1.1] tracking-tighter">
                                Kenapa Bisnis Baju Anak Wajib <span className="italic">Kamu Seriusin</span> Tahun Ini??
                            </h1>
                        </ScrollReveal>
                        <div className="h-[3px] w-24 bg-[#f4e04d] rounded-full"></div>
                    </header>

                    <div className="grid gap-10 md:gap-12" id="kolaborasi">
                        {[
                            { step: "01", title: "Repeat Order Tinggi", desc: "Anak tumbuh dengan cepat, Bunda butuh beli lagi dan lagi. Repeat order sangat tinggi terutama dengan pelayanan yang personal." },
                            { step: "02", title: "Permintaan Stabil", desc: "Busana anak bukan sekadar tren. Permintaan akan terus naik, apalagi jelang musim libur, sekolah, dan hari besar." },
                            { step: "03", title: "Kompetisi Terukur", desc: "Belum banyak brand yang fokus pada kualitas premium + syar'i sekaligus. Lamonte mengisi celah pasar yang sangat besar ini." }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={300 + idx * 150}>
                                <div className="flex gap-6 md:gap-10 group items-start group">
                                    <span className="text-5xl md:text-7xl font-headline font-black text-[#1a3c04]/10 group-hover:text-[#f4e04d] transition-all duration-500 transform group-hover:scale-110 leading-none select-none">
                                        {item.step}
                                    </span>
                                    <div className="pt-2 md:pt-4">
                                        <h3 className="text-xl md:text-2xl font-black text-[#1a3c04] mb-3 font-body tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#1a3c04]/70 leading-relaxed font-body text-base md:text-lg max-w-xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Urgent Highlight Box */}
                    <ScrollReveal delay={800}>
                        <div className="bg-white border-4 border-[#1a3c04]/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-start gap-6 md:gap-8 shadow-2xl shadow-[#1a3c04]/5 relative overflow-hidden group hover:border-[#1a3c04]/20 transition-all duration-500">
                            <div className="bg-[#1a3c04] text-white p-4 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#1a3c04]/20 transform group-hover:rotate-12 transition-transform duration-500">
                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                            </div>
                            <div className="relative z-10 flex-1">
                                <h4 className="text-xl md:text-2xl font-black text-[#1a3c04] font-body mb-2 tracking-tight">Eksklusivitas Wilayah Terbatas</h4>
                                <p className="text-[#1a3c04]/70 text-base md:text-lg font-body leading-relaxed">
                                    Jumlah distributoraktif per wilayah dibatasi untuk menghindari perang harga. Semakin cepat ambil slot, semakin mudah kamu kuasai pasar di kotamu.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Section: Reservation Guide Card */}
                <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                    <ScrollReveal delay={900}>
                        <div className="bg-[#1a3c04] text-[#fefae6] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group border-4 border-white/5">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#f4e04d]/5 rounded-full -mr-40 -mt-40 blur-3xl" />

                            <h2 className="text-3xl md:text-4xl font-headline font-black mb-12 md:mb-16 relative z-10 text-[#f4e04d] leading-tight tracking-tight">
                                Panduan <span className="underline decoration-[#f4e04d]/30 underline-offset-8">Reservasi</span>
                            </h2>

                            <div className="space-y-12 md:space-y-16 relative z-10">
                                {[
                                    { step: 1, title: "Pilih Paket Kemitraan", desc: "Dari paket pemula hingga distributor provinsi. Semua termasuk bimbingan & akses ekosistem digital." },
                                    { step: 2, title: "Onboarding & Sistem", desc: "Akses WA Group & Video Onboarding. Mulai setting aplikasi, stok, hingga katalog siap jualan." },
                                    { step: 3, title: "Jualan & Backup Tim", desc: "Fokus bikin konten & layanin pembeli. Tim Lamonte backup stok, marketing, & support harian." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6 md:gap-8 items-start group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl border-2 border-[#f4e04d]/30 text-[#f4e04d] group-hover:bg-[#f4e04d] group-hover:text-[#1a3c04] flex items-center justify-center font-black text-xl md:text-2xl font-headline transition-all duration-500 shadow-lg shadow-black/10">
                                            {step.step}
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-xl md:text-2xl font-black mb-2 md:mb-3 font-body text-[#fefae6] tracking-tight group-hover:text-[#f4e04d] transition-colors">{step.title}</h4>
                                            <p className="text-[#fefae6]/60 font-body leading-relaxed text-sm md:text-lg transition-colors group-hover:text-[#fefae6]/90">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 md:mt-20 relative z-10">
                                <a href="#paket" className="w-full bg-[#f4e04d] py-5 md:py-6 px-6 rounded-2xl text-[#1a3c04] font-black text-base md:text-xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-black/40 group text-center">
                                    <span>Lanjut Pilih Paket Kemitraan</span>
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-3 text-2xl shrink-0">arrow_forward</span>
                                </a>
                                <p className="text-center text-[#fefae6]/20 text-[10px] mt-8 font-body uppercase tracking-[0.4em] font-black">Aman • Terpercaya • Eksklusif</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
