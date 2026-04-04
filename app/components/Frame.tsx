export default function Frame() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-100">
            {/* Top Right */}
            <div className="absolute top-4 right-4 text-[#967451] w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
                <CornerOrnament className="w-full h-full transform scale-x-[-1]" />
            </div>
            
            {/* Top Left */}
            <div className="absolute top-4 left-4 text-[#967451] w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
                <CornerOrnament className="w-full h-full" />
            </div>
            
            {/* Bottom Left - Hidden on mobile to avoid overlap with bottom navbar */}
            <div className="absolute bottom-4 left-4 text-[#967451] w-24 h-24 hidden md:block">
                <CornerOrnament className="w-full h-full transform scale-y-[-1]" />
            </div>
            
            {/* Bottom Right - Hidden on mobile to avoid overlap with bottom navbar */}
            <div className="absolute bottom-4 right-4 text-[#967451] w-24 h-24 hidden md:block">
                <CornerOrnament className="w-full h-full transform scale-[-1]" />
            </div>
        </div>
    );
}

function CornerOrnament({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 180 L 20 50 C 20 33.431 33.431 20 50 20 L 180 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M 20 195 L 20 185 M 195 20 L 185 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M 35 150 L 35 60 C 35 46.193 46.193 35 60 35 L 150 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M 50 50 C 80 50 100 80 130 80 C 150 80 160 60 150 40 C 140 20 110 30 110 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M 50 50 C 50 80 80 100 80 130 C 80 150 60 160 40 150 C 20 140 30 110 50 110" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
            <circle cx="145" cy="60" r="3" fill="currentColor" />
            <circle cx="60" cy="145" r="3" fill="currentColor" />
            <circle cx="45" cy="45" r="4" fill="currentColor" />
        </svg>
    );
}
