'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React, { useState } from 'react';

export default function WhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        /* Adjusted positioning: closer to the edge (right-6) on mobile, further (right-28) on desktop */
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-28 z-[60] flex flex-col items-end gap-4 font-body">

            {/* Box Popup */}
            {isOpen && (
                /* Responsive width: full width minus margins on extra small screens */
                <div className="w-[calc(100vw-3rem)] sm:w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100 animate-in fade-in slide-in-from-bottom-4 duration-300 mb-2">
                    {/* Header Popup */}
                    <div className="bg-[#075E54] p-4 text-white flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center bg-primary/20">
                                    <span className="material-symbols-outlined text-primary">person</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-none">Admin Heritage</p>
                            <p className="text-[10px] opacity-80">Online • Siap membantu</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="ml-auto p-1 hover:opacity-70 transition-opacity"
                        >
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    {/* Body Popup */}
                    <div className="p-4 bg-[#e5ddd5] min-h-[100px] relative">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-sm text-stone-800">
                            Halo! Ada yang bisa kami bantu mengenai paket atau strategi kami hari ini? 😊
                        </div>
                        <p className="text-[9px] text-stone-500 mt-1 pl-1">Baru saja</p>
                    </div>

                    {/* Footer / Send Button */}
                    <div className="p-3 bg-white">
                        <button
                            onClick={() => sendWhatsApp({ customMessage: "Halo Tim Lamonte, saya tertarik jadi mitra Lamonte. Tolong kirimkan detail paket dan cara daftarnya ya." })}
                            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#20ba59] transition-colors shadow-md active:scale-95"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            MULAI CHAT SEKARANG
                        </button>
                    </div>
                </div>
            )}

            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center gap-3 p-4 sm:px-6 sm:py-3 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen
                    ? 'bg-stone-800 text-white'
                    : 'bg-[#25D366] text-white'
                    }`}
            >
                <span className="material-symbols-outlined text-2xl">
                    {isOpen ? 'close' : 'chat_bubble'}
                </span>
                {/* Text is hidden on mobile to prevent overlapping other UI elements */}
                <span className="hidden sm:inline tracking-wider uppercase text-sm">
                    {isOpen ? 'Tutup' : 'Tanya Admin'}
                </span>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
                    </span>
                )}
            </button>
        </div>
    );
}
