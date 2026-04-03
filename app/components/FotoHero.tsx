import Image from "next/image";

export default function FotoHero() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:block hidden">
            {/* Foto Kiri Atas */}
            <div className="absolute -top-16 -left-10 md:-top-10 md:-left-12 lg:-top-6 lg:left-4 transform -rotate-[15deg] w-36 h-48 md:w-48 md:h-64 lg:w-[200px] lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-8 border-[#f5f1e8] transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto z-10 hidden md:block">
                <Image
                    src="/img/anak.png"
                    alt="Budaya Kiri Atas"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Foto Kiri Bawah */}
            <div className="absolute -bottom-16 -left-10 md:-bottom-10 md:-left-12 lg:-bottom-16 lg:left-8 transform rotate-[10deg] w-36 h-48 md:w-48 md:h-64 lg:w-[200px] lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-8 border-[#f5f1e8] transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto z-20">
                <Image
                    src="/img/anak2.png"
                    alt="Kuliner Kiri Bawah"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Foto Kanan Atas */}
            <div className="absolute -top-16 -right-10 md:-top-10 md:-right-12 lg:-top-6 lg:right-4 transform rotate-[15deg] w-36 h-48 md:w-48 md:h-64 lg:w-[200px] lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-8 border-[#f5f1e8] transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto z-10 hidden md:block">
                <Image
                    src="/img/anak3.png"
                    alt="Kesenian Kanan Atas"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Foto Kanan Bawah */}
            <div className="absolute -bottom-16 -right-10 md:-bottom-10 md:-right-12 lg:-bottom-16 lg:right-8 transform -rotate-[10deg] w-36 h-48 md:w-48 md:h-64 lg:w-[200px] lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-8 border-[#f5f1e8] transition-transform duration-700 hover:rotate-0 hover:scale-105 pointer-events-auto z-20">
                <Image
                    src="/img/anak4.png"
                    alt="Pemandangan Kanan Bawah"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
