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
        answer: "Boleh. Banyak mitra yang menambah Lamonte sebagai lini premium. Kami bantu atur positioning supaya jualanmu tidak saling."
    },
    {
        id: 3,
        question: "Apakah ada garansi kalau saya nggak bisa jualan?",
        answer: "Kami tidak janji kaya mendadak. Kami siapkan sistem, materi, dan pendampingan. Tugasmu hadir di kelas, praktik, dan konsisten. Kalau kamu niat belajar dan mau ikut arahan, peluang berhasil jauh lebih besar."
    },
];

export default function FaqSection() {
    return (
        <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24 font-poppins overflow-hidden">

            {/* Dots Pattern Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#1a1c1a 2px, transparent 2px)`,
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
                    border-color: #ffaa00;
                    opacity: 0.15;
                    pointer-events: none;
                }
            `}</style>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal delay={0}>
                        <span className="font-poppins text-sm tracking-[0.3em] uppercase text-[#ffaa00] mb-4 block font-bold">
                            Bantuan & Informasi
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h2 className="font-poppins text-4xl md:text-5xl text-[#1a1c1a] mb-6 font-black tracking-tight">
                            Pertanyaan Calon Mitra
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <p className="text-[#1a1c1a]/60 max-w-xl mx-auto leading-relaxed">
                            Menjawab segala keraguan Anda untuk melangkah bersama Lamonte membangun bisnis keluarga yang berkah.
                        </p>
                    </ScrollReveal>

                    <div className="mt-10 flex justify-center">
                        <div className="h-[2px] w-24 bg-[#ffaa00]"></div>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {FAQS.map((faq, idx) => (
                        <ScrollReveal key={faq.id} delay={600 + idx * 100}>
                            <div
                                className="relative bg-white rounded-2xl overflow-hidden border border-[#1a1c1a]/5 hover:border-[#ffaa00]/20 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="corner-line top-4 left-4 border-t-2 border-l-2"></div>
                                <div className="corner-line bottom-4 right-4 border-b-2 border-r-2"></div>

                                <details className="group p-6 md:p-10">
                                    <summary className="flex items-center justify-between cursor-pointer list-none">
                                        <h3 className="font-poppins font-bold text-lg md:text-xl text-[#1a1c1a] pr-8 group-hover:translate-x-1 transition-transform duration-300">
                                            {faq.question}
                                        </h3>
                                        <div className="bg-[#ffaa00]/10 p-2 rounded-full shadow-inner group-hover:bg-[#ffaa00]/20">
                                            <span className="material-symbols-outlined expand-icon text-[#ffaa00] transition-transform duration-500 text-3xl">
                                                expand_more
                                            </span>
                                        </div>
                                    </summary>
                                    <div className="mt-8 pt-8 border-t border-[#1a1c1a]/5">
                                        <p className="text-[#1a1c1a]/60 leading-relaxed text-base md:text-lg">
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
                    <div className="mt-20 p-12 bg-white/60 backdrop-blur-md rounded-[3rem] text-center border border-[#1a1c1a]/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffaa00]/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
                        <h4 className="font-poppins text-2xl text-[#1a1c1a] mb-4 font-black">
                            Masih Punya Pertanyaan Lain?
                        </h4>
                        <p className="text-[#1a1c1a]/60 mb-8">
                            Tim kami siap membantu menjelaskan setiap detail kerjasama dengan ramah.
                        </p>
                        <button
                            onClick={() => sendWhatsApp({ customMessage: "Halo Tim Lamonte, saya tertarik ingin bertanya-tanya telebih dahulu." })}
                            className="inline-flex items-center justify-center gap-3 bg-[#ffaa00] text-[#232722] px-6 md:px-10 py-4 rounded-full font-bold text-xs md:text-sm hover:scale-[1.02] hover:shadow-xl hover:shadow-[#ffaa00]/20 transition-all active:scale-95 w-full sm:w-auto font-poppins uppercase tracking-widest"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <span>Hubungi Konsultan Kami</span>
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </div>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
