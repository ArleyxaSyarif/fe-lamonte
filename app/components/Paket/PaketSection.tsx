'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React, { useState } from 'react';

const PACKAGES = [
    {
        id: 1,
        title: "Paket Sampel Murmer",
        category: "TES PASAR PALING HEMAT",
        count: "25 pcs campur ukuran",
        price: "Rp 650.000",
        desc: "Untuk tes minat pasar tanpa takut stok numpuk.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkKzWSt3XQYZkObtzmM786dM33j-eO-mPSnj9VvkcB7s1cZfAcWplOUfjN8KlxjGmrKZRjoRiFzNF38dZSVVBdox6_w3uAxwCKhBukV1Ej3891CudChwpzyIlRafpTmJfPyAdqCAnXYSuQkqt_a0GnBgqzdjlxw4WyWhRIWbtUCDFIK_c-71eILRM3cnAxxxKuh5whV_uJEUxnzt9HmCCh781fAflcCdvGsf_yQNXVvq2TT_EcSiEG7gjnA1_ZD-01lZHJnFt5P44",
        features: ["Stok ringan, aman", "Mix model laris", "Enak dijual tetangga"]
    },
    {
        id: 2,
        title: "Paket Juragan Muda",
        category: "BEST SELLER PEMULA",
        count: "60 pcs campur model",
        price: "Rp 1.850.000",
        desc: "Langkah serius jadi pengusaha baju anak dari rumah.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDevBlWGX4K9CLPSzjiO5y4BJTwJ4E0dn7Qt5Ko1aqOIan33bMWEsXzk3yX1AJ4mcLdxE9viivC9epRcf_fXkMSaK_z2wmfFzdD2-QYZjKcHm6kccwdsfZ6BV9DJJ3PREKsQ8b6TNQUisfRK__UWHEa71dDxY70E7cph8rwGhnpaYPZzbZu4tAj8M_Wtz7xw6HLzF1272YjaBJoHEcAKlrVdAwiQRE9kVcZblC4hW_hlh23IU9SS4HKzvBzghC4mM0XPjz_wABv8ao",
        features: ["Bimbingan jualan", "Katalog foto eksklusif", "Margin keuntungan tebal"]
    },
    {
        id: 3,
        title: "Paket Stokis Wilayah",
        category: "SIAP JADI PUSAT GROSIR",
        count: "150 pcs varian lengkap",
        price: "Rp 4.500.000",
        desc: "Kuasai pasar di lingkup kecamatan atau kota Anda.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjCWmh-eu-rn80TSXFcy30g_OaKV5eSbfaQqtKskh0TvfppOhHPyzPiwwz0Bax0USp3m9mdlvyAJGuPBfz8CKyQ9CxSi6ZETt2JPJ7TCGuvmn9eXqp2rjIkV3FxEjEY0l0s-i_PQ-MvoC821vvpCtjIjmK5LetFq0ud_AIIDyjg_7qp8I2r_WeT6aiEvzClSg56oxHYsA5o2btIlXxkuiJZ1i2zPSCC34SXiv1SXUxKxE6c1bIt4JklHq-iTHLQ5t5VwqMDencIiE",
        features: ["Hak retur model laku", "Support iklan sosial", "Prioritas stok terbaru"]
    },
    {
        id: 4,
        title: "Paket Gudang Lamonte",
        category: "PARTNER DISTRIBUSI",
        count: "400+ pcs (Grosir Besar)",
        price: "Rp 12.000.000",
        desc: "Investasi paling maksimal dengan harga modal terendah.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZFZkELJf5vGrDTx3VLvQSupT78sJ594djuQcF7cFmcKMqdRejIwLbSxxHMTywwceSuPOAfr4YoZmC-A4fI8Jo8YmbxriBieWj2ctqmnBaNDnWeAMsAKTsIuImmpNXu-iNGpmvsGrLC6TMxM6xeQz3G1A0KLNBBDf-eqDOvsksS7eejW3KiK7i7hDuQdUQdtLOU2SAcAwFiIduUzQzMh5jFLyJWbCi8WBAZ4RPTKCB_GR7lpPMFSjmZjWzZWTr42UI3TI3j1S4oBg",
        features: ["Harga pabrik langsung", "Sistem rekrut reseller", "Akses data buyer"]
    },
    {
        id: 5,
        title: "Paket Reseller Hemat",
        category: "MODAL MINIM UNTUNG NYATA",
        count: "40 pcs best seller",
        price: "Rp 1.200.000",
        desc: "Cocok untuk ibu rumah tangga yang ingin tambahan penghasilan.",
        img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=600&auto=format&fit=crop",
        features: ["Grup bimbingan telegram", "Tanpa biaya pendaftaran", "Update stok real-time"]
    },
    {
        id: 6,
        title: "Paket Koleksi Idul Fitri",
        category: "EDISI SPESIAL MUSIMAN",
        count: "80 set Gamis & Koko",
        price: "Rp 3.500.000",
        desc: "Persiapkan stok terbaik untuk puncak penjualan tahunan.",
        img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=600&auto=format&fit=crop",
        features: ["Bahan premium katun", "Warna-warna pastel", "Packaging box eksklusif"]
    },
    {
        id: 7,
        title: "Paket Toko Mini",
        category: "INVESTASI RUKO/KIOS",
        count: "200 pcs lengkap hijab",
        price: "Rp 6.000.000",
        desc: "Sangat direkomendasikan untuk Anda yang punya ruang pajang.",
        img: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=600&auto=format&fit=crop",
        features: ["Display hanger gratis", "Banner promosi toko", "Manual book marketing"]
    },
    {
        id: 8,
        title: "Paket Grosir Partai",
        category: "HARGA SEMI-PABRIK",
        count: "800 pcs (Koli Besar)",
        price: "Rp 25.000.000",
        desc: "Untuk pemain besar yang menyuplai ke pasar-pasar tradisional.",
        img: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=600&auto=format&fit=crop",
        features: ["Biaya antar ke ekspedisi", "Fokus quantity besar", "Tanpa sorting model"]
    },
    {
        id: 9,
        title: "Paket Dropship VIP",
        category: "TANPA STOK (JOIN VIP)",
        count: "Member Selamanya",
        price: "Rp 350.000",
        desc: "Cukup share foto, pengiriman kami yang kerjakan atas nama toko Anda.",
        img: "https://images.unsplash.com/photo-1519238323211-168a26ef16e5?q=80&w=600&auto=format&fit=crop",
        features: ["Disediakan web khusus", "Tanpa biaya packing", "Komisi harian cair"]
    }
];

export default function PaketSection() {
    const [showAll, setShowAll] = useState(false);

    const visiblePackages = showAll ? PACKAGES : PACKAGES.slice(0, 4);

    return (
        <section id='paket' className="relative z-10 py-24 px-8 max-w-screen-2xl mx-auto bg-[#fffceb]">
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
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <span className="text-[#967451] font-label font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                    Pilihan Kemitraan
                </span>
                <h2 className="text-5xl md:text-6xl font-headline italic tracking-tight text-[#7b5730] mb-6">
                    Koleksi Paket Eksklusif
                </h2>
                <p className="text-lg text-[#695c51] font-body leading-relaxed opacity-80">
                    Kurasi paket jualan yang dirancang untuk mempercepat profit Anda. Pilih modal yang sesuai dengan target bisnis keluarga Anda.
                </p>
                <div className="w-24 h-px bg-[#967451] mx-auto mt-12 opacity-30"></div>
            </div>

            {/* Package Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
                {visiblePackages.map((pkg, index) => (
                    <div
                        key={pkg.id}
                        className={`group flex flex-col h-full bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#d3c4b7]/20 hover:shadow-2xl hover:shadow-[#7b5730]/10 transition-all duration-500 hover:-translate-y-2 ${showAll && index >= 4 ? 'animate-fade-in' : ''}`}
                    >
                        <div className="relative h-[480px] overflow-hidden">
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

                        <div className="p-8 flex flex-col flex-grow bg-white">
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
                ))}
            </div>

            {/* Toggle Button Section */}
            <div className="mt-20 flex justify-center">
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
