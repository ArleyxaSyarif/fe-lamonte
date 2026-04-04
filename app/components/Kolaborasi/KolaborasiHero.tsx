import ScrollReveal from "../ScrollReveal";

export default function KolaborasiHero() {
    return (
        <div className="bg-[#fdfae9] text-[#1c1c12] antialiased font-body">

            <main className="min-h-screen pt-20 md:pt-32 pb-24 px-6 md:px-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                {/* Left Section: Why Choose Us */}
                <div className="w-full lg:w-1/2 space-y-10 md:space-y-12">
                    <header>
                        <ScrollReveal delay={0}>
                            <h1 className="text-2xl md:text-5xl font-headline font-bold text-[#7b5730] leading-tight">
                                Kenapa Bisnis Baju Anak Wajib Kamu Seriusin Tahun Ini??
                            </h1>
                        </ScrollReveal>
                        <div className="h-1 w-24 bg-[#966f46] mt-6 rounded-full"></div>
                    </header>

                    <div className="space-y-8 md:space-y-10" id="kolaborasi">
                        <ScrollReveal delay={200}>
                            <div className="flex gap-4 md:gap-6 group text-left">
                                <span className="text-3xl md:text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">01</span>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#1c1c12] mb-2 font-body">Repeat <span className="text-[#7b5730]">Order Tinggi</span></h3>
                                    <p className="text-[#4f453b] leading-relaxed font-body">Anak tumbuh, bunda butuh beli lagi dan lagi. Repeat order tinggi kalau pelayanan kamu enak.
</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <div className="flex gap-4 md:gap-6 group text-left">
                                <span className="text-3xl md:text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">02</span>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#1c1c12] mb-2 font-body">Permintaan <span className="text-[#7b5730]">Tinggi</span></h3>
                                    <p className="text-[#4f453b] leading-relaxed font-body">Busana muslim anak permintaannya terus naik, terutama jelang Ramadan, lebaran, dan musim sekolah.</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <div className="flex gap-4 md:gap-6 group text-left">
                                <span className="text-3xl md:text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">03</span>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#1c1c12] mb-2 font-body">Kompetisi <span className="text-[#7b5730]">Rendah</span></h3>
                                    <p className="text-[#4f453b] leading-relaxed font-body">
Belum banyak brand yang serius jaga kualitas + kenyamanan + nilai syari’ sekaligus. Di sini Lamonte mengisi celah.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Urgent Highlight Box */}
                    <ScrollReveal delay={500}>
                        <div className="bg-[#ebe9d8]/60 border-l-4 border-[#7b5730] p-6 md:p-8 rounded-r-2xl flex items-start gap-4 md:gap-5 backdrop-blur-sm">
                            <div className="bg-[#7b5730] text-white p-2.5 md:p-3 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                            </div>
                            <div>
                                <h4 className="text-md md:text-lg font-bold text-[#1c1c12] font-body mb-1">Kenapa Harus Sekarang?</h4>
                                <p className="text-[#4f453b] text-sm font-body leading-relaxed">
                                    Jumlah distributor dan reseller aktif per wilayah dibatasi supaya tidak terjadi perang harga. Semakin cepat ambil slot, semakin mudah kamu kuasai pasar di kotamu.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Section: Reservation Guide Card */}
                <div className="w-full lg:w-1/2">
                    <ScrollReveal delay={600}>
                        <div className="bg-[#313126] text-white p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <img className="w-full h-full object-cover grayscale" alt="Pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKzWSt3XQYZkObtzmM786dM33j-eO-mPSnj9VvkcB7s1cZfAcWplOUfjN8KlxjGmrKZRjoRiFzNF38dZSVVBdox6_w3uAxwCKhBukV1Ej3891CudChwpzyIlRafpTmJfPyAdqCAnXYSuQkqt_a0GnBgqzdjlxw4WyWhRIWbtUCDFIK_c-71eILRM3cnAxxxKuh5whV_uJEUxnzt9HmCCh781fAflcCdvGsf_yQNXVvq2TT_EcSiEG7gjnA1_ZD-01lZHJnFt5P44" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-10 md:mb-12 relative z-10 text-[#ffdcbc]">Panduan Reservasi dalam 3 Langkah</h2>

                            <div className="space-y-8 md:space-y-12 relative z-10">
                                <div className="flex gap-5 md:gap-8 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-lg md:text-xl font-headline">1</div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 font-body text-white">Pilih Paket Sesuai Modal</h4>
                                        <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Dari tanpa stok sampai paket distributor provinsi. Semua sudah termasuk bimbingan dan akses ekosistem.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 md:gap-8 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-lg md:text-xl font-headline">2</div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 font-body text-white">Ikuti Onboarding & Setting Sistem</h4>
                                        <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Kami pandu lewat video dan grup WA. Mulai dari instal aplikasi sampai katalog siap jualan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 md:gap-8 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-lg md:text-xl font-headline">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 font-body text-white">Kamu Jualan, Tim Backup</h4>
                                        <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Kamu fokus konten dan layanin pembeli. Tim Lamonte bantu stok, materi marketing, dan upgrade skill.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 md:mt-16 relative z-10">
                                <a href="#paket" className="w-full bg-[#966f46] hover:bg-[#7b5730] py-4 md:py-5 rounded-full text-white font-bold text-md md:text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg group">
                                    Lanjut Pilih Paket Kemitraan

                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                                </a>
                                <p className="text-center text-[#e6e3d2]/50 text-xs mt-6 font-body uppercase tracking-widest">Aman • Terpercaya • Eksklusif</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </div>
    );
}
