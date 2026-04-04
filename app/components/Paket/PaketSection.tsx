'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React, { useState } from 'react';
import ScrollReveal from "../ScrollReveal";

const PACKAGES = [
    {
        id: 1,
        title: "Paket Sampel Murmer",
        category: "TES PASAR PALING HEMAT",
        count: "25 pcs campur ukuran",
        price: "Rp 650.000",
        desc: "Untuk tes minat pasar tanpa takut stok numpuk.",
        img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop",
        features: ["Stok ringan, aman", "Mix model laris", "Enak dijual tetangga"]
    },
    {
        id: 2,
        title: "Paket Juragan Muda",
        category: "BEST SELLER PEMULA",
        count: "60 pcs campur model",
        price: "Rp 1.850.000",
        desc: "Langkah serius jadi pengusaha baju anak dari rumah.",
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        features: ["Bimbingan jualan", "Katalog foto eksklusif", "Margin keuntungan tebal"]
    },
    {
        id: 3,
        title: "Paket Stokis Wilayah",
        category: "SIAP JADI PUSAT GROSIR",
        count: "150 pcs varian lengkap",
        price: "Rp 4.500.000",
        desc: "Kuasai pasar di lingkup kecamatan atau kota Anda.",
        img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
        features: ["Hak retur model laku", "Support iklan sosial", "Prioritas stok terbaru"]
    },
    {
        id: 4,
        title: "Paket Gudang Lamonte",
        category: "PARTNER DISTRIBUSI",
        count: "400+ pcs (Grosir Besar)",
        price: "Rp 12.000.000",
        desc: "Investasi paling maksimal dengan harga modal terendah.",
        img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
        features: ["Harga pabrik langsung", "Sistem rekrut reseller", "Akses data buyer"]
    },
    {
        id: 5,
        title: "Paket Reseller Hemat",
        category: "MODAL MINIM UNTUNG NYATA",
        count: "40 pcs best seller",
        price: "Rp 1.200.000",
        desc: "Cocok untuk ibu rumah tangga yang ingin tambahan penghasilan.",
        img: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=800&auto=format&fit=crop",
        features: ["Grup bimbingan telegram", "Tanpa biaya pendaftaran", "Update stok real-time"]
    },
    {
        id: 6,
        title: "Paket Koleksi Idul Fitri",
        category: "EDISI SPESIAL MUSIMAN",
        count: "80 set Gamis & Koko",
        price: "Rp 3.500.000",
        desc: "Persiapkan stok terbaik untuk puncak penjualan tahunan.",
        img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
        features: ["Bahan premium katun", "Warna-warna pastel", "Packaging box eksklusif"]
    },
    {
        id: 7,
        title: "Paket Toko Mini",
        category: "INVESTASI RUKO/KIOS",
        count: "200 pcs lengkap hijab",
        price: "Rp 6.000.000",
        desc: "Sangat direkomendasikan untuk Anda yang punya ruang pajang.",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
        features: ["Display hanger gratis", "Banner promosi toko", "Manual book marketing"]
    },
    {
        id: 8,
        title: "Paket Grosir Partai",
        category: "HARGA SEMI-PABRIK",
        count: "800 pcs (Koli Besar)",
        price: "Rp 25.000.000",
        desc: "Untuk pemain besar yang menyuplai ke pasar-pasar tradisional.",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        features: ["Biaya antar ke ekspedisi", "Fokus quantity besar", "Tanpa sorting model"]
    },
    {
        id: 9,
        title: "Paket Dropship VIP",
        category: "TANPA STOK (JOIN VIP)",
        count: "Member Selamanya",
        price: "Rp 350.000",
        desc: "Cukup share foto, pengiriman kami yang kerjakan atas nama toko Anda.",
        img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
        features: ["Disediakan web khusus", "Tanpa biaya packing", "Komisi harian cair"]
    }
];

export default function PaketSection() {
    const [showAll, setShowAll] = useState(false);

    const visiblePackages = showAll ? PACKAGES : PACKAGES.slice(0, 4);

    return (
        <section id='paket' className="relative py-16 md:py-24 px-6 md:px-8 max-w-screen-2xl mx-auto bg-[#fffceb] overflow-hidden">
            
            {/* Transparent Grid Pattern - Brown Accent */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#7b5730 1.5px, transparent 1.5px), linear-gradient(90deg, #7b5730 1.5px, transparent 1.5px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <style>{`
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Header Section */}
            <div className="relative z-10 text-center mb-24 max-w-3xl mx-auto">
                <ScrollReveal delay={0}>
                    <span className="text-[#967451] font-label font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Pilihan Kemitraan
                    </span>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <h2 className="text-3xl md:text-6xl font-headline italic tracking-tight text-[#7b5730] mb-6">
                        Koleksi Paket Eksklusif
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <p className="text-lg text-[#695c51] font-body leading-relaxed opacity-80">
                        Kurasi paket jualan yang dirancang untuk mempercepat profit Anda. Pilih modal yang sesuai dengan target bisnis keluarga Anda.
                    </p>
                </ScrollReveal>
                <div className="w-24 h-px bg-[#967451] mx-auto mt-12 opacity-30"></div>
            </div>

            {/* Package Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
                {visiblePackages.map((pkg, index) => (
                    <ScrollReveal key={pkg.id} delay={600 + (index % 4) * 200}>
                        <div
                            className={`group flex flex-col h-full bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#d3c4b7]/20 hover:shadow-2xl hover:shadow-[#7b5730]/10 transition-all duration-500 hover:-translate-y-2 ${showAll && index >= 4 ? 'animate-fade-in' : ''}`}
                        >
                            <div className="relative h-[320px] md:h-[480px] overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={pkg.title}
                                    src={pkg.img}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[#7b5730] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                                        {pkg.category}
                                    </span>
                                </div>
                                <div className="absolute top-6 right-6">
                                    <div className="bg-[#7b5730] text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg">
                                        {pkg.price}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                                <h3 className="text-2xl font-headline italic text-[#7b5730] mb-2">{pkg.title}</h3>
                                <p className="text-[#695c51]/70 text-sm font-medium mb-4">{pkg.count}</p>

                                <p className="text-[#4f453b] text-sm font-body leading-relaxed mb-6 italic">
                                    "{pkg.desc}"
                                </p>

                                <div className="space-y-3 mb-8">
                                    {pkg.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-[#4f453b]">
                                            <span className="material-symbols-outlined text-[#967451] text-lg">check_circle</span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-[#d3c4b7]/20 flex justify-between items-center">
                                    <div>
                                        <span className="block text-[10px] text-[#695c51]/50 uppercase tracking-widest mb-1">Total Investasi</span>
                                        <span className="text-xl font-bold text-[#967451]">{pkg.price}</span>
                                    </div>
                                    <button onClick={() => sendWhatsApp({ title: pkg.title, price: pkg.price })} className="flex items-center gap-2 text-[#7b5730] font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                                        Lihat Detail <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Toggle Button Section */}
            <div className="relative z-10 mt-20 flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="group flex items-center gap-3 bg-transparent border-2 border-[#967451] text-[#7b5730] px-10 py-4 rounded-full font-label text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#967451] hover:text-white transition-all duration-300"
                >
                    <span>{showAll ? 'Tutup Paket' : 'Lihat Semua Paket'}</span>
                    <span className={`material-symbols-outlined transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
                        {showAll ? 'expand_less' : 'expand_more'}
                    </span>
                </button>
            </div>
        </section>
    );
}
