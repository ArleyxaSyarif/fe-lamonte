'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React from 'react';
import ScrollReveal from "../ScrollReveal";

const FAQS = [
    {
        id: 1,
        question: "Saya pemula banget, belum pernah jualan. Masih bisa ikut?",
        answer: "Sangat bisa. Ekosistem ini memang dibuat agar pemula punya sistem jualan rapi sejak awal. Ada panduan step-by-step, video, dan grup WA yang bantu kamu dari nol."
    },
    {
        id: 2,
        question: "Kalau saya sudah jualan brand lain, boleh gabung Lamonte juga?",
        answer: "Boleh. Banyak mitra yang menambah Lamonte sebagai lini premium. Kami bantu atur positioning supaya jualanmu tidak saling “tabrakan”."
    },
    {
        id: 3,
        question: "Apakah ada garansi kalau saya nggak bisa jualan?",
        answer: "Kami tidak janji kaya mendadak. Kami siapkan sistem, materi, dan pendampingan. Tugasmu hadir di kelas, praktik, dan konsisten. Kalau kamu niat belajar dan mau ikut arahan, peluang berhasil jauh lebih besar."
    },
   
];

export default function FaqSection() {
    return (
        <section className="relative bg-[#fdfae9] py-24 px-6 md:px-12 lg:px-24 font-body overflow-hidden">

            {/* Dots Pattern Background - Subtle Brown Accent */}
            <div
                className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#7b5730 2px, transparent 2px)`, // Ukuran titik sedikit diperbesar
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <style>{`
                details[open] summary .expand-icon {
                    transform: rotate(180deg);
                }
                summary::-webkit-details-marker {
                    display: none;
                }
                .corner-line {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    border-color: #967451;
                    opacity: 0.3;
                    pointer-events: none;
                }
            `}</style>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal delay={0}>
                        <span className="font-label text-sm tracking-[0.3em] uppercase text-[#967451] mb-4 block font-bold">
                            Bantuan & Informasi
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h2 className="font-headline text-2xl md:text-5xl text-[#7b5730] mb-8 italic font-bold">
                            Pertanyaan Calon Mitra
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <p className="text-[#695c51] max-w-xl mx-auto leading-relaxed opacity-80">
                            Menjawab segala keraguan Anda untuk melangkah bersama Lamonte membangun bisnis keluarga yang berkah.
                        </p>
                    </ScrollReveal>

                    <div className="mt-10 flex justify-center">
                        <div className="h-[1px] w-24 bg-[#7b5730]/20"></div>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {FAQS.map((faq, idx) => (
                        <ScrollReveal key={faq.id} delay={600 + idx * 100}>
                            <div
                                className="relative bg-[#fffceb] rounded-2xl overflow-hidden border border-[#7b5730]/5 hover:border-[#7b5730]/20 transition-all duration-300 shadow-sm"
                            >
                                {/* Decorative Corners */}
                                <div className="corner-line top-4 left-4 border-t-2 border-l-2"></div>
                                <div className="corner-line bottom-4 right-4 border-b-2 border-r-2"></div>

                                <details className="group p-6 md:p-10">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <h3 className="font-headline text-lg md:text-2xl text-[#7b5730] pr-8 group-hover:translate-x-1 transition-transform duration-300">
                                            {faq.question}
                                        </h3>
                                        <div className="bg-white/50 p-2 rounded-full shadow-inner">
                                            <span className="material-symbols-outlined expand-icon text-[#967451] transition-transform duration-500 text-3xl">
                                                expand_more
                                            </span>
                                        </div>
                                    </summary>
                                    <div className="mt-8 pt-8 border-t border-[#7b5730]/10">
                                        <p className="text-[#695c51] leading-relaxed text-base md:text-lg opacity-90">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={1000}>
                    <div className="mt-20 p-12 bg-white/40 backdrop-blur rounded-[3rem] text-center border border-white/60 shadow-lg">
                        <h4 className="font-headline text-2xl text-[#7b5730] mb-4 font-bold italic">
                            Masih Punya Pertanyaan Lain?
                        </h4>
                        <p className="text-[#695c51] mb-8 opacity-80">
                            Tim kami siap membantu menjelaskan setiap detail kerjasama dengan ramah.
                        </p>
                        <button
                            onClick={() => sendWhatsApp({ customMessage: "Halo Tim Lamonte, saya tertarik ingin bertanya-tanya telebih dahulu." })}
                            className="inline-flex items-center justify-center gap-3 bg-[#7b5730] text-white px-6 md:px-10 py-4 rounded-full font-bold text-xs md:text-base hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#7b5730]/20 transition-all active:scale-95 w-full sm:w-auto"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <span>HUBUNGI KONSULTAN KAMI</span>
                                <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
                            </div>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
