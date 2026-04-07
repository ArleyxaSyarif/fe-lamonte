"use client";

import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

export default function KontakSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("Paket Grosir");
    const [message, setMessage] = useState("");
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
            setInterest("Paket Grosir");
        } catch (err) {
            alert("Gagal kirim ❌");
        }

        setLoading(false);
    };

    return (
        <section className="bg-[#f7faf9] font-body text-[#181c1c] relative min-h-screen">
            <style>{`
                .architectural-grid {
                    background-image: 
                        linear-gradient(to right, rgba(216, 195, 172, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(216, 195, 172, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                .text-outline-premium {
                    -webkit-text-stroke: 1px rgba(216, 195, 172, 0.2);
                    color: transparent;
                }
            `}</style>

            <main className="min-h-screen pt-24 pl-0 overflow-hidden relative">
                {/* Background Grid Layer */}
                <div className="absolute inset-0 architectural-grid pointer-events-none -z-10"></div>

                {/* Editorial Watermarks */}
                <div className="absolute top-40 right-[-5%] text-[8rem] md:text-[12rem] font-poppins font-extrabold text-[#d8c3ac]/10 select-none pointer-events-none rotate-90 origin-center tracking-tighter">
                    EDITORIAL
                </div>
                <div className="absolute bottom-20 left-[-5%] text-[7rem] md:text-[10rem] font-poppins font-extrabold text-[#d8c3ac]/5 select-none pointer-events-none tracking-tighter">
                    LAMONTE
                </div>

                {/* Hero Title Section */}
                <section className="px-8 md:px-24 py-16">
                    <div className="max-w-7xl mx-auto flex flex-col items-start relative">
                        <ScrollReveal delay={0}>
                            <span className="text-[#ffaa00] font-poppins font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                                INQUIRIES & PARTNERSHIPS
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <h1 className="font-poppins text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-black tracking-tighter text-[#181c1c] mb-8 max-w-4xl">
                                Mulai Bisnis <span className="text-[#ffaa00]">Baju Anak</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <p className="font-poppins text-lg md:text-xl text-[#524433] max-w-xl leading-relaxed">
                                Kami membantu para ibu rumah tangga dan pengusaha muda membangun brand fashion anak yang berkelas dengan sistem siap pakai.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Main Content Zone */}
                <section className="px-8 md:px-24 pb-32">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Contact Info (Bento Style) */}
                        <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                            {/* Call Center */}
                            <ScrollReveal delay={600}>
                                <div className="group bg-white p-10 rounded-lg shadow-[0px_12px_32px_rgba(24,28,28,0.03)] hover:shadow-xl transition-all duration-500 border-l-4 border-[#ffaa00]">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="material-symbols-outlined text-4xl text-[#ffaa00]">call</span>
                                        <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-[#d8c3ac]">Priority 01</span>
                                    </div>
                                    <h3 className="text-xl font-poppins font-bold mb-3 text-[#181c1c]">Customer Relations</h3>
                                    <p className="text-sm font-poppins text-[#524433] leading-relaxed mb-6">+62 812-3456-7890</p>
                                    <a className="inline-flex items-center text-[#ffaa00] font-poppins font-bold hover:gap-3 transition-all" href="https://wa.me/6281234567890">
                                        WhatsApp Call
                                        <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </ScrollReveal>

                            {/* Email Inquiry */}
                            <ScrollReveal delay={700}>
                                <div className="group bg-[#f1f4f4] p-10 rounded-lg hover:bg-[#ebeeee] transition-colors duration-500">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="material-symbols-outlined text-4xl text-[#181c1c]">mail</span>
                                        <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-[#d8c3ac]">Priority 02</span>
                                    </div>
                                    <h3 className="text-xl font-poppins font-bold mb-3 text-[#181c1c]">Email Inquiry</h3>
                                    <p className="text-sm font-poppins text-[#524433] leading-relaxed mb-6">hello@lamonte.id</p>
                                    <a className="inline-flex items-center text-[#181c1c] font-poppins font-bold hover:gap-3 transition-all" href="mailto:hello@lamonte.id">
                                        Send Message
                                        <span className="material-symbols-outlined ml-2 text-sm">open_in_new</span>
                                    </a>
                                </div>
                            </ScrollReveal>

                            {/* Distribution Center */}
                            <ScrollReveal delay={800}>
                                <div className="group bg-[#f1f4f4] p-10 rounded-lg hover:bg-[#ebeeee] transition-colors duration-500">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="material-symbols-outlined text-4xl text-[#181c1c]">location_on</span>
                                        <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-[#d8c3ac]">HQ Access</span>
                                    </div>
                                    <h3 className="text-xl font-poppins font-bold mb-3 text-[#181c1c]">Distribution Center</h3>
                                    <p className="text-sm font-poppins text-[#524433] leading-relaxed mb-6 truncate overflow-hidden">Bekasi, Indonesia (Jababeka Industrial Park)</p>
                                    <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-[#ffaa00]">By Appointment Only</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Glassmorphism Inquiry Form */}
                        <div className="lg:col-span-7 relative">
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ffaa00]/10 rounded-full blur-[80px]"></div>
                            <ScrollReveal delay={600}>
                                <div className="relative bg-white/40 backdrop-blur-3xl p-10 md:p-16 rounded-xl border border-[#d8c3ac]/15 shadow-[0px_24px_48px_rgba(24,28,28,0.08)]">
                                    <h2 className="text-3xl font-poppins font-black mb-2 text-[#181c1c]">Direct Inquiry</h2>
                                    <p className="text-[#524433] mb-12 font-poppins">Isi detail anda untuk mendapatkan proposal kemitraan dalam 24 jam.</p>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="relative group">
                                                <label className="text-[10px] absolute -top-6 left-0 text-[#857460] uppercase font-bold tracking-widest font-poppins">Nama Lengkap</label>
                                                <input 
                                                    className="w-full bg-transparent border-0 border-b-2 border-[#d8c3ac]/30 focus:border-[#ffaa00] focus:ring-0 px-0 py-4 font-poppins font-bold tracking-tighter placeholder:text-[#d8c3ac]/50 transition-all outline-none" 
                                                    placeholder="CONTOH: SARAH WIJAYA" 
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="relative group">
                                                <label className="text-[10px] absolute -top-6 left-0 text-[#857460] uppercase font-bold tracking-widest font-poppins">Inquiry Vector (E-mail/WA)</label>
                                                <input 
                                                    className="w-full bg-transparent border-0 border-b-2 border-[#d8c3ac]/30 focus:border-[#ffaa00] focus:ring-0 px-0 py-4 font-poppins font-bold tracking-tighter placeholder:text-[#d8c3ac]/50 transition-all outline-none" 
                                                    placeholder="SARAH@EMAIL.COM" 
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className="text-[10px] absolute -top-6 left-0 text-[#857460] uppercase font-bold tracking-widest font-poppins">Pilih Ketertarikan</label>
                                            <div className="flex flex-wrap gap-4 py-4">
                                                {["Paket Grosir", "Paket Distributor", "Sistem Reseller"].map((item) => (
                                                    <button 
                                                        key={item}
                                                        type="button"
                                                        onClick={() => setInterest(item)}
                                                        className={`px-4 py-2 rounded-md text-[10px] font-poppins font-bold uppercase tracking-[0.1em] border transition-all ${interest === item ? 'bg-[#ffaa00] text-white border-[#ffaa00]' : 'bg-transparent text-[#524433] border-[#d8c3ac]/30 hover:border-[#ffaa00]'}`}
                                                    >
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className="text-[10px] absolute -top-6 left-0 text-[#857460] uppercase font-bold tracking-widest font-poppins">Architectural Intent (Message)</label>
                                            <textarea 
                                                className="w-full bg-transparent border-0 border-b-2 border-[#d8c3ac]/30 focus:border-[#ffaa00] focus:ring-0 px-0 py-4 font-poppins placeholder:text-[#d8c3ac]/50 transition-all resize-none outline-none" 
                                                placeholder="Ceritakan sedikit tentang rencana bisnis Anda..." 
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="pt-6">
                                            <button 
                                                style={{ backgroundColor: '#FFAA00' }} 
                                                className="w-full md:w-auto text-white px-12 py-5 rounded-md font-poppins font-black text-sm uppercase tracking-widest hover:shadow-[0px_10px_20px_rgba(255,170,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70" 
                                                type="submit"
                                                disabled={loading}
                                            >
                                                <span>{loading ? "Initializing..." : "Initialize Consultation"}</span>
                                                <span className="material-symbols-outlined">send</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Decorative Map Section */}
                <section className="px-8 md:px-24 pb-32">
                    <ScrollReveal delay={400}>
                        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-all duration-700 h-[400px] relative">
                            <img 
                                className="w-full h-full object-cover" 
                                alt="architectural structure detail" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLhOfnfhFwrCxjtKMm8To9KtYEWPLL8Vb-NE1QGuVDeEnTVE0uu6QToTSc7X1sIzaXxkA6dblIvTNrfiRskEMpAc6VrYMBh-cUh7w_GqjIm93uU-RxFCZhP56XDVjhDi51eP08kBh0YETMR8nYOoBLB9K8jJHu7_cCAk73nfm2_ruw0J7BKEmV02P80SiuWcQixqnZl_XYkOMROjFs4NEJDcSlXO8K5oeQV4SFR9GN5SVo4WDL4gK0RPVZqSnREsPgXkEmM1nD343K" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#f7faf9] via-transparent to-transparent"></div>
                            <div className="absolute bottom-12 left-12 bg-[#181c1c] p-8 text-[#f7faf9] max-w-sm">
                                <h4 className="font-poppins font-black text-xl mb-2">Central Atrium</h4>
                                <p className="text-xs font-poppins text-[#f7faf9]/70 leading-snug">Jababeka Industrial Park, Bekasi, West Java 17530</p>
                                <div className="mt-4 flex items-center space-x-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-poppins uppercase tracking-widest text-[#f7faf9]/50">GMT</span>
                                        <span className="text-sm font-poppins font-bold">+07:00</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-poppins uppercase tracking-widest text-[#f7faf9]/50">Zone</span>
                                        <span className="text-sm font-poppins font-bold">WIB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </section>
    );
}
