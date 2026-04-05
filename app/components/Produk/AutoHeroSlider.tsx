"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";

export default function AutoHeroSlider({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <ScrollReveal delay={200}>
            <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-[650px] rounded-[2rem] md:rounded-[40px] overflow-hidden bg-[#e2e3df]/30 mb-12 md:mb-16 shadow-2xl">
                {/* Images */}
                {images.map((img, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {/* Cinematic Blurred Background (Desktop only) */}
                        <img 
                            src={img} 
                            className="hidden md:block absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-110"
                            alt=""
                        />
                        {/* Foreground Image - object-cover on mobile (naturally portrait), object-contain on desktop */}
                        <img 
                            src={img} 
                            alt={`Slide ${idx}`} 
                            className="relative w-full h-full object-cover md:object-contain object-center z-10 drop-shadow-2xl"
                        />
                        {/* Gradient Overlay for controls visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/90 via-[#1a1c1a]/20 md:via-transparent to-transparent opacity-70 z-10 pointer-events-none"></div>
                    </div>
                ))}
                
                {/* Responsive Slider Controls */}
                <div className="absolute bottom-6 md:bottom-10 inset-x-0 px-6 md:px-12 flex items-center justify-between z-20">
                    <div className="flex gap-1.5 md:gap-3 flex-1 mr-4">
                        {images.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 flex-1 max-w-[40px] md:max-w-[56px] rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                            >
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <button 
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#232722] transition-all backdrop-blur-md bg-black/10 shadow-lg"
                        >
                            <span className="material-symbols-outlined text-xl md:text-2xl">chevron_left</span>
                        </button>
                        <button 
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#232722] transition-all backdrop-blur-md bg-black/10 shadow-lg"
                        >
                            <span className="material-symbols-outlined text-xl md:text-2xl">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}
