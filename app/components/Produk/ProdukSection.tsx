import { getPosts } from "@/lib/api";

export default async function ProdukSection() {

    const posts = await getPosts();
    console.log(posts);

    return (
        <div className="font-body selection:bg-[#7b5730]/20 antialiased">
            {/* Main Content Canvas */}
            <main className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#fffceb] overflow-hidden">
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>


                {/* Section Header */}
                <header className="relative z-10 max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block text-[#7b5730] font-sans text-sm tracking-[0.3em] uppercase mb-4">Mahakarya Lamonte</span>
                    <h1 className="font-headline text-5xl md:text-7xl text-[#967451] leading-tight mb-6">Katalog Produk</h1>
                    <p className="font-body text-[#695c51] text-lg max-w-2xl mx-auto leading-relaxed opacity-80">
                        Model kekinian, bahan nyaman, desain syari’. Disukai anak, disetujui bunda.
                    </p>
                </header>

                {/* Infinite Marquee Auto-Slider Section */}
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

                    {/* Shadow Edge Masks (Optional for clean fade on edges) */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#fffceb] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#fffceb] to-transparent z-20 pointer-events-none"></div>

                    <div className="animate-marquee gap-6 px-3">
                        {posts.map((post: any, idx: number) => (
                            <div
                                key={idx}
                                className="w-[180px] md:w-[240px] flex-shrink-0 aspect-[3/4] rounded-3xl overflow-hidden border-[6px] border-[#695c51] shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
                            >
                                <img
                                    src={post.image}
                                    alt="Produk Fashion Anak"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-24 text-center relative z-10">
                    <button className="group relative px-12 py-5 bg-[#967451] text-white rounded-full font-medium tracking-widest uppercase text-sm overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95">
                        <span className="relative z-10 flex items-center gap-3">
                            Lihat Seluruh Koleksi
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </span>
                        <div className="absolute inset-0 bg-[#1c1c12]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </section>
            </main>


        </div>
    );
}
