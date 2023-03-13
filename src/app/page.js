import Results from "@/components/Results";
import styles from "./page.module.css";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "trending" ? "trending/movie/week" : "movie/top_rated"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  return <Results results={results} />;
}
