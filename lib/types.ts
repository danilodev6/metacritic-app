export interface RawGame {
  name: string;
  slug: string;
  released: string | null;
  short_description?: string;
  rating: number;
  background_image: string;
}

export interface Game {
  title: string;
  slug: string;
  releaseDate: string | null;
  description: string;
  score: number;
  image: string;
}

export interface RawGameDetails {
  name: string;
  description_raw: string;
  rating: number;
  background_image: string;
}

export interface RawReview {
  text: string;
  rating: number;
  created: string;
  user?: { username: string };
}

export interface Review {
  quote: string;
  score: number;
  date: string;
  publicationName: string;
  author: string;
}

export interface GameDetails {
  slug: string;
  title: string;
  description: string;
  score: number;
  img: string;
  reviews: Review[];
}
