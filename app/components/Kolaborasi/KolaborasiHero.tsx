"use client";
import ScrollReveal from "../ScrollReveal";

export default function KolaborasiHero() {
    return (
        <section id="kolaborasi" className="relative font-poppins pt-24 pb-20 min-h-screen bg-[#fffbeb] text-[#1a1c1a] overflow-hidden">
            {/* Transparent Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #005911 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            ></div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
                {/* Hero Header Section */}
                <div className="mb-16 md:mb-20 text-center md:text-left max-w-4xl">
                    <ScrollReveal delay={0}>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#005911]/5 rounded-xl border border-[#005911]/10 shadow-sm backdrop-blur-md mb-6">
                            <span className="material-symbols-outlined text-[#005911] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                            <span className="text-[10px] font-poppins font-bold text-[#1a1c1a] uppercase tracking-[0.25em]">Market Analysis 2024</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1c1a] leading-tight tracking-tighter">
                            Kenapa Bisnis Baju Anak Wajib <span className="italic text-[#005911]">Kamu Seriusin</span> Tahun Ini??
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="mt-8 h-1 w-24 bg-[#005911] mx-auto md:mx-0 opacity-30 shadow-sm"></div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Side: Features */}
                    <div className="lg:col-span-7 space-y-12 md:space-y-16">
                        {[
                            { step: "01", title: "Repeat Order Tinggi", desc: "Anak tumbuh dengan cepat, Bunda butuh beli lagi dan lagi. Repeat order sangat tinggi terutama dengan pelayanan yang personal." },
                            { step: "02", title: "Permintaan Stabil", desc: "Busana anak bukan sekadar tren. Permintaan akan terus naik, apalagi jelang musim libur, sekolah, dan hari besar." },
                            { step: "03", title: "Kompetisi Terukur", desc: "Belum banyak brand yang fokus pada kualitas premium + syar'i sekaligus. Lamonte mengisi celah pasar yang sangat besar ini." }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={300 + idx * 150}>
                                <div className="group">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <span className="font-poppins text-5xl md:text-6xl font-black text-[#005911]/20 transition-colors group-hover:text-[#005911] leading-none shrink-0">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h3 className="font-poppins text-xl md:text-2xl font-black text-[#1a1c1a] mb-2 md:mb-3">{item.title}</h3>
                                            <p className="font-poppins text-[#1a1c1a]/70 text-base md:text-lg leading-relaxed max-w-xl">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}

                        {/* Exclusivity Banner */}
                        <ScrollReveal delay={800}>
                            <div className="mt-16 md:mt-20 p-6 md:p-8 bg-white rounded-xl border-l-4 border-[#005911] shadow-sm relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="font-poppins text-lg md:text-xl font-bold text-[#1a1c1a] mb-2 font-black">Eksklusivitas <span className="text-[#005911]">Wilayah Terbatas</span></h4>
                                    <p className="font-poppins text-[#1a1c1a]/80 leading-relaxed text-sm md:text-base">
                                        Jumlah distributor aktif per wilayah dibatasi untuk menghindari perang harga. Semakin cepat ambil slot, semakin mudah kamu kuasai pasar di kotamu.
                                    </p>
                                </div>
                                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl md:text-9xl text-[#005911]/10 rotate-12 group-hover:rotate-6 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            </div>
                        </ScrollReveal>

                        {/* Visual Accents */}
                        <ScrollReveal delay={900}>
                            <div className="mt-12 grid grid-cols-2 gap-4">
                                <div className="rounded-xl overflow-hidden aspect-square relative grayscale hover:grayscale-0 transition-all duration-700">
                                    <img className="w-full h-full object-cover" alt="Premium organic cotton children clothes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8Z2k8bubo046LC8zhvspCEDEfNxJHN69rFMQtxfRa89CEpPPRK-bVTDUmEy-kD0N9DnW3iRLfAzG7n_7Jr4TXuspMnYXq4L0EEDVJ-Bp8n0WNIj54wq3xLL5DqZIEtDqrCyzVFnDs511vsAZ9d3l9Qj9PcKOiiBcXwiGDutpB63YQ5zdk67jmoRCcVhSRKNWsCKi4OwAWn1KGVyUzb-y_DQ9vfq6Gf41Gs2TJ7kN3BB1Wa7pWWIWzCs2WOGN7veFv197iS-sxg0" />
                                </div>
                                <div className="rounded-xl overflow-hidden aspect-square relative grayscale hover:grayscale-0 transition-all duration-700">
                                    <img className="w-full h-full object-cover" alt="Soft aesthetic shot of child's room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaIvSe31c8-XUxgG59gIxKvoV8LZrvNZmlPES6sE2tRpX66-kJdnZ0ybhjEix3xzxM8weZZJkUP7XGmSSn2H5N875f8pXo0-cL-aS-4FCsJRnKuU7oDz1SlURzz4CRX9UaEOsK0DDmLmBJWJRRh66HBIN2L3WjiNYgOEiJ6tAECXEyhCtc47ARxtkyNcZXuZYFonPdx7w3MOCSQ0r_L9CCutN1gJhAq_b0i-UwTsokn2WqHx6sMCqWkOyJHpwaVB-z3DCI7rPl5Fg" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Reservation Guide Card */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <ScrollReveal delay={500}>
                            <div className="bg-[#005911] p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden backdrop-blur-md">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fffbeb] opacity-10 rounded-bl-full"></div>

                                <div className="flex items-center gap-4 mb-10 relative z-10">
                                    <span className="material-symbols-outlined text-[#fffbeb] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                                    <h2 className="font-poppins text-2xl md:text-3xl font-black text-[#fffbeb]">Panduan Reservasi</h2>
                                </div>

                                <div className="space-y-8 md:space-y-10 relative z-10">
                                    {[
                                        { step: 1, title: "Pilih Paket Kemitraan", desc: "Dari paket pemula hingga distributor provinsi. Semua termasuk bimbingan & akses ekosistem digital." },
                                        { step: 2, title: "Onboarding & Sistem", desc: "Akses WA Group & Video Onboarding. Mulai setting aplikasi, stok, hingga katalog siap jualan." },
                                        { step: 3, title: "Jualan & Backup Tim", desc: "Fokus bikin konten & layanin pembeli. Tim Lamonte backup stok, marketing, & support harian." }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-4 md:gap-5 group">
                                            <div className="font-poppins flex-shrink-0 w-8 h-8 rounded-full bg-[#fffbeb] flex items-center justify-center text-[#005911] font-black text-sm shadow-md transition-transform duration-300 group-hover:scale-110">
                                                {step.step}
                                            </div>
                                            <div>
                                                <h4 className="font-poppins text-base md:text-lg font-black text-[#fffbeb] mb-1">{step.title}</h4>
                                                <p className="font-poppins text-[#fffbeb]/80 text-sm md:text-base leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a href="#paket" className="font-poppins mt-12 w-full bg-[#fffbeb] text-[#1a1c1a] py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-[#fffbeb] transition-all flex items-center justify-center gap-3 active:scale-95 group shadow-xl relative z-10 text-center">
                                    <span>Lanjut Pilih Paket Kemitraan</span>
                                    <span className="material-symbols-outlined text-[#005911] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>

                                <p className="font-poppins mt-8 text-center text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#fffbeb]/60 uppercase relative z-10">
                                    AMAN • TERPERCAYA • EKSKLUSIF
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

