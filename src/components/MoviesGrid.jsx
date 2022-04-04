import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import get from "../utils/httpClients";
import Spinner from "./Spinner";
import useQuery from "./hooks/useQuery";

export default function MoviesGrid() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const query = useQuery();
	// esto nos va a traer el valor de search que pasamos en el parametro
	const search = query.get("search");
	console.log(search);

	useEffect(() => {
		setIsLoading(true);
		// aca lo que hace es buscar por el valor de busqueda que paso y si no hay busqueda me va a traer todas las peliculas
		const searchUrl = search
			? "/search/movie?query=" + search
			: "/discover/movie";
		get(searchUrl).then((data) => {
			setMovies(data.results);
			setIsLoading(false);
		});
	}, [search]);
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
