"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "../ScrollReveal";

export default function PartnerSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);
    const isAutoScrolling = useRef(true);

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const updateDots = () => {
        const track = trackRef.current;
        const dots = Array.from(dotsRef.current?.children || []) as HTMLDivElement[];
        if (!track || dots.length === 0) return;

        const scrollLeft = track.scrollLeft;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32; // card + gap
        const visibleCount = getVisibleCount();
        const activeIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, idx) => {
            const groupIndex = Math.floor(activeIndex / visibleCount);
            if (idx === groupIndex % dots.length) {
                dot.classList.add('bg-[#7b5730]', 'w-6');
                dot.classList.remove('bg-[#7b5730]/20');
            } else {
                dot.classList.remove('bg-[#7b5730]', 'w-6');
                dot.classList.add('bg-[#7b5730]/20');
            }
        });
    };

    const scrollNext = () => {
        const track = trackRef.current;
        if (!track) return;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32;
        const visibleCount = getVisibleCount();

        if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: itemWidth * visibleCount, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        const track = trackRef.current;
        if (!track) return;
        const firstChild = track.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const itemWidth = firstChild.offsetWidth + 32;
        const visibleCount = getVisibleCount();
        track.scrollBy({ left: -itemWidth * visibleCount, behavior: 'smooth' });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => updateDots();
        const handleMouseEnter = () => { isAutoScrolling.current = false; };
        const handleMouseLeave = () => { isAutoScrolling.current = true; };

        track.addEventListener('scroll', handleScroll);
        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        const autoPlay = setInterval(() => {
            if (isAutoScrolling.current) {
                scrollNext();
            }
        }, 5000);

        // Initial setup
        setTimeout(updateDots, 100);

        return () => {
            track.removeEventListener('scroll', handleScroll);
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
            clearInterval(autoPlay);
        };
    }, []);

    return (
        <section id="partner" className="bg-[#fffceb] py-16 md:py-24 relative overflow-hidden font-body">
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .editorial-shadow {
                    box-shadow: 0 20px 40px -15px rgba(123, 87, 48, 0.08);
                }
            `}</style>

            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b5730]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <ScrollReveal delay={0}>
                        <span className="font-label text-xs md:text-sm uppercase tracking-[0.3em] text-[#967451] font-semibold mb-3 block">Ekosistem Lamonte</span>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <h2 className="font-headline text-3xl md:text-4xl text-[#967451]">Kenapa Bermitra Dengan Kami?</h2>
                    </ScrollReveal>
                    
                    <div className="w-16 h-0.5 bg-[#7b5730] mx-auto mt-6"></div>
                </div>

                {/* Carousel Container */}
                <ScrollReveal delay={400}>
                    <div className="relative group">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => { isAutoScrolling.current = false; scrollPrev(); }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 rounded-full border border-[#7b5730]/20 bg-[#fffceb] text-[#7b5730] hidden lg:flex items-center justify-center hover:bg-[#7b5730] hover:text-white transition-all duration-300"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={() => { isAutoScrolling.current = false; scrollNext(); }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 rounded-full border border-[#7b5730]/20 bg-[#fffceb] text-[#7b5730] hidden lg:flex items-center justify-center hover:bg-[#7b5730] hover:text-white transition-all duration-300"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>

                    {/* Scrollable Track */}
                    <div
                        ref={trackRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {/* Card 1 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7b5730]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#7b5730] text-[#7b5730] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">auto_awesome</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Model Selalu Update</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Desain baju anak yang selalu mengikuti tren pasar terkini, memastikan jualanmu tetap relevan dan diminati pembeli.
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">DESAIN TRENDY KEKINIAN</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7b5634]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#7b5634] text-[#7b5634] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">check_box_outline_blank</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Kualitas Bahan Premium</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Menggunakan bahan katun combed dan bahan premium lainnya yang lembut, menyerap keringat, dan sangat nyaman untuk kulit anak.
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">BAHAN BERSTANDAR TINGGI</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#695c51]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#695c51] text-[#695c51] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">inventory_2</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Sistem Stok Real-time</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Pantau ketersediaan stok kapan saja melalui dashboard mitra. Tanpa perlu tanya admin satu-satu, jualan jadi lebih cepat.
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">AKURASI STOK 100%</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7b5730]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#7b5730] text-[#7b5730] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">photo_library</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Materi Konten Siap Pakai</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Foto dan video promosi profesional sudah kami sediakan setiap hari. Tinggal posting ke sosial mediamu, beres!
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">KONTEN MARKETING PREMIUM</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7b5634]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#7b5634] text-[#7b5634] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">groups_2</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Bimbingan Bisnis Intensif</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Grup pendampingan khusus bersama mentor berpengalaman untuk membantu jualanmu terus bertumbuh dan omzet naik.
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">SUPORT MITRA NON-STOP</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.334rem)] snap-start">
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full editorial-shadow transition-all duration-300 hover:-translate-y-2 group/card">
                                <div className="p-6 md:p-8 flex-grow">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#695c51]/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#695c51] text-[#695c51] group-hover/card:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-3xl">payments</span>
                                    </div>
                                    <h3 className="font-headline text-xl md:text-2xl text-[#1c1c12] mb-4">Harga Pabrik Langsung</h3>
                                    <p className="text-[#695c51] text-sm md:text-base leading-relaxed">
                                        Kami tangan pertama. Kamu dapat harga modal terendah sehingga bisa dapet margin keuntungan paling tebal di pasaran.
                                    </p>
                                </div>
                                <div className="bg-[#ebe9d8] py-4 px-6 md:px-8 flex items-center space-x-3">
                                    <span className="material-symbols-outlined text-[#7b5730] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    <span className="font-label text-xs md:text-sm font-semibold tracking-wide text-[#7b5730]">MODAL MINIM UNTUNG MAX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div ref={dotsRef} className="flex justify-center space-x-3 mt-8">
                        <div className="dot w-6 h-2 rounded-full bg-[#7b5730] transition-all duration-300"></div>
                        <div className="dot w-2 h-2 rounded-full bg-[#7b5730]/20 transition-all duration-300"></div>
                    </div>
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
