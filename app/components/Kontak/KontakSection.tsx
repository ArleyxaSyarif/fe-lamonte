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
        <section id="kontak" className="bg-white font-poppins relative">
            <style>{`
                .grid-texture {
                    background-image: radial-gradient(rgba(0,0,0,0.05) 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                }
                .tonal-glass {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(12px);
                }
            `}</style>

            <main className="min-h-screen pt-20 pb-20 relative grid-texture">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column */}
                    <section className="space-y-12">
                        <ScrollReveal delay={0}>
                            <div className="space-y-6">
                                <h1 className="font-poppins text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1a1c1a] leading-[1.1]">
                                    Mulai Bisnis Baju Anak
                                </h1>
                                <p className="text-xl md:text-2xl text-[#1a1c1a]/60 font-light leading-relaxed max-w-lg">
                                    Kami membantu para ibu rumah tangga dan pengusaha muda membangun brand fashion anak yang berkelas dengan sistem siap pakai.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-8 py-8">
                            <ScrollReveal delay={200}>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#ffaa00]/10 rounded-xl text-[#ffaa00] transition-colors group-hover:bg-[#ffaa00] group-hover:text-white">
                                        <span className="material-symbols-outlined" data-icon="mail">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50">Email Inquiry</p>
                                        <p className="text-lg font-medium text-[#1a1c1a]">hello@lamonte.id</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={300}>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#ffaa00]/10 rounded-xl text-[#ffaa00] transition-colors group-hover:bg-[#ffaa00] group-hover:text-white">
                                        <span className="material-symbols-outlined" data-icon="call">call</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50">Call Center</p>
                                        <p className="text-lg font-medium text-[#1a1c1a]">+62 812-3456-7890</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#ffaa00]/10 rounded-xl text-[#ffaa00] transition-colors group-hover:bg-[#ffaa00] group-hover:text-white">
                                        <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50">Distribution Center</p>
                                        <p className="text-lg font-medium text-[#1a1c1a] leading-snug">Kawasan Industri Jababeka<br />Bekasi, Indonesia</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>


                    </section>

                    {/* Right Column: Form */}
                    <section className="lg:sticky lg:top-32">
                        <ScrollReveal delay={400}>
                            <div className="tonal-glass rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-[#1a1c1a]/5">
                                <div className="mb-10">
                                    <h2 className="font-poppins text-3xl font-bold text-[#1a1c1a]">Kirimkan Proposal Bisnis Anda</h2>
                                    <div className="h-1 w-20 bg-[#ffaa00] mt-4 rounded-full"></div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-6">
                                        <div className="relative">
                                            <label className="font-poppins text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50 mb-2 block">Nama Lengkap</label>
                                            <input
                                                className="w-full bg-[#f5f5f5] border-b-2 border-t-0 border-x-0 border-[#1a1c1a]/10 focus:ring-0 focus:border-[#ffaa00] transition-all py-3 px-4 outline-none font-poppins text-[#1a1c1a] placeholder:text-[#1a1c1a]/30"
                                                placeholder="Contoh: Sarah Wijaya"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <label className="font-poppins text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50 mb-2 block">WhatsApp / Email</label>
                                            <input
                                                className="w-full bg-[#f5f5f5] border-b-2 border-t-0 border-x-0 border-[#1a1c1a]/10 focus:ring-0 focus:border-[#ffaa00] transition-all py-3 px-4 outline-none font-poppins text-[#1a1c1a] placeholder:text-[#1a1c1a]/30"
                                                placeholder="0812-xxxx-xxxx"
                                                type="text"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50 mb-4 block">Pilih Ketertarikan</label>
                                        <div className="flex flex-wrap gap-3">
                                            <button className="px-5 py-2.5 rounded-full bg-[#ffaa00] text-[#232722] text-sm font-semibold border border-[#ffaa00] hover:brightness-105 transition-all font-poppins" type="button">Paket Grosir</button>
                                            <button className="px-5 py-2.5 rounded-full bg-[#ffaa00]/5 text-[#ffaa00] text-sm font-medium border border-[#ffaa00]/20 hover:bg-[#ffaa00]/10 transition-all font-poppins" type="button">Paket Distributor</button>
                                            <button className="px-5 py-2.5 rounded-full bg-[#ffaa00]/5 text-[#ffaa00] text-sm font-medium border border-[#ffaa00]/20 hover:bg-[#ffaa00]/10 transition-all font-poppins" type="button">Sistem Reseller</button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-xs font-bold uppercase tracking-widest text-[#1a1c1a]/50 mb-2 block">Pesan Anda</label>
                                        <textarea
                                            className="w-full bg-[#f5f5f5] border-b-2 border-t-0 border-x-0 border-[#1a1c1a]/10 focus:ring-0 focus:border-[#ffaa00] transition-all py-3 px-4 outline-none font-poppins text-[#1a1c1a] resize-none placeholder:text-[#1a1c1a]/30"
                                            placeholder="Ceritakan sedikit tentang rencana bisnis Anda..."
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        className="w-full bg-[#ffaa00] hover:opacity-90 text-[#232722] py-5 rounded-xl font-poppins font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-[#ffaa00]/20 disabled:opacity-70"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? "Mengirim..." : "Kirim Inquiry Bisnis"}
                                        {!loading && <span className="material-symbols-outlined text-[#232722]" data-icon="arrow_forward">arrow_forward</span>}
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </section>
                </div>

                <ScrollReveal delay={800}>
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-16 mt-24 flex flex-wrap justify-center gap-12 text-[#1a1c1a]/30">
                        <div className="flex flex-col items-center gap-2 hover:text-[#1a1c1a] transition-colors cursor-default">
                            <p className="font-poppins font-black text-2xl tracking-tighter uppercase">Editorial.</p>
                            <div className="h-px w-8 bg-[#ffaa00]/30"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:text-[#1a1c1a] transition-colors cursor-default">
                            <p className="font-poppins font-black text-2xl tracking-tighter uppercase">Professional.</p>
                            <div className="h-px w-8 bg-[#ffaa00]/30"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:text-[#1a1c1a] transition-colors cursor-default">
                            <p className="font-poppins font-black text-2xl tracking-tighter uppercase">Trust.</p>
                            <div className="h-px w-8 bg-[#ffaa00]/30"></div>
                        </div>
                    </div>
                </ScrollReveal>
            </main>
        </section>
    );
}
