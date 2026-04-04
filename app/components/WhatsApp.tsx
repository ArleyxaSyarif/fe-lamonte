'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React, { useState } from 'react';

export default function WhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-6 md:bottom-10 md:right-28 z-[60] flex flex-col items-end gap-4 font-body transition-all duration-500">

            {/* Box Popup */}
            {isOpen && (
                <div className="w-[calc(100vw-3rem)] sm:w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#1a3c04]/10 animate-in fade-in slide-in-from-bottom-4 duration-300 mb-2">
                    {/* Header Popup */}
                    <div className="bg-[#1a3c04] p-4 text-white flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/80">person</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#f4e04d] border-2 border-[#1a3c04] rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-none">Admin Lamonte</p>
                            <p className="text-[10px] opacity-80">Online • Siap membantu</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="ml-auto p-1 hover:opacity-70 transition-opacity">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    <div className="p-4 bg-[#fefae6] min-h-[100px] relative">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-sm text-[#1a3c04]">
                            Halo! Ada yang bisa kami bantu mengenai paket atau strategi kami hari ini? 😊
                        </div>
                        <p className="text-[9px] text-[#1a3c04]/50 mt-1 pl-1">Baru saja</p>
                    </div>

                    <div className="p-3 bg-white">
                        <button
                            onClick={() => sendWhatsApp({ customMessage: "Halo Tim Lamonte, saya tertarik jadi mitra" })}
                            className="w-full flex items-center justify-center gap-2 bg-[#1a3c04] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a3c04]/90 shadow-md active:scale-95"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            MULAI CHAT SEKARANG
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center gap-3 p-4 sm:px-6 sm:py-3 rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen ? 'bg-[#1a3c04] text-white' : 'bg-[#f4e04d] text-[#1a3c04]'}`}
            >
                <span className="material-symbols-outlined text-2xl">
                    {isOpen ? 'close' : 'chat_bubble'}
                </span>
                <span className="hidden sm:inline tracking-wider uppercase text-sm">
                    {isOpen ? 'Tutup' : 'Tanya Admin'}
                </span>
            </button>
        </div>
    );
}
