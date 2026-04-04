"use client";

import { sendWhatsApp } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
            <nav
                className={`fixed top-0 w-full z-[110] hidden md:flex justify-center px-4 transition-all duration-700 ease-out ${scrolled ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
            >
                <div className="flex items-center w-full max-w-5xl bg-white/80 backdrop-blur-md px-6 py-2 border border-[#1a3c04]/10 shadow-lg rounded-full">
                    {/* Logo */}
                    <div onClick={handleHomeClick} className="flex items-center gap-2 cursor-pointer shrink-0">
                        <span className="material-symbols-outlined text-[#1a3c04] text-2xl rotate-45">spa</span>
                        <span className="text-xl font-headline font-bold text-[#1a3c04]">Lamonte.</span>
                    </div>

                    {/* Links - Tengah */}
                    <div className="flex-grow flex items-center justify-center gap-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={link.action || ((e) => handleSmoothScroll(e, link.id))}
                                className="text-[10px] font-body text-[#1a3c04]/70 hover:text-[#1a3c04] transition-colors font-bold uppercase tracking-[0.2em]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp Button - Kanan */}
                    <div className="shrink-0">
                        <button
                            onClick={() => sendWhatsApp({})}
                            className="w-10 h-10 bg-[#1a3c04] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md group"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar (Bottom) */}
            <nav className={`fixed bottom-0 left-0 w-full z-[110] md:hidden transition-all duration-500 transform ${scrolled ? "translate-y-0" : "translate-y-full"}`}>
                <div className="bg-white/95 backdrop-blur-md border-t border-[#1a3c04]/10 px-2 py-3 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={link.action || ((e) => handleSmoothScroll(e, link.id))}
                            className="flex flex-col items-center gap-1 min-w-[64px]"
                        >
                            <span className="material-symbols-outlined text-[#1a3c04] text-2xl">
                                {link.icon}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-tighter text-[#1a3c04]/70">
                                {link.label}
                            </span>
                        </a>
                    ))}
                    {/* WhatsApp Quick Access in Bottom Bar */}
                    <button
                        onClick={() => sendWhatsApp({})}
                        className="bg-[#1a3c04] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </button>
                </div>
                {/* Safe area for iPhone home bars */}
                <div className="h-[env(safe-area-inset-bottom)] bg-white"></div>
            </nav>
        </>
    );
}

