import { getPosts } from "@/lib/api";
import ScrollReveal from "../ScrollReveal";

export default async function ProdukSection() {
    const posts = await getPosts();

    return (
        <div className="font-body selection:bg-brand-yellow/30 antialiased">
            <main className="relative min-h-screen pt-24 md:pt-36 pb-24 px-6 md:px-12 bg-white overflow-hidden">

                {/* Refined Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-40 bg-gradient-radial from-brand-yellow/20 to-transparent"></div>
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                    style={{
                        backgroundImage: `radial-gradient(var(--brand-green) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                ></div>

                <header className="relative z-10 max-w-4xl mx-auto text-center mb-16 md:mb-20">
                    <ScrollReveal delay={0}>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-8 bg-brand-green/20"></div>
                            <span className="text-brand-green font-sans text-[11px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-brand-yellow/10">Laris Lamonte</span>
                            <div className="h-px w-8 bg-brand-green/20"></div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <h2 className="font-headline text-3xl md:text-6xl text-brand-green leading-[1.1] mb-8 italic font-black">
                            Katalog <span className="text-gradient">Terbaik</span> Anak
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <p className="font-body text-brand-green/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Koleksi pilihan dengan material premium, desain modern, dan tetap selaras dengan value syari'.
                        </p>
                    </ScrollReveal>
                </header>

                <ScrollReveal delay={600}>
                    <section className="relative z-10 w-full mt-12 overflow-hidden py-12">
                        <style>{`
                            @keyframes marquee-refined {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-marquee-refined {
                                display: flex;
                                width: max-content;
                                animation: marquee-refined 40s linear infinite;
                            }
                            .animate-marquee-refined:hover {
                                animation-play-state: paused;
                            }
                        `}</style>

                        {/* Soft Edge Masks */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

                        <div className="animate-marquee-refined gap-8 px-4">
                            {[...posts, ...posts].map((post: any, idx: number) => (
                                <div
                                    key={`${post.id}-${idx}`}
                                    className="relative w-[210px] md:w-[280px] flex-shrink-0 aspect-[3/4.2] rounded-[2.5rem] overflow-hidden border border-brand-green/5 shadow-premium hover:shadow-premium-lg transition-all duration-500 bg-white group cursor-pointer"
                                >
                                    <img
                                        src={`${post.image}`}
                                        alt={post.title || "Produk Lamonte"}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white font-headline italic font-bold text-lg leading-tight line-clamp-2">
                                            {post.title || "Premium Kids Fashion"}
                                        </p>
                                    </div>

                                    {/* Badges */}
                                    <div className="absolute top-5 left-5">
                                        {idx % 3 === 0 ? (
                                            <span className="bg-brand-yellow text-brand-green text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-brand animate-pulse">Hot Item</span>
                                        ) : idx % 5 === 0 ? (
                                            <span className="bg-brand-green text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">New Arrival</span>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                    <section className="mt-20 md:mt-28 text-center relative z-10 flex flex-col items-center">
                        <button className="group relative px-12 md:px-16 py-5 md:py-6 rounded-full font-black tracking-[0.2em] uppercase text-xs md:text-sm overflow-hidden transition-all bg-[#1a3c04] text-[#f4e04d] hover:shadow-2xl hover:-translate-y-1 active:translate-y-px active:scale-95 w-full sm:w-auto shadow-xl shadow-[#1a3c04]/20">
                            <div className="relative z-10 flex items-center justify-center gap-4">
                                <span>Lihat Katalog Lengkap</span>
                                <span className="material-symbols-outlined text-lg md:text-2xl transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                            </div>
                        </button>
                        
                        <p className="mt-8 text-brand-green/40 font-semibold text-xs md:text-sm uppercase tracking-widest">Temukan ribuan desain eksklusif lainnya</p>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
}
