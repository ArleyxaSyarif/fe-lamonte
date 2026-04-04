import { getPosts } from "@/lib/api";
import ScrollReveal from "../ScrollReveal";

export default async function ProdukSection() {
    const posts = await getPosts();

    return (
        <div className="font-body selection:bg-[#1a3c04]/20 antialiased">
            <main className="relative min-h-screen pt-20 md:pt-32 pb-20 px-6 md:px-12 bg-[#fefae6] overflow-hidden">

                {/* Transparent Grid Pattern - Green Accent */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"

                    style={{
                        backgroundImage: `linear-gradient(#1a3c04 1.5px, transparent 1.5px), linear-gradient(90deg, #1a3c04 1.5px, transparent 1.5px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <header className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    <ScrollReveal delay={0}>
                        <span className="inline-block text-[#1a3c04] font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-bold">Laris Lamonte</span>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <h1 className="font-headline text-2xl md:text-5xl lg:text-6xl text-[#1a3c04] leading-tight mb-6">Katalog Produk</h1>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <p className="font-body text-[#1a3c04]/70 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Model kekinian, bahan nyaman, desain syari’. Disukai anak, disetujui bunda.
                        </p>
                    </ScrollReveal>
                </header>

                <ScrollReveal delay={600}>
                    <section className="relative z-10 w-full mt-12 overflow-hidden py-8">
                        <style>{`
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-marquee {
                                display: flex;
                                width: max-content;
                                animation: marquee 25s linear infinite;
                            }
                            .animate-marquee:hover {
                                animation-play-state: paused;
                            }
                        `}</style>

                        {/* Shadow Edge Masks */}
                        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#fefae6] to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#fefae6] to-transparent z-20 pointer-events-none"></div>

                        <div className="animate-marquee gap-6 px-3">
                            {posts.map((post: any, idx: number) => (
                                <div
                                    key={`post-1-${idx}`}
                                    className="w-[180px] md:w-[240px] flex-shrink-0 aspect-[3/4] rounded-3xl overflow-hidden border-[6px] border-[#1a3c04] shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
                                >
                                    <img
                                        src={`${post.image}`}
                                        alt="Produk Fashion Anak"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            {posts.map((post: any, idx: number) => (
                                <div
                                    key={`post-2-${idx}`}
                                    className="w-[180px] md:w-[240px] flex-shrink-0 aspect-[3/4] rounded-3xl overflow-hidden border-[6px] border-[#1a3c04] shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
                                >
                                    <img
                                        src={`${post.image}`}
                                        alt="Produk Fashion Anak"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                    <section className="mt-16 md:mt-24 text-center relative z-10">
                        <button className="group relative px-10 md:px-12 py-4 md:py-5 bg-[#1a3c04] text-white rounded-full font-medium tracking-widest uppercase text-xs md:text-sm overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 w-full sm:w-auto">
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                <span>LIHAT SELURUH KOLEKSI</span>
                                <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
                            </div>
                            <div className="absolute inset-0 bg-[#f4e04d] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </section>
                </ScrollReveal>
            </main>
        </div>
    );
}
