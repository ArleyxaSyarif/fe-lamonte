export async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
}


export async function getWords() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/words`,
        { cache: "no-store" }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch words");
    }

    return res.json();
}

export async function getTestimonis() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/testimonis`,
        { cache: "no-store" }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch testimonis");
    }

    return res.json();
}

