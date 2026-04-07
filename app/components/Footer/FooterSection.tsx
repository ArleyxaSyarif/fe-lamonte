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
        <footer className="relative w-full bg-[#f8f8f8] pt-16 md:pt-24 pb-8 overflow-hidden font-body border-t border-[#1a1c1a]/5 px-8">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffaa00]/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a1c1a]/5 rounded-full -ml-40 -mb-40 blur-3xl pointer-events-none opacity-30" />

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto relative z-10 text-left px-0">
                {/* Brand Column */}
                <div className="flex flex-col space-y-8">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-12 h-12 bg-[#232722] rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-lg shadow-[#232722]/20">
                            <span className="material-symbols-outlined text-[#ffaa00] text-2xl">spa</span>
                        </div>
                        <span className="text-3xl font-headline font-black text-[#1a1c1a] tracking-tighter">
                            Lamonte.
                        </span>
                    </div>
                    <p className="text-[#1a1c1a]/60 text-base leading-relaxed pr-6 font-medium italic">
                        "Pusat grosir baju anak terlengkap di Indonesia. Kami membantu ribuan mitra tumbuh melalui produk berkualitas dan bimbingan eksklusif."
                    </p>
                    <div className="flex gap-4">
                        {["photo_camera", "social_leaderboard", "play_circle"].map((icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-[#1a1c1a]/5 border border-[#1a1c1a]/10 flex items-center justify-center text-[#1a1c1a] hover:bg-[#ffaa00] hover:text-[#232722] hover:border-[#ffaa00] transition-all duration-300 shadow-sm"
                            >
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="font-headline text-[#1a1c1a] font-black mb-8 text-xs uppercase tracking-[0.3em]">Menu Cepat</h4>
                    <ul className="flex flex-col space-y-4">
                        {[
                            { name: "Beranda", id: "top" },
                            { name: "Strategi Bisnis", id: "video" },
                            { name: "Kemitraan", id: "kolaborasi" },
                            { name: "Pilihan Paket", id: "paket" },
                        ].map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.id === "top" ? "#" : `#${item.id}`}
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className="text-[#1a1c1a]/50 text-sm font-bold hover:text-[#1a1c1a] transition-colors flex items-center gap-3 group"
                                >
                                    <span className="w-2 h-[2px] bg-[#ffaa00] group-hover:w-4 transition-all" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal & Info */}
                <div>
                    <h4 className="font-headline text-[#1a1c1a] font-black mb-8 text-xs uppercase tracking-[0.3em]">Eksositem</h4>
                    <ul className="flex flex-col space-y-4">
                        {["Syarat & Ketentuan", "Kebijakan Privasi", "Grup Bimbingan", "Katalog Gambar"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[#1a1c1a]/50 text-sm font-bold hover:text-[#1a1c1a] transition-colors flex items-center gap-3 group">
                                    <span className="w-2 h-[2px] bg-[#ffaa00] group-hover:w-4 transition-all" />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-headline text-[#1a1c1a] font-black mb-8 text-xs uppercase tracking-[0.3em]">Hubungi Kami</h4>
                    <ul className="flex flex-col space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 border border-[#ffaa00]/20">
                                <span className="material-symbols-outlined text-[#ffaa00] text-sm">location_on</span>
                            </div>
                            <span className="text-[#1a1c1a]/60 text-sm font-medium leading-snug">Gudang Lamonte, Kawasan Industri Jababeka, Bekasi.</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 border border-[#ffaa00]/20">
                                <span className="material-symbols-outlined text-[#ffaa00] text-sm">mail</span>
                            </div>
                            <span className="text-[#1a1c1a]/60 text-sm font-medium">cs@lamontestore.com</span>
                        </li>
                        <li className="flex items-center gap-4 cursor-pointer group" onClick={() => sendWhatsApp({})}>
                            <div className="w-9 h-9 rounded-xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 border border-[#ffaa00]/20 group-hover:bg-[#ffaa00] group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">call</span>
                            </div>
                            <span className="text-[#1a1c1a]/60 text-sm font-medium group-hover:text-[#1a1c1a] transition-colors">+62 812-3456-7890</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Area */}
            <div className="w-full mt-16 md:mt-24 pt-10 border-t border-[#1a1c1a]/5 max-w-screen-2xl mx-auto relative z-10 px-0">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[#1a1c1a]/30 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black">
                        © 2024 Lamonte Distribution. Premium Kids Fashion.
                    </p>
                    <div className="flex gap-6 md:gap-12 opacity-30">
                        {["Jakarta", "Bekasi", "Bandung", "Surabaya"].map((city) => (
                            <span key={city} className="text-[#1a1c1a] text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                                {city}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>

    );
}
