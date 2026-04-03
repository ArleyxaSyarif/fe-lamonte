export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full z-[110] flex justify-center mt-6 px-4">
            <div className="flex justify-between items-center w-full max-w-4xl bg-[#fcfaef]/90 backdrop-blur-md rounded-full px-6 py-3 border border-[#d3c4b7] shadow-sm">

                {/* Brand Logo - Kiri */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined text-[#967451] text-2xl rotate-45">
                        spa
                    </span>
                    <span className="text-xl font-headline font-bold text-[#4c4033]">
                        Lamonte.
                    </span>
                </div>

                {/* Navigation Links - Tengah */}
                <div className="hidden lg:flex items-center gap-8">
                    <a href="#" className="text-sm font-body text-[#7d7168] hover:text-[#4c4033] transition-colors">
                        Artikel
                    </a>
                    <a href="#" className="text-sm font-body text-[#7d7168] hover:text-[#4c4033] transition-colors">
                        Destinasi
                    </a>
                    <a href="#" className="text-sm font-body text-[#7d7168] hover:text-[#4c4033] transition-colors">
                        Peringkat
                    </a>
                    <a href="#" className="text-sm font-body text-[#7d7168] hover:text-[#4c4033] transition-colors">
                        Game
                    </a>
                </div>

                {/* Profile Button - Kanan */}
                <div className="flex items-center">
                    <button className="bg-[#a3805b] text-white w-10 h-10 rounded-full font-bold flex items-center justify-center transition-transform hover:scale-105 shadow-md">
                        S
                    </button>
                </div>

            </div>
        </nav>
    );
}

