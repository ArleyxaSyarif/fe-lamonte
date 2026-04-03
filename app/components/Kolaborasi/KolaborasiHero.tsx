export default function KolaborasiHero() {
    return (
        <div className="bg-[#fdfae9] text-[#1c1c12] antialiased font-body">

            <main className="min-h-screen pt-32 pb-24 px-8 md:px-24 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 items-start">

                {/* Left Section: Why Choose Us */}
                <div className="w-full md:w-1/2 space-y-12">
                    <header>
                        <h1 className="text-5xl md:text-4xl font-headline font-bold text-[#7b5730] leading-tight">
                            Kenapa Bisnis Baju Anak Wajib Kamu Seriusin Tahun Ini??
                        </h1>
                        <div className="h-1 w-24 bg-[#966f46] mt-6 rounded-full"></div>
                    </header>

                    <div className="space-y-10" id="kolaborasi">
                        <div className="flex gap-6 group">
                            <span className="text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">01</span>
                            <div>
                                <h3 className="text-xl font-bold text-[#1c1c12] mb-2 font-body">Kurasi <span className="text-[#7b5730]">Eksklusif</span></h3>
                                <p className="text-[#4f453b] leading-relaxed font-body">Setiap destinasi dipilih melalui riset mendalam untuk memastikan nilai historis dan estetika yang tak tertandingi.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <span className="text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">02</span>
                            <div>
                                <h3 className="text-xl font-bold text-[#1c1c12] mb-2 font-body">Pemandu <span className="text-[#7b5730]">Ahli Warisan</span></h3>
                                <p className="text-[#4f453b] leading-relaxed font-body">Didampingi oleh sejarawan dan antropolog lokal yang menghidupkan setiap cerita di balik situs bersejarah.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <span className="text-4xl font-headline font-bold text-[#7b5730] opacity-40 group-hover:opacity-100 transition-opacity">03</span>
                            <div>
                                <h3 className="text-xl font-bold text-[#1c1c12] mb-2 font-body">Dampak <span className="text-[#7b5730]">Lokal</span></h3>
                                <p className="text-[#4f453b] leading-relaxed font-body">Kontribusi langsung pada pelestarian budaya dan pemberdayaan ekonomi komunitas tradisional di seluruh kepulauan.</p>
                            </div>
                        </div>
                    </div>

                    {/* Urgent Highlight Box */}
                    <div className="bg-[#ebe9d8]/60 border-l-4 border-[#7b5730] p-8 rounded-r-2xl flex items-start gap-5 backdrop-blur-sm">
                        <div className="bg-[#7b5730] text-white p-3 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-[#1c1c12] font-body mb-1">Kenapa Harus Sekarang?</h4>
                            <p className="text-[#4f453b] text-sm font-body leading-relaxed">
                                Jumlah distributor dan reseller aktif per wilayah dibatasi supaya tidak terjadi perang harga. Semakin cepat ambil slot, semakin mudah kamu kuasai pasar di kotamu.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Reservation Guide Card */}
                <div className="w-full md:w-1/2">
                    <div className="bg-[#313126] text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <img className="w-full h-full object-cover grayscale" alt="Pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKzWSt3XQYZkObtzmM786dM33j-eO-mPSnj9VvkcB7s1cZfAcWplOUfjN8KlxjGmrKZRjoRiFzNF38dZSVVBdox6_w3uAxwCKhBukV1Ej3891CudChwpzyIlRafpTmJfPyAdqCAnXYSuQkqt_a0GnBgqzdjlxw4WyWhRIWbtUCDFIK_c-71eILRM3cnAxxxKuh5whV_uJEUxnzt9HmCCh781fAflcCdvGsf_yQNXVvq2TT_EcSiEG7gjnA1_ZD-01lZHJnFt5P44" />
                        </div>

                        <h2 className="text-3xl font-headline font-bold mb-12 relative z-10 text-[#ffdcbc]">Panduan Reservasi dalam 3 Langkah</h2>

                        <div className="space-y-12 relative z-10">
                            <div className="flex gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-xl font-headline">1</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 font-body text-white">Pilih Paket Sesuai Modal</h4>
                                    <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Dari tanpa stok sampai paket distributor provinsi. Semua sudah termasuk bimbingan dan akses ekosistem.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-xl font-headline">2</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 font-body text-white">Ikuti Onboarding & Setting Sistem</h4>
                                    <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Kami pandu lewat video dan grup WA. Mulai dari instal aplikasi sampai katalog siap jualan.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#ffdcbc] text-[#ffdcbc] flex items-center justify-center font-bold text-xl font-headline">3</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 font-body text-white">Kamu Jualan, Tim Backup</h4>
                                    <p className="text-[#e6e3d2]/80 font-body leading-relaxed">Kamu fokus konten dan layanin pembeli. Tim Lamonte bantu stok, materi marketing, dan upgrade skill.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 relative z-10">
                            <a href="#paket" className="w-full bg-[#966f46] hover:bg-[#7b5730] py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg group">
                                Lanjut Pilih Paket Kemitraan

                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                            </a>
                            <p className="text-center text-[#e6e3d2]/50 text-xs mt-6 font-body uppercase tracking-widest">Aman • Terpercaya • Eksklusif</p>
                        </div>
                    </div>


                </div>
            </main>


        </div>
    );
}
