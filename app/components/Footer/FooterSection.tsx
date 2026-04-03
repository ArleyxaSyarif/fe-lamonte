"use client";

export default function FooterSection() {
    return (
        <footer className="relative w-full bg-[#fdfae9] pt-20 overflow-hidden font-body">




            <div className="w-full px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10">
                {/* Brand Column */}
                <div className="flex flex-col space-y-6">
                    <div className="text-xl font-headline text-[#7b5730] font-bold tracking-tight">
                        The Heritage Curator
                    </div>
                    <p className="text-[#695c51] text-sm leading-relaxed pr-4">
                        Kurasi destinasi bersejarah dan pengalaman budaya kelas atas di seluruh kepulauan Indonesia. Menghidupkan kembali warisan untuk penjelajah modern.
                    </p>
                    <div className="flex gap-4">
                        {["photo_camera", "social_leaderboard", "play_circle"].map((icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#fdfae9] flex items-center justify-center text-[#7b5730] hover:scale-110 transition-transform duration-300 shadow-sm"
                            >
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Menu</h4>
                    <ul className="flex flex-col space-y-4">
                        {["Jelajahi", "Destinasi", "Kisah", "Kontak"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[#695c51] text-sm hover:text-[#7b5730] transition-colors underline-offset-4 hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal & Info */}
                <div>
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Informasi</h4>
                    <ul className="flex flex-col space-y-4">
                        {["Privacy Policy", "Terms of Service", "Press Kit"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[#695c51] text-sm hover:text-[#7b5730] transition-colors underline-offset-4 hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Hubungi Kami</h4>
                    <ul className="flex flex-col space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm mt-0.5">location_on</span>
                            <span className="text-[#695c51] text-sm leading-snug">Jl. Heritage No. 1, Jakarta, Indonesia.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm">mail</span>
                            <span className="text-[#695c51] text-sm">hello@heritagecurator.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm">call</span>
                            <span className="text-[#695c51] text-sm">+62 21 1234 5678</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Area */}
            <div className="w-full px-12 py-8 max-w-7xl mx-auto border-t border-[#d3c4b7]/30 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#695c51] text-[10px] uppercase tracking-widest font-medium opacity-80">
                        © 2024 The Heritage Curator. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        {["Jakarta", "Bali", "Yogyakarta"].map((city) => (
                            <span key={city} className="text-[#695c51]/60 text-[10px] uppercase tracking-widest">
                                {city}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
