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
        { image: "/img/anak.png" },
        { image: "/img/anak2.png" },
        { image: "/img/anak3.png" },
        { image: "/img/anak4.png" },

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
        { word: "Anak dengan" },
        { word: "Sistem" },
        { word: "Siap Pakai" },
        { word: "Rasakan" },
        { word: "Punya" },
        { word: "Brand Sendiri" }
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
    ];
}

