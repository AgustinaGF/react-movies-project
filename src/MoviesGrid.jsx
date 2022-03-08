import MovieCard from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";

export default function MoviesGrid() {
	return (
		<ul className={styles.movieGrid}>
			{movies.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</ul>
	);
}
