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
        { fotos: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" },
        { fotos: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
        { fotos: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=800&q=80" },
        { fotos: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
        { fotos: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" }
    ];
}

