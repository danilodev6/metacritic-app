import Constants from "expo-constants";
import type { Game, GameDetails, RawGame, RawReview, Review } from "./types";

const RAWG_BASE = "https://api.rawg.io/api";

export async function getLatestGames(): Promise<Game[]> {
  const apiKey = Constants.expoConfig?.extra?.RAWG_API_KEY;
  if (!apiKey) {
    throw new Error("RAWG_API_KEY not set in app.json extra");
  }

  const res = await fetch(`${RAWG_BASE}/games?ordering=-rating&page_size=24&key=${apiKey}`);

  if (!res.ok) {
    throw new Error(`RAWG API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (!json.results) {
    throw new Error(json.detail || "No results from RAWG API");
  }

  return json.results.map(
    (item: RawGame): Game => ({
      title: item.name,
      slug: item.slug,
      releaseDate: item.released,
      description: item.short_description ?? "",
      score: Math.round(item.rating * 20), // 0–5 → 0–100
      image: item.background_image,
    })
  );
}

export async function getGameDetails(slug: string): Promise<GameDetails> {
  const apiKey = Constants.expoConfig?.extra?.RAWG_API_KEY;
  if (!apiKey) {
    throw new Error("RAWG_API_KEY not set in app.json extra");
  }

  const res = await fetch(`${RAWG_BASE}/games/${slug}?key=${apiKey}`);

  if (!res.ok) {
    throw new Error(`RAWG API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  // reviews (usuarios)
  const reviewsRes = await fetch(`${RAWG_BASE}/games/${slug}/reviews?key=${apiKey}`);

  if (!reviewsRes.ok) {
    throw new Error(`RAWG reviews API error: ${reviewsRes.status} ${reviewsRes.statusText}`);
  }

  const reviewsJson = await reviewsRes.json();

  return {
    slug,
    title: json.name,
    description: json.description_raw,
    score: Math.round(json.rating * 20),
    img: json.background_image,
    reviews: reviewsJson.results.map(
      (r: RawReview): Review => ({
        quote: r.text,
        score: Math.round(r.rating * 20),
        date: r.created,
        author: r.user?.username ?? "anonymous",
        publicationName: "RAWG users",
      })
    ),
  };
}
