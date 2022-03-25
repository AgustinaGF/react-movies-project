import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import get from "../utils/httpClients";
import Spinner from "../components/Spinner";

export function MovieDetails() {
	// este nos va a traer el id que viene como parametro
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		get("/movie/" + movieId).then((data) => {
			setIsLoading(false);
			setMovie(data);
		});
	}, [movieId]);

	if (isLoading) {
		return <Spinner />;
	}

	if (!movie) {
		return null;
	}
	const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
	return (
		<div className={styles.detailsContainer}>
			<img
				className={`${styles.column} ${styles.movieImg}`}
				src={imageUrl}
				alt={movie.title}
			/>
			<div className={`${styles.column} ${styles.movieData}`}>
				<p className={styles.firstItem}>
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
