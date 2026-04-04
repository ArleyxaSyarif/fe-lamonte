"use client";

import { sendWhatsApp } from "@/lib/whatsapp";

export default function FooterSection() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const el = document.getElementById(id);
            if (el) {
                window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <footer className="relative w-full bg-[#fdfae9] pt-16 md:pt-20 overflow-hidden font-body">

            <div className="w-full px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10 text-left">
                {/* Brand Column */}
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="material-symbols-outlined text-[#967451] text-2xl rotate-45">
                            spa
                        </span>
                        <span className="text-xl font-headline font-bold text-[#4c4033]">
                            Lamonte.
                        </span>
                    </div>
                    <p className="text-[#695c51] text-sm leading-relaxed pr-4">
                        Pusat grosir baju anak terlengkap di Indonesia. Kami membantu ribuan mitra tumbuh bersama melalui produk berkualitas dan sistem bimbingan terintegrasi.
                    </p>
                    <div className="flex gap-4">
                        {["photo_camera", "social_leaderboard", "play_circle"].map((icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5730] hover:scale-110 transition-transform duration-300 shadow-sm"
                            >
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Menu Cepat</h4>
                    <ul className="flex flex-col space-y-4">
                        {[
                            { name: "Beranda", id: "top" },
                            { name: "Katalog Produk", id: "video" },
                            { name: "Kemitraan", id: "kolaborasi" },
                            { name: "Pilihan Paket", id: "paket" },
                        ].map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.id === "top" ? "#" : `#${item.id}`} 
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className="text-[#695c51] text-sm hover:text-[#7b5730] transition-colors underline-offset-4 hover:underline"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal & Info */}
                <div>
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Dukungan</h4>
                    <ul className="flex flex-col space-y-4">
                        {["Syarat & Ketentuan", "Kebijakan Privasi", "Grup Bimbingan", "Katalog Gambar"].map((item) => (
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
                    <h4 className="font-headline text-[#7b5730] font-bold mb-6 text-lg">Hubungi</h4>
                    <ul className="flex flex-col space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm mt-0.5">location_on</span>
                            <span className="text-[#695c51] text-sm leading-snug">Gudang Lamonte, Kawasan Industri Jababeka, Bekasi.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm">mail</span>
                            <span className="text-[#695c51] text-sm">cs@lamontestore.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#7b5730] text-sm">call</span>
                            <span className="text-[#695c51] text-sm">+62 812 3456 7890</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Area */}
            <div className="w-full px-6 md:px-12 py-8 max-w-7xl mx-auto border-t border-[#d3c4b7]/30 relative z-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#695c51] text-[10px] uppercase tracking-widest font-medium opacity-80">
                        © 2024 Lamonte Distribution. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 md:gap-8 overflow-hidden">
                        {["Jakarta", "Bekasi", "Bandung", "Surabaya"].map((city) => (
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
