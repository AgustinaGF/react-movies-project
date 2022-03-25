import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import get from "../utils/httpClients";
import Spinner from "./Spinner";

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		get("/discover/movie").then((data) => {
			setMovies(data.results);
			setIsLoading(false);
		});
	}, []);
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<ul className={styles.movieGrid}>
			{movies.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</ul>
	);
}
