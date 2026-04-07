"use client"
import { sendWhatsApp } from "@/lib/whatsapp";

export default function CTA() {
    return (
        <section className="font-poppins relative min-h-[700px] lg:min-h-[921px] flex items-center overflow-hidden bg-[#1a1c1a] px-8">
            <style>{`
                .botanical-mask {
                    mask-image: linear-gradient(to right, black 40%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to right, black 40%, transparent 100%);
                }
                .gold-glow {
                    box-shadow: 0 0 30px rgba(255, 170, 0, 0.2);
                }
                .text-shadow-premium {
                    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }
            `}</style>

            {/* Background Image Integration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1a] via-[#1a1c1a]/90 to-transparent z-10"></div>
                <img
                    className="w-full h-full object-cover opacity-60 botanical-mask scale-110"
                    alt="Premium kids fashion background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE_9a1Ssbk0UNMNQ4XeQb6Q283cN0kXekUWYcTYUPqzcXEyTN7ACUbB04_lkszsbunT1dlXQfJjdWvx02q8Tg9AV-McX3IyAPxwdYcSTnVbSn-erimhayLTNP3wIlHUO_dX4cJ-9veThRyAXqsHEqNPF9o29IFf8wZzNcJTCllqtvquP4lHZ8gGN1WeKiBdAVqLb4GobOlVNb7-XPtuZBQVOeQ1Gfpvnbe9OZhvl5LsVpGMG6VOLIEb814_mZubJKJGuQ_rAclaCo"
                />
            </div>

            <div className="max-w-screen-2xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-0">
                {/* Content Column */}
                <div className="lg:col-span-7 py-16">
                    <div className="mb-8 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#ffaa00] shadow-[0_0_8px_#ffaa00]"></span>
                        <span className="font-poppins text-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Mau konsultasi gratis?</span>
                    </div>

                    <h1 className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tighter text-shadow-premium text-white">
                        Ayok klik tombol<br />
                        di bawah ini
                    </h1>

                    <p className="font-poppins text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 border-l-2 border-[#ffaa00]/40 pl-6">
                        Jangan lewatkan kesempatan menjadi mitra eksklusif di kota Anda. Konsultasikan paket yang tepat untuk Anda secara gratis sekarang juga.
                    </p>

                    {/* Benefit List mapped from old text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {[
                            { title: "Free Konsultasi", desc: "Konsultasi strategis pendaftaran mitra secara private", icon: "support_agent" },
                            { title: "Bimbingan Penjualan", desc: "Dukungan penuh marketing & materi promosi", icon: "trending_up" },
                            { title: "Update Stok Tiap Hari", desc: "Sistem order real-time bebas dari kehabisan barang", icon: "inventory_2" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#ffaa00] bg-white/5 p-2 rounded-lg">{item.icon}</span>
                                <div>
                                    <h4 className="font-poppins text-white font-bold text-base md:text-lg">{item.title}</h4>
                                    <p className="font-poppins text-white/50 text-xs mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Primary Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <button
                            onClick={() => sendWhatsApp({})}
                            className="font-poppins gold-glow group relative bg-gradient-to-r from-[#ffaa00] to-[#ffd786] text-[#232722] font-black text-sm md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 shadow-xl"
                        >
                            <span>MULAI KONSULTASI GRATIS</span>
                            <span className="material-symbols-outlined font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
                        </button>

                        <div className="flex hidden sm:flex -space-x-3 items-center">
                            <img className="w-10 h-10 rounded-full border-2 border-[#1a1c1a]" alt="Admin 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh3Ll7PPTmkEkJXVtjZ_tBaVWVIB5b-WtjZ-tpY_hWPWBfqpUWGbhUIaW-fLvehh8xLfHzK4RzcT1z9dBJL_amftSHDxsskOpR5i8V153c7W_pLbAs-O_ipL6NUQyFTYD3322JELf8DIYboxO_HujrahpKrtfXXDUechuQGOqX0MR0Kr_XncCvl-2zzGIwr3MG0JwrgVawyNDjH_fizAP2kQCZuLJYf0XCCk6WedcvqkdVjt4BEl-dkVPoR1kr7atP3ri7BFIUcTk" />
                            <img className="w-10 h-10 rounded-full border-2 border-[#1a1c1a]" alt="Admin 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALpiA4edpkxaNZmrEikO2Ec7E96Cxl8uTqgjFHNvd9cyI1qQ87cVDwf6IT9tpKdbOlVH0i_jIhKTis8GjA1-XCLPe9kEUbMfclvSENDLBIQV4MMImxD2XaxF___-v3dF2P7nMClRFD-2XktuA0NJEg-gqS1KYRE2NpfyXn0cT4jL509eP6t97gHG1bSOxmJkxLVeH9oi-NvjRT-MugLpXFmJUpvLuWLeU7GSeh8WZvWy9XIiwn85BffDYDg3CoiZzzqfmd3OhCTnk" />
                            <img className="w-10 h-10 rounded-full border-2 border-[#1a1c1a]" alt="Admin 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTs9yZd8Qi-g_Bb6aLixiHBk_mPJdSBgTEX8EXJaILY4XLQ2WOvLX6cV9RyeeExc3SzyCAZNubbZecoRTDEDXfAzQa0B8TQNYrYNAsAFaQyz5Fup0_NA5cFXHFRsRtcnk4dNhVMK1vBZEN_8DE-UsJeJ1LK8OzfZim-rjRFYUM-4110fN0Y7OPRuVoq1ZdIOxk0ITwZ4Ya_NuXSKBZZ7GwXBjQDgNyIqsEGnLWqOVS4GYNPBxFpieb9tN-jWClYXI56IuAMVFG4rU" />
                            <div className="w-10 h-10 rounded-full border-2 border-[#1a1c1a] bg-[#ffaa00] flex items-center justify-center text-[10px] text-[#232722] font-bold font-poppins">+12 CS</div>
                        </div>
                    </div>
                </div>

                {/* Floating Decorative Card */}
                <div className="lg:col-span-5 hidden lg:block relative">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ffaa00]/10 rounded-full blur-[100px]"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <p className="font-poppins text-white/40 text-xs tracking-[0.2em] uppercase mb-1 font-bold">Status Ekosistem</p>
                                <h3 className="text-white text-xl md:text-2xl font-poppins font-black italic">Distributor Lamonte</h3>
                            </div>
                            <span className="material-symbols-outlined text-[#ffaa00] text-4xl">storefront</span>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-[#1a1c1a]/50 p-5 rounded-2xl border border-white/5">
                                <div className="flex justify-between text-xs text-white/60 mb-3 font-poppins font-bold">
                                    <span>Tingkat Repeat Order</span>
                                    <span className="text-[#ffaa00]">88%</span>
                                </div>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#ffaa00] h-full w-[88%]"></div>
                                </div>
                            </div>
                            <div className="bg-[#1a1c1a]/50 p-5 rounded-2xl border border-white/5">
                                <div className="flex justify-between text-xs text-white/60 mb-3 font-poppins font-bold">
                                    <span>Tingkat Peminat</span>
                                    <span className="text-[#ffaa00]">Tinggi</span>
                                </div>
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#ffaa00] h-full w-[72%]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                            <p className="text-white font-poppins font-bold italic">Bergabung dengan 2.4k+ Mitra</p>
                            <span className="material-symbols-outlined text-[#ffaa00]/80">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
