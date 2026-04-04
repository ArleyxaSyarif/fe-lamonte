"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

export default function KontakSection() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            alert("Pesan berhasil dikirim 🚀. Tim Lamonte akan segera menghubungi Anda.");
            setEmail("");
            setMessage("");
            setName("");
        } catch (err) {
            alert("Gagal kirim ❌");
        }

        setLoading(false);
    };

    return (
        <section id="kontak" className="bg-[#fefae6] w-full">
            <main className="max-w-7xl mx-auto px-8 py-16 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-5 space-y-12">
                        <header className="space-y-6">
                            <ScrollReveal delay={0}>
                                <span className="text-[#675c00] font-bold tracking-widest uppercase text-xs mb-4 block">Editorial Inquiry</span>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-[#1a3c04] leading-[0.95] italic">
                                    Mulai Bisnis <br/> Baju Anak
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={400}>
                                <p className="text-lg text-[#1a3c04]/70 leading-relaxed max-w-md font-medium">
                                    Kami membantu para ibu rumah tangga dan pengusaha muda membangun brand fashion anak yang berkelas dengan sistem siap pakai.
                                </p>
                            </ScrollReveal>
                        </header>

                        <div className="space-y-10">
                            {/* Contact Info Blocks */}
                            <ScrollReveal delay={500}>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="material-symbols-outlined text-[#1a3c04]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a3c04]/50">Email Support</span>
                                    </div>
                                    <a className="text-2xl font-headline font-black italic text-[#1a3c04] hover:text-[#675c00] transition-colors" href="mailto:hello@lamonte.id">
                                        hello@lamonte.id
                                    </a>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={600}>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="material-symbols-outlined text-[#1a3c04]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a3c04]/50">Call Center</span>
                                    </div>
                                    <p className="text-2xl font-headline font-black italic text-[#1a3c04]">
                                        +62 812-3456-7890
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={700}>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="material-symbols-outlined text-[#1a3c04]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a3c04]/50">Distribution Center</span>
                                    </div>
                                    <p className="text-lg font-bold text-[#1a3c04]/70 leading-relaxed italic">
                                        Kawasan Industri Jababeka<br/>Bekasi, Indonesia
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Abstract Decorative Element */}
                        <div className="hidden lg:block pt-8">
                            <ScrollReveal delay={800}>
                                <div className="w-24 h-1 bg-[#1a3c04] rounded-full"></div>
                                <div className="w-12 h-1 bg-[#f4e04d] rounded-full mt-2"></div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="lg:col-span-7">
                        <ScrollReveal delay={500}>
                            <div className="bg-white rounded-3xl p-8 md:p-14 shadow-premium-lg relative overflow-hidden border border-[#1a3c04]/5">
                                {/* Subtle tonal accent in corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4e04d]/10 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                                
                                <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-black text-[#1a3c04]/50 font-label ml-1 tracking-[0.2em]" htmlFor="name">NAMA LENGKAP</label>
                                            <input 
                                                className="w-full bg-white border border-[#1a3c04]/5 rounded-2xl px-5 py-4 font-body text-[#1a3c04] placeholder:text-[#1a3c04]/30 focus:ring-4 focus:ring-[#1a3c04]/5 focus:border-[#1a3c04]/20 transition-all outline-none" 
                                                id="name" 
                                                type="text" 
                                                placeholder="Contoh: Sarah Wijaya"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-black text-[#1a3c04]/50 font-label ml-1 tracking-[0.2em]" htmlFor="email">WHATSAPP / EMAIL</label>
                                            <input 
                                                className="w-full bg-white border border-[#1a3c04]/5 rounded-2xl px-5 py-4 font-body text-[#1a3c04] placeholder:text-[#1a3c04]/30 focus:ring-4 focus:ring-[#1a3c04]/5 focus:border-[#1a3c04]/20 transition-all outline-none" 
                                                id="email" 
                                                type="text"
                                                placeholder="WhatsApp atau Email Anda"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-black text-[#1a3c04]/50 font-label ml-1 tracking-[0.2em]">PILIH KETERTARIKAN</label>
                                        <div className="flex flex-wrap gap-3 mt-3">
                                            {["Paket Grosir", "Paket Distributor", "Sistem Reseller"].map((tag) => (
                                                <button key={tag} className="px-5 py-2.5 bg-[#1a3c04]/5 text-[#1a3c04] rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#1a3c04] hover:text-[#f4e04d] transition-all" type="button">
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-[#1a3c04]/50 font-label ml-1 tracking-[0.2em]" htmlFor="message">PESAN ANDA</label>
                                        <textarea 
                                            className="w-full bg-white border border-[#1a3c04]/5 rounded-2xl px-5 py-4 font-body text-[#1a3c04] placeholder:text-[#1a3c04]/30 focus:ring-4 focus:ring-[#1a3c04]/5 focus:border-[#1a3c04]/20 transition-all outline-none resize-none" 
                                            id="message" 
                                            rows={4}
                                            placeholder="Tuliskan visi bisnis Anda atau pertanyaan..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button 
                                            type="submit" 
                                            disabled={loading}
                                            className="w-full md:w-auto px-12 py-5 bg-[#1a3c04] text-[#f4e04d] rounded-2xl font-headline font-black text-lg tracking-tight shadow-xl shadow-[#1a3c04]/20 hover:shadow-2xl hover:translate-y-[-2px] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {loading ? (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 border-t-2 border-[#f4e04d] border-solid rounded-full animate-spin"></div>
                                                    <span>MENGIRIM...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    Kirim Inquiry Bisnis
                                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* Social & Trust Row */}
                        <ScrollReveal delay={800}>
                            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                <div className="flex items-center gap-10">
                                    <span className="font-headline font-black text-xl italic text-[#1a3c04]">Editorial.</span>
                                    <span className="font-headline font-black text-xl italic text-[#1a3c04]">Professional.</span>
                                    <span className="font-headline font-black text-xl italic text-[#1a3c04]">Trust.</span>
                                </div>
                                <div className="text-[10px] font-black text-[#1a3c04]/60 flex items-center gap-3 uppercase tracking-[0.2em]">
                                    <span className="w-2 h-2 rounded-full bg-[#f4e04d] animate-pulse"></span>
                                    Available for New Partners Q2 2024
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
        </section>
    );
}
