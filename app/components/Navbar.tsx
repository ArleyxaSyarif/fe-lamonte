"use client";

import { sendWhatsApp } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (window.innerWidth < 768 ? 0 : 80),
                behavior: "smooth",
            });
        }
    };

    const handleHomeClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { id: "home", label: "Home", icon: "home", href: "#", action: handleHomeClick },
        { id: "video", label: "Video", icon: "play_circle", href: "#video" },
        { id: "partner", label: "SuperApp", icon: "apps", href: "#partner" },
        { id: "kolaborasi", label: "Bisnis", icon: "handshake", href: "#kolaborasi" },
        { id: "paket", label: "Paket", icon: "package", href: "#paket" },
    ];

    return (
        <>
            {/* Desktop Navbar (Top) */}
             <nav className="fixed top-0 left-0 w-full z-[110] hidden md:flex justify-center bg-white/90 backdrop-blur-md border-b border-[#1a1c1a]/5 shadow-sm transition-all duration-300 py-3 px-8">
                 <div className="flex items-center w-full max-w-screen-2xl mx-auto">
                    {/* Logo */}
                    <div onClick={handleHomeClick} className="flex items-center gap-3 md:gap-4 cursor-pointer shrink-0">
                        <img src="/logo/lamonte.png" alt="Lamonte" className="h-8 md:h-10 object-contain" />
                        <div className="flex flex-col items-start gap-1">
                            <span className="font-poppins font-black text-[#1a1c1a] text-[12px] md:text-[14px] uppercase tracking-widest leading-none">Distributor</span>
                            <span className="bg-[#ffaa00] text-[#232722] text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-md leading-none">Official Access</span>
                        </div>
                    </div>

                    {/* Links - Tengah */}
                    <div className="flex-grow flex items-center justify-center gap-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={link.action || ((e) => handleSmoothScroll(e, link.id))}
                                className="text-[10px] font-poppins text-[#1a1c1a]/60 hover:text-[#1a1c1a] transition-colors font-bold uppercase tracking-[0.2em]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                
                </div>
            </nav>

            {/* Mobile Navbar (Bottom) */}
            <nav className="fixed bottom-0 left-0 w-full z-[110] md:hidden">
                <div className="bg-white/95 backdrop-blur-md border-t border-[#1a1c1a]/5 px-2 py-3 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={link.action || ((e) => handleSmoothScroll(e, link.id))}
                            className="flex flex-col items-center gap-1 min-w-[64px]"
                        >
                            <span className="material-symbols-outlined text-[#1a1c1a] text-2xl">
                                {link.icon}
                            </span>
                            <span className="text-[9px] font-poppins font-bold uppercase tracking-tighter text-[#1a1c1a]/60">
                                {link.label}
                            </span>
                        </a>
                    ))}
                 
                </div>
                {/* Safe area for iPhone home bars */}
                <div className="h-[env(safe-area-inset-bottom)] bg-white"></div>
            </nav>
        </>
    );
}
