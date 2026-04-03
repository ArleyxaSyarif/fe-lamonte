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
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            });

            alert("Pesan berhasil dikirim 🚀");
            setEmail("");
            setMessage("");
        } catch (err) {
            alert("Gagal kirim ❌");
        }

        setLoading(false);
    };

    return (
        <div className="bg-[#fdfae9] w-full">
            <section id="kontak" className="relative pt-40 pb-20 px-8 max-w-7xl mx-auto overflow-hidden">

                {/* Header Content */}
                <div className="text-center mb-24 relative z-10">
                    <ScrollReveal delay={0}>
                        <span className="text-sm font-label font-bold tracking-[0.3em] text-[#967451] uppercase mb-4 block">
                            Hubungi Kami
                        </span>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <h1 className="text-5xl md:text-7xl font-headline text-[#7b5730] leading-tight">
                            Mulai Perjalanan <br />
                            Warisan Anda
                        </h1>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
                    {/* Left Column: Contact Form */}
                    <ScrollReveal delay={400}>
                        <section className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-headline text-[#7b5730]">Kirim Pesan</h2>
                                <p className="text-[#695c51] font-body max-w-md">
                                    Tim kurator kami siap membantu merancang perjalanan personal yang tak terlupakan bagi Anda.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
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
                                            placeholder="nama@perusahaan.com"
                                            required
                                            className="w-full bg-transparent border-b border-[#d3c4b7] focus:border-[#7b5730] px-0 py-3 transition-colors outline-none text-[#4a3728] placeholder:text-[#81756a]/50"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label htmlFor="message" className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase block mb-2">
                                            Pesan
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Ceritakan tentang rencana perjalanan Anda..."
                                            required
                                            className="w-full bg-transparent border-b border-[#d3c4b7] focus:border-[#7b5730] px-0 py-3 transition-colors outline-none text-[#4a3728] placeholder:text-[#81756a]/50 resize-none"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full bg-[#967451] text-white py-4 px-8 rounded-full font-semibold tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:bg-[#7b5730] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-[#967451]/20 flex items-center justify-center gap-3"
                                >
                                    {/* Efek Kilauan (Glow) saat Hover */}
                                    <div className="absolute inset-0 w-1/4 h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out" />

                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Mengirim...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Kirim Pesan</span>
                                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                                send
                                            </span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </section>
                    </ScrollReveal>

                    {/* Right Column: Contact Info & Map */}
                    <ScrollReveal delay={600}>
                        <section className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Kantor Pusat</h3>
                                    <p className="text-lg font-headline text-[#7b5730] leading-relaxed">
                                        The Heritage Plaza, Lt. 12<br />
                                        Jl. Jend. Sudirman Kav. 52-53<br />
                                        Jakarta, Indonesia
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Hubungi</h3>
                                    <div className="space-y-2">
                                        <p className="text-lg font-headline text-[#7b5730]">+62 (21) 555-0123</p>
                                        <p className="text-lg font-headline text-[#7b5730]">curator@heritage.id</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-label font-bold tracking-widest text-[#967451] uppercase">Media Sosial</h3>
                                <div className="flex gap-6">
                                    {["public", "camera", "play_circle"].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d3c4b7] text-[#7b5730] hover:bg-[#7b5730] hover:text-white transition-all"
                                        >
                                            <span className="material-symbols-outlined">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#ebe9d8] group">
                                <div className="absolute inset-0">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvW6YQcd9rdMszKLhI2sYCoyiNuXBFt2a8_fIxQr4ZwaSGT4q9IQiG0S0YcebVOFY8p91xvhOg_3y1ujGFz7r2iMOnGicXb0eTqeq-fst2v_Qca0Ih8tp6IBQ85c8fSie2h_pL6WX9fG8sXvG0s1ZbGZ2PzCW2YIU7SYiNRzOYTiOJMUG1jDRi3ZAgrs7glGSpSBG26twSia2A84qCyCmbQJrjrNzB9XdItVea8sK8gwOfxgEa5LFxh68I6siCoaGaArmap6G_pkQ"
                                        alt="Map view of Jakarta center"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-xl flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#7b5730]">location_on</span>
                                        <span className="text-sm font-label font-semibold text-[#7b5730] uppercase tracking-widest">
                                            Lihat di Peta
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Jakarta,Indonesia"
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
