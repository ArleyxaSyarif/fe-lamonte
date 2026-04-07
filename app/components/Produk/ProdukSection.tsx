import { getPosts } from "@/lib/api";
import ScrollReveal from "../ScrollReveal";
import AutoHeroSlider from "./AutoHeroSlider";

export default async function ProdukSection() {
    const posts = await getPosts();
    // Extract images from posts for the Hero Slider
    const sliderImages = posts.slice(0, 5).map((p: any) => p.image);

    return (
        <section id="produk" className="font-poppins selection:bg-[#ffaa00]/20 antialiased bg-white text-[#1a1c1a] px-8">
            <div className="relative min-h-screen pt-24 md:pt-36 pb-24 overflow-hidden">
                {/* Refined Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-10 bg-gradient-radial from-[#ffaa00]/20 to-transparent"></div>
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}
                ></div>

                {/* Header Context */}
                <header className="relative z-10 max-w-4xl mx-auto text-center mb-16 md:mb-20 px-0">
                    <ScrollReveal delay={0}>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-8 bg-[#ffaa00]/30"></div>
                            <span className="text-[#ffaa00] font-poppins text-[11px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-[#ffaa00]/5 border border-[#ffaa00]/10">Laris Lamonte</span>
                            <div className="h-px w-8 bg-[#ffaa00]/30"></div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl text-[#1a1c1a] leading-[1.1] mb-6 font-black tracking-tighter">
                            Katalog Terbaik Anak
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <p className="font-poppins text-[#1a1c1a]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Koleksi pilihan dengan material premium, desain modern, dan tetap selaras dengan value syari'.
                        </p>
                    </ScrollReveal>
                </header>

                {/* Hero Slider Section from Template */}
                <div className="relative z-10 max-w-screen-2xl mx-auto px-0">
                    <AutoHeroSlider images={sliderImages} />
                </div>

                {/* Product/Category Grid from Template */}
                <div className="relative z-10 max-w-screen-2xl mx-auto mt-8 px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {posts.map((post: any, idx: number) => (
                            <ScrollReveal key={`${post.id}-${idx}`} delay={200 + (idx % 4) * 100}>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#f5f5f5] transition-transform duration-500 group-hover:-translate-y-2 shadow-sm hover:shadow-xl">
                                        <img 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            alt={post.title || "Produk Lamonte"} 
                                            src={post.image}
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                                            <span className="material-symbols-outlined text-white text-3xl font-light scale-75 group-hover:scale-100 transition-transform">arrow_outward</span>
                                        </div>
                                        {/* Hover Overlay with text */}
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#232722]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-poppins italic font-bold text-lg leading-tight line-clamp-2">
                                                {post.title || "Premium Kids Fashion"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <ScrollReveal delay={800}>
                    <section className="mt-20 md:mt-28 text-center relative z-10 flex flex-col items-center">
                        <button className="font-poppins group relative px-12 md:px-16 py-5 md:py-6 rounded-full font-black tracking-[0.2em] uppercase text-xs md:text-sm overflow-hidden transition-all bg-[#ffaa00] text-[#232722] hover:shadow-2xl hover:-translate-y-1 active:translate-y-px active:scale-95 w-full sm:w-auto shadow-xl shadow-[#ffaa00]/20">
                            <div className="relative z-10 flex items-center justify-center gap-4">
                                <span className="font-poppins">Lihat Katalog Lengkap</span>
                                <span className="material-symbols-outlined text-lg md:text-2xl transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        </button>
                        <p className="mt-8 text-[#1a1c1a]/40 font-poppins font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">Temukan ribuan desain eksklusif lainnya</p>
                    </section>
                </ScrollReveal>

            </div>
        </section>
    );
}
