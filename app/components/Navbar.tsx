"use client";

import { sendWhatsApp } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Jika scroll lebih dari 100px, tampilkan navbar
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-[110] flex justify-center px-4 transition-all duration-700 ease-out ${scrolled ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex justify-between items-center w-full max-w-4xl bg-[#fcfaef]/90 backdrop-blur-md rounded-full px-6 py-3 border border-[#d3c4b7] shadow-sm">

                {/* Brand Logo - Kiri */}
                <div 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[#967451] text-2xl rotate-45">
                        spa
                    </span>
                    <span className="text-xl font-headline font-bold text-[#4c4033]">
                        Lamonte.
                    </span>
                </div>

                {/* Navigation Links - Tengah */}
                <div className="hidden lg:flex items-center gap-8">
                    <a 
                        href="#" 
                        onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium"
                    >
                        Beranda
                    </a>
                    <a 
                        href="#video" 
                        onClick={(e) => handleSmoothScroll(e, "video")}
                        className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium"
                    >
                        Video
                    </a>
                    <a 
                        href="#partner" 
                        onClick={(e) => handleSmoothScroll(e, "partner")}
                        className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium"
                    >
                        SuperApp
                    </a>
                    <a 
                        href="#kolaborasi" 
                        onClick={(e) => handleSmoothScroll(e, "kolaborasi")}
                        className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium"
                    >
                        Kolaborasi
                    </a>
                    <a 
                        href="#paket" 
                        onClick={(e) => handleSmoothScroll(e, "paket")}
                        className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium"
                    >
                        Paket
                    </a>
                </div>


                {/* Profile Button - Kanan */}
                <div className="flex items-center">
                    <button
                        onClick={() => sendWhatsApp({ customMessage: "Halo, saya ingin bertanya tentang Lamonte" })}
                        className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 shadow-md group"
                    >
                        {/* Kamu bisa pakai Icon Material Symbols atau SVG Logo WA */}
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </button>
                </div>


            </div>
        </nav>
    );
}

