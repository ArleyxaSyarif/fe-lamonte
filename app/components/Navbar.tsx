"use client";

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

    return (
        <nav
            className={`fixed top-0 w-full z-[110] flex justify-center px-4 transition-all duration-700 ease-out ${scrolled ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex justify-between items-center w-full max-w-4xl bg-[#fcfaef]/90 backdrop-blur-md rounded-full px-6 py-3 border border-[#d3c4b7] shadow-sm">

                {/* Brand Logo - Kiri */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[#967451] text-2xl rotate-45">
                        spa
                    </span>
                    <span className="text-xl font-headline font-bold text-[#4c4033]">
                        Lamonte.
                    </span>
                </div>

                {/* Navigation Links - Tengah */}
                {/* Navigation Links - Tengah */}
                <div className="hidden lg:flex items-center gap-8">
                    <a href="#" className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium">
                        Beranda
                    </a>
                    <a href="#video" className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium">
                        Video
                    </a>
                    <a href="#partner" className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium">
                        SuperApp
                    </a>
                    <a href="#kolaborasi" className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium">
                        Kolaborasi
                    </a>
                    <a href="#paket" className="text-sm font-body text-[#7d7168] hover:text-[#7b5730] transition-colors font-medium">
                        Paket
                    </a>
                </div>


                {/* Profile Button - Kanan */}
                <div className="flex items-center">
                    <button className="bg-[#a3805b] text-white w-10 h-10 rounded-full font-bold flex items-center justify-center transition-transform hover:scale-105 shadow-md">
                        S
                    </button>
                </div>

            </div>
        </nav>
    );
}

