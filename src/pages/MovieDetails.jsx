import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
	const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
	return (
		<div className={styles.detailsContainer}>
			<img
				className={`${styles.column} ${styles.movieImg}`}
				src={imageUrl}
				alt={movie.title}
			/>
			<div className={styles.column}>
				<p>
					<strong> Title:</strong>
					{movie.title}
				</p>
				<p>
					<strong> Description:</strong> {movie.overview}
				</p>

				<p>
					<strong>Genres:</strong>
					{movie.genres.map((genre) => genre.name).join(", ")}
				</p>
			</div>
		</div>
	);
}
