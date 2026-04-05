'use client';

import { sendWhatsApp } from '@/lib/whatsapp';
import React, { useState } from 'react';

export default function WhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-6 md:bottom-10 md:right-28 z-[60] flex flex-col items-end gap-4 font-body transition-all duration-500">

            {/* Box Popup */}
            {isOpen && (
                <div className="w-[calc(100vw-3rem)] sm:w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#1a1c1a]/10 animate-in fade-in slide-in-from-bottom-4 duration-300 mb-2">
                    {/* Header Popup */}
                    <div className="bg-[#232722] p-4 text-white flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/80">person</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#ffaa00] border-2 border-[#232722] rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-none">Admin Lamonte</p>
                            <p className="text-[10px] opacity-80">Online • Siap membantu</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="ml-auto p-1 hover:opacity-70 transition-opacity">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    <div className="p-4 bg-[#f9f9f9] min-h-[100px] relative">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-sm text-[#1a1c1a]">
                            Halo! Ada yang bisa kami bantu mengenai paket atau strategi kami hari ini? 😊
                        </div>
                        <p className="text-[9px] text-[#1a1c1a]/40 mt-1 pl-1">Baru saja</p>
                    </div>

                    <div className="p-3 bg-white">
                        <button
                            onClick={() => sendWhatsApp({ customMessage: "Halo Tim Lamonte, saya tertarik jadi mitra" })}
                            className="w-full flex items-center justify-center gap-2 bg-[#ffaa00] text-[#232722] py-3 rounded-xl font-bold text-sm hover:bg-[#ffaa00]/90 shadow-md active:scale-95"
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            MULAI CHAT SEKARANG
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-[#232722] text-white' : 'bg-[#25D366] text-white'}`}
                aria-label="WhatsApp"
            >
                {isOpen ? (
                    <span className="material-symbols-outlined text-2xl">close</span>
                ) : (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
