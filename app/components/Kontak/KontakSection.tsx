"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

export default function KontakSection() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            alert("Pesan berhasil dikirim 🚀. Tim Lamonte akan segera menghubungi Anda.");
            setEmail("");
            setMessage("");
        } catch (err) {
            alert("Gagal kirim ❌");
        }

        setLoading(false);
    };

    return (
        <div className="bg-[#fefae6] w-full">
            <section id="kontak" className="relative pt-24 md:pt-40 pb-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden font-body">

                {/* Header Content */}
                <div className="text-center mb-16 md:mb-24 relative z-10">
                    <ScrollReveal delay={0}>
                        <span className="text-xs md:text-sm font-label font-bold tracking-[0.3em] text-[#1a3c04] uppercase mb-4 block opacity-70">
                            Hubungi Kami
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h1 className="text-2xl md:text-5xl font-headline text-[#1a3c04] leading-tight mb-8">
                            Mulai Bisnis Baju <br />
                            Anak Anda Sekarang
                        </h1>
                    </ScrollReveal>
                    <div className="h-[2px] w-24 bg-[#f4e04d] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start relative z-10">
                    {/* Left Column: Contact Form */}
                    <ScrollReveal delay={400}>
                        <div className="space-y-10 md:space-y-12 bg-white/50 p-8 md:p-12 rounded-[2.5rem] border border-[#1a3c04]/10 shadow-xl backdrop-blur-sm">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-headline text-[#1a3c04]">Kirim Pesan</h2>
                                <p className="text-[#1a3c04]/70 text-sm md:text-base font-body max-w-md">
                                    Punya pertanyaan tentang paket kemitraan? Tim kami siap menjawab dan membimbing Anda memilih paket terbaik.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                <div className="space-y-6">
                                    <div className="relative group">
                                        <label htmlFor="email" className="text-xs font-label font-bold tracking-widest text-[#1a3c04] uppercase block mb-2 opacity-60">
                                            Alamat Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="nama@email.com"
                                            required
                                            className="w-full bg-transparent border-b border-[#1a3c04]/20 focus:border-[#1a3c04] px-0 py-3 transition-colors outline-none text-[#1a3c04] placeholder:text-[#1a3c04]/30"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label htmlFor="message" className="text-xs font-label font-bold tracking-widest text-[#1a3c04] uppercase block mb-2 opacity-60">
                                            Pesan Singkat
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Tuliskan pertanyaan atau rencana bisnis Anda..."
                                            required
                                            className="w-full bg-transparent border-b border-[#1a3c04]/20 focus:border-[#1a3c04] px-0 py-3 transition-colors outline-none text-[#1a3c04] placeholder:text-[#1a3c04]/30 resize-none"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full bg-[#1a3c04] text-white py-4 md:py-5 px-6 md:px-10 rounded-full font-semibold tracking-widest uppercase text-xs md:text-sm overflow-hidden transition-all duration-300 hover:bg-[#1a3c04]/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-[#1a3c04]/20 flex items-center justify-center gap-3"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>MENGIRIM...</span>
                                        </>
                                    ) : (
                                        <div className="flex items-center justify-center gap-3">
                                            <span>HUBUNGI KAMI</span>
                                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                                send
                                            </span>
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Contact Info & Map */}
                    <ScrollReveal delay={600}>
                        <div className="space-y-12 md:space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#1a3c04] uppercase opacity-60">Kantor Pusat</h3>
                                    <p className="text-md md:text-lg font-headline text-[#1a3c04] leading-relaxed">
                                        Lamonte Distribution Center<br />
                                        Kawasan Industri Jababeka, Blok C1<br />
                                        Bekasi, Jawa Barat
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#1a3c04] uppercase opacity-60">Hubungi</h3>
                                    <div className="space-y-2">
                                        <p className="text-md md:text-lg font-headline text-[#1a3c04]">+62 812 3456 7890</p>
                                        <p className="text-md md:text-lg font-headline text-[#1a3c04]">cs@lamontestore.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-label font-bold tracking-widest text-[#1a3c04] uppercase opacity-60">Ikuti Lamonte</h3>
                                <div className="flex gap-4 md:gap-6">
                                    {["public", "camera", "play_circle"].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#1a3c04]/20 text-[#1a3c04] hover:bg-[#1a3c04] hover:text-white transition-all shadow-sm"
                                        >
                                            <span className="material-symbols-outlined text-xl md:text-2xl">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden bg-[#1a3c04]/5 group border border-[#1a3c04]/10 shadow-lg">
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=800&auto=format&fit=crop"
                                        alt="Map view"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-sm px-5 py-3 md:px-6 md:py-4 rounded-full shadow-xl flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#1a3c04]">location_on</span>
                                        <span className="text-xs md:text-sm font-label font-semibold text-[#1a3c04] uppercase tracking-widest">
                                            Lihat di Peta
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Bekasi,Indonesia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10"
                                    aria-label="View on Google Maps"
                                ></a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
