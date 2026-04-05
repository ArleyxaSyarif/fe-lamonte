"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fading out after 2.3s, then hide after 3s total
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2300);

        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] h-screen w-full flex flex-col items-center justify-center p-8 bg-white overflow-hidden font-poppins transition-opacity duration-700 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
            <style>{`
                @keyframes soft-pulse {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-soft-pulse {
                    animation: soft-pulse 4s ease-in-out infinite;
                }

                @keyframes progress-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-progress {
                    animation: progress-flow 3s ease-in-out infinite;
                }

                .corner-ornament {
                    width: 120px;
                    height: 120px;
                    opacity: 0.15;
                    pointer-events: none;
                }
            `}</style>


            {/* Center Content Container */}
            <div className="flex flex-col items-center text-center max-w-md z-10">
                {/* Logo/Icon Section */}
                <div className="relative mb-12 flex items-center justify-center">
                    {/* Outer Glow */}
                    <div className="absolute w-40 h-40 bg-[#ffaa00]/10 rounded-full blur-3xl animate-soft-pulse"></div>
                    {/* Stylized Cultural Icon */}
                    <div className="relative animate-soft-pulse text-[#ffaa00]">
                        <span className="material-symbols-outlined text-8xl md:text-9xl font-light">
                            energy_savings_leaf
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#ffaa00]/40 text-4xl">
                                star
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brand Typography */}
                <h1 className="font-poppins font-black text-2xl md:text-3xl text-[#1a1c1a] mb-6 tracking-tight">
                    Lamonte Distributor
                </h1>

                {/* Poetic Message */}
                <p className="font-poppins text-[#1a1c1a]/60 italic text-lg md:text-xl mb-12">
                    Menyusun Katalog...
                </p>

                {/* Elegant Progress Indicator */}
                <div className="w-48 md:w-64 h-px bg-[#ffaa00]/20 relative overflow-hidden">
                    <div className="absolute h-full w-2/3 bg-[#ffaa00] animate-progress rounded-full"></div>
                </div>

                {/* Secondary Label */}
                <span className="font-poppins font-bold text-[10px] uppercase tracking-[0.4em] text-[#ffaa00] mt-6 opacity-60">
                    Bersiap Jualan
                </span>
            </div>

            {/* Background Ambient Element */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,170,0,0.1),transparent_70%)]"></div>

            {/* Footer Identity (Discrete) */}
            <footer className="absolute bottom-8 w-full text-center px-4">
                <p className="font-poppins text-[11px] text-[#1a1c1a]/30 tracking-widest uppercase font-bold">
                    © 2024 Lamonte • Bisnis Baju Anak
                </p>
            </footer>
        </div>
    );
}
