// lib/whatsapp.ts

interface WhatsAppOptions {
    title?: string;
    price?: string;
    customMessage?: string;
}

export const sendWhatsApp = ({ title, price, customMessage }: WhatsAppOptions) => {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA aslimu
    let message = "";

    // 1. Jika ada pesan manual (Custom)
    if (customMessage) {
        message = customMessage;
    } 
    // 2. Jika ada Judul + Harga (Contoh: Klik dari Paket)
    else if (title && price) {
        message = `Halo Lamonte, saya tertarik dengan paket *${title}* seharga *${price}*. Bisa bantu jelaskan detailnya?`;
    } 
    // 3. Jika cuma ada Judul (Contoh: Klik dari Produk/Koleksi)
    else if (title) {
        message = `Halo Lamonte, saya mau tanya-tanya seputar produk *${title}* ini dong.`;
    } 
    // 4. Default (Chat Konsultasi Umum)
    else {
        message = `Halo Lamonte, saya ingin konsultasi mengenai kemitraan baju anak.`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};
