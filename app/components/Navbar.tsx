"use client";

import { sendWhatsApp } from "@/lib/whatsapp";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Contact Selector Modal
    const pathname = usePathname();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        if (pathname !== "/") return; // Not on home page, use standard link behavior

        e.preventDefault();
        setIsOpen(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    const handleHomeClick = () => {
        setIsOpen(false);
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: "home", label: "Home", href: "/" },
        { id: "video", label: "Video", href: "/#video" },
        { id: "partner", label: "SuperApp", href: "/#partner" },
        { id: "kolaborasi", label: "Bisnis", href: "/#kolaborasi" },
        { id: "paket", label: "Paket", href: "/#paket" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[110] bg-white border-b border-[#1a1c1a]/5 shadow-sm transition-all duration-300 py-4 px-6 md:px-8 font-poppins">
                <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
                    {/* Logo */}
                    <Link href="/" onClick={handleHomeClick} className="flex items-center gap-2 md:gap-4 cursor-pointer shrink-0">
                        <img src="/logo/lamonte.png" alt="Lamonte" className="h-7 md:h-10 object-contain" />
                        <div className="flex flex-col items-start">
                            <span className="font-poppins font-black text-[#1a1c1a] text-[10px] md:text-[14px] uppercase tracking-widest leading-none">Distributor</span>
                            <span className="bg-[#ffaa00] text-[#232722] text-[8px] md:text-[11px] font-bold px-1.5 py-0.5 rounded-md leading-none mt-1">Official Access</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center justify-center gap-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e: any) => {
                                    if (link.href.startsWith("/#")) handleSmoothScroll(e, link.id);
                                    if (link.id === "home") handleHomeClick();
                                }}
                                className="text-[10px] font-poppins text-[#1a1c1a]/60 hover:text-[#1a1c1a] transition-colors font-bold uppercase tracking-[0.2em]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button / Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="hidden sm:flex items-center gap-2 bg-[#ffaa00] text-[#232722] px-4 py-2 rounded-lg font-poppins font-bold text-[10px] md:text-sm uppercase tracking-wider transition-all hover:opacity-90 active:scale-95"
                        >
                            <span>Hubungi Kami</span>
                            <span className="material-symbols-outlined text-sm md:text-lg">call</span>
                        </button>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-[#1a1c1a] transition-colors"
                        >
                            <span className="material-symbols-outlined text-2xl md:text-3xl">
                                {isOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 top-[60px] md:top-[80px] bg-white z-[120] transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div className="flex flex-col items-center justify-start h-full pt-12 gap-8 px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={(e: any) => {
                                    setIsOpen(false);
                                    if (link.href.startsWith("/#")) handleSmoothScroll(e, link.id);
                                    if (link.id === "home") handleHomeClick();
                                }}
                                className="text-lg font-poppins text-[#1a1c1a] font-black uppercase tracking-widest text-center w-full pb-4 border-b border-[#1a1c1a]/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsContactModalOpen(true);
                            }}
                            className="w-full mt-4 flex items-center justify-center gap-3 bg-[#ffaa00] text-[#232722] py-4 rounded-xl font-poppins font-black uppercase tracking-widest shadow-xl shadow-[#ffaa00]/10"
                        >
                            <span className="material-symbols-outlined">call</span>
                            Hubungi Customer Service
                        </button>
                    </div>
                </div>
            </nav>

            {/* Selection Modal (Hubungi Kami) */}
            {isContactModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-backdrop-in"
                        onClick={() => setIsContactModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] p-10 md:p-12 border border-white overflow-hidden animate-premium-in">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffaa00]/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

                        <div className="relative">
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center text-[#1a1c1a]/30 hover:text-[#1a1c1a] transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="mb-8 text-center">
                                {/* CS Icon Requested */}
                                <div className="w-16 h-16 bg-[#ffaa00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#ffaa00] shadow-sm">
                                    <span className="material-symbols-outlined text-4xl">support_agent</span>
                                </div>

                                <h2 className="font-poppins text-3xl font-black text-[#1a1c1a] tracking-tight leading-tight">Hubungi Tim <span className="text-[#ffaa00]">Lamonte</span></h2>
                                <p className="text-[#524433] mt-2 font-poppins text-xs opacity-70">Pilih opsi terbaik untuk mendapatkan respon cepat dari tim kami.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Option 1: Inquiry Page */}
                                <Link
                                    href="/kontak"
                                    onClick={() => setIsContactModalOpen(false)}
                                    className="group flex items-center justify-between bg-[#f7faf9] hover:bg-[#ffaa00] p-6 rounded-2xl transition-all duration-300 border border-[#d8c3ac]/20 hover:border-[#ffaa00] hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#ffaa00]/10"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-111 transition-transform">
                                            <span className="material-symbols-outlined text-[#ffaa00] text-2xl">description</span>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-poppins font-black text-[#1a1c1a] text-sm md:text-base group-hover:text-white transition-colors">Formulir Pertanyaan</h3>
                                            <p className="font-poppins text-[10px] md:text-xs text-[#524433] group-hover:text-white/80 transition-colors uppercase font-bold tracking-widest mt-0.5">Respons 24 Jam</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-[#d8c3ac] group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
                                </Link>

                                {/* Option 2: WhatsApp */}
                                <button
                                    onClick={() => {
                                        setIsContactModalOpen(false);
                                        sendWhatsApp({});
                                    }}
                                    className="group w-full flex items-center justify-between bg-white hover:bg-[#25D366] p-6 rounded-2xl transition-all duration-300 border border-[#d8c3ac]/20 hover:border-[#25D366] hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#25D366]/10 shadow-sm"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shadow-sm group-hover:bg-white group-hover:scale-110 transition-all">
                                            <span className="material-symbols-outlined text-[#25D366] text-2xl">chat</span>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-poppins font-black text-[#1a1c1a] text-sm md:text-base group-hover:text-white transition-colors">WhatsApp Direct</h3>
                                            <p className="font-poppins text-[10px] md:text-xs text-[#524433] group-hover:text-white/80 transition-colors uppercase font-bold tracking-widest mt-0.5">Balasan Instan</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-[#d8c3ac] group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
                                </button>
                            </div>

                            <p className="text-center mt-10 font-poppins text-[9px] uppercase font-bold tracking-[0.2em] text-[#d8c3ac]">Professional Partnership Network</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
