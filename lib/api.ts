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