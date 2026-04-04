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
        <div className="bg-[#fdfae9] w-full">
            <section id="kontak" className="relative pt-24 md:pt-40 pb-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden font-body">

                {/* Header Content */}
                <div className="text-center mb-16 md:mb-24 relative z-10">
                    <ScrollReveal delay={0}>
                        <span className="text-xs md:text-sm font-label font-bold tracking-[0.3em] text-[#967451] uppercase mb-4 block">
                            Hubungi Kami
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <h1 className="text-2xl md:text-5xl font-headline text-[#7b5730] leading-tight">
                            Mulai Bisnis Baju <br />
                            Anak Anda Sekarang
                        </h1>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start relative z-10">
                    {/* Left Column: Contact Form */}
                    <ScrollReveal delay={400}>
                        <section className="space-y-10 md:space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-headline text-[#7b5730]">Kirim Pesan</h2>
                                <p className="text-[#695c51] text-sm md:text-base font-body max-w-md">
                                    Punya pertanyaan tentang paket kemitraan? Tim kami siap menjawab dan membimbing Anda memilih paket terbaik.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                <div className="space-y-6">

                                    <div className="relative group">
                                        <label htmlFor="email" className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase block mb-2">
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
                                            className="w-full bg-transparent border-b border-[#d3c4b7] focus:border-[#7b5730] px-0 py-3 transition-colors outline-none text-[#4a3728] placeholder:text-[#81756a]/50"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label htmlFor="message" className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase block mb-2">
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
                                            className="w-full bg-transparent border-b border-[#d3c4b7] focus:border-[#7b5730] px-0 py-3 transition-colors outline-none text-[#4a3728] placeholder:text-[#81756a]/50 resize-none"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full bg-[#7b5730] text-white py-4 md:py-5 px-6 md:px-10 rounded-full font-semibold tracking-widest uppercase text-xs md:text-sm overflow-hidden transition-all duration-300 hover:bg-[#967451] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#7b5730]/20 flex items-center justify-center gap-3"
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
                        </section>
                    </ScrollReveal>

                    {/* Right Column: Contact Info & Map */}
                    <ScrollReveal delay={600}>
                        <section className="space-y-12 md:space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Kantor Pusat</h3>
                                    <p className="text-md md:text-lg font-headline text-[#7b5730] leading-relaxed">
                                        Lamonte Distribution Center<br />
                                        Kawasan Industri Jababeka, Blok C1<br />
                                        Bekasi, Jawa Barat
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Hubungi</h3>
                                    <div className="space-y-2">
                                        <p className="text-md md:text-lg font-headline text-[#7b5730]">+62 812 3456 7890</p>
                                        <p className="text-md md:text-lg font-headline text-[#7b5730]">cs@lamontestore.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Ikuti Lamonte</h3>
                                <div className="flex gap-4 md:gap-6">
                                    {["public", "camera", "play_circle"].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#d3c4b7] text-[#7b5730] hover:bg-[#7b5730] hover:text-white transition-all"
                                        >
                                            <span className="material-symbols-outlined text-xl md:text-2xl">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-[#ebe9d8] group">
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=800&auto=format&fit=crop"
                                        alt="Map view"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-sm px-5 py-3 md:px-6 md:py-4 rounded-full shadow-xl flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#7b5730]">location_on</span>
                                        <span className="text-xs md:text-sm font-label font-semibold text-[#7b5730] uppercase tracking-widest">
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
                        </section>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
