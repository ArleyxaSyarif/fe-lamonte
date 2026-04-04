export async function getPosts() {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
    //     { cache: "no-store" }
    // );

    // if (!res.ok) {
    //     throw new Error("Failed to fetch posts");
    // }

    // return res.json();

    // DUMMY DATA FOR PRODUCTS
    return [
        { image: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1539109132381-31a15b2974aa?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1539109132381-31a15b2974aa?w=800&q=80" }
    ];
}


export async function getWords() {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/api/words`,
    //     { cache: "no-store" }
    // )

    // if (!res.ok) {
    //     throw new Error("Failed to fetch words");
    // }

    // return res.json();

    // DUMMY DATA FOR HERO SECTION
    return [
        { word: "Reseller" },
        { word: "Agen" },
        { word: "Distributor" },
        { word: "Mitra Sukses" },
        { word: "Bisnis Berkah" }
    ];
}

export async function getTestimonis() {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/api/testimonis`,
    //     { cache: "no-store" }
    // )

    // if (!res.ok) {
    //     throw new Error("Failed to fetch testimonis");
    // }

    // return res.json();

    // DUMMY DATA FOR TESTIMONIALS
    return [
        { fotos: "/testimonials/chat1.png" },
        { fotos: "/testimonials/chat2.png" },
        { fotos: "/testimonials/chat3.png" },
        { fotos: "/testimonials/package1.png" },
        { fotos: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
        { fotos: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" }
    ];
}

