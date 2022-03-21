import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import get from "../utils/httpClients";

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		get("/discover/movie").then((data) => {
			setMovies(data.results);
		});
	}, []);
	return (
		<ul className={styles.movieGrid}>
			{movies.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</ul>
	);
}
