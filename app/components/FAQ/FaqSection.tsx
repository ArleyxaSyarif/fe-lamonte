'use client';

import React from 'react';

const FAQS = [
    {
        id: 1,
        question: "Apa keunggulan utama gabung kemitraan Lamonte?",
        answer: "Kami bukan sekadar supplier baju anak. Lamonte adalah ekosistem bisnis. Setiap mitra mendapatkan akses ke bimbingan jualan, foto produk profesional siap pakai, dan harga modal langsung dari pabrik (first hand) sehingga margin keuntungan Anda tetap tebal."
    },
    {
        id: 2,
        question: "Bagaimana jika saya baru mulai dan belum punya pengalaman jualan?",
        answer: "Jangan khawatir! Kami menyediakan Paket Sampel Murmer untuk tes pasar. Selain itu, Anda akan dimasukkan ke grup bimbingan eksklusif di mana kami berbagi tips marketing, cara closing di WhatsApp, hingga cara rapihin feed Instagram."
    },
    {
        id: 3,
        question: "Apakah model bajunya selalu update mengikuti tren?",
        answer: "Tentu saja. Tim kreatif kami meriset tren fashion anak setiap minggu. Kami pastikan stok yang Anda terima adalah model-model kekinian yang paling dicari Bunda-Bunda di seluruh Indonesia."
    },
    {
        id: 4,
        question: "Bolehkan saya tukar model jika ada yang kurang laku di daerah saya?",
        answer: "Ya, khusus untuk Paket Stokis dan Paket Gudang, kami memberikan fleksibilitas untuk retur/tukar model yang kurang laku dengan model terbaru (syarat & ketentuan berlaku) agar perputaran modal Anda tetap sehat."
    }
];

export default function FaqSection() {
    return (
        <section className="bg-[#fdfae9] py-24 px-6 md:px-12 lg:px-24 font-body">
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

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="font-label text-sm tracking-[0.3em] uppercase text-[#967451] mb-4 block font-bold">
                        Bantuan & Informasi
                    </span>
                    <h2 className="font-headline text-4xl md:text-6xl text-[#7b5730] mb-8 italic font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#695c51] max-w-xl mx-auto leading-relaxed opacity-80">
                        Menjawab segala keraguan Anda untuk melangkah bersama Lamonte membangun bisnis keluarga yang berkah.
                    </p>
                    <div className="mt-10 flex justify-center">
                        <div className="h-[1px] w-24 bg-[#7b5730]/20"></div>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {FAQS.map((faq) => (
                        <div
                            key={faq.id}
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
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 p-12 bg-white/40 backdrop-blur rounded-[3rem] text-center border border-white/60 shadow-lg">
                    <h4 className="font-headline text-2xl text-[#7b5730] mb-4 font-bold italic">
                        Masih Punya Pertanyaan Lain?
                    </h4>
                    <p className="text-[#695c51] mb-8 opacity-80">
                        Tim kami siap membantu menjelaskan setiap detail kerjasama dengan ramah.
                    </p>
                    <a
                        href="https://wa.me/6281234567890"
                        className="inline-flex items-center gap-3 bg-[#7b5730] text-white px-10 py-4 rounded-full font-bold hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#7b5730]/20 transition-all active:scale-95"
                    >
                        Hubungi Konsultan Kami
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
