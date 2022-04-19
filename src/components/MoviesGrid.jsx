import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import get from "../utils/httpClients";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MoviesGrid({ search }) {
	const [movies, setMovies] = useState([]);
	// con esto cambio el estado de pagina
	const [page, setPage] = useState(1);
	const [hasMore, setHasmore] = useState(true);

	useEffect(() => {
		// aca lo que hace es buscar por el valor de busqueda que paso y si no hay busqueda me va a traer todas las peliculas
		const searchUrl = search
			? "/search/movie?query=" + search + "&page=" + page
			: "/discover/movie?page=" + page;
		get(searchUrl).then((data) => {
			setMovies((prevMovies) => prevMovies.concat(data.results));
			setHasmore(data.page < data.total_pages);
		});
		//si cambia la busqueda o la pagina se va a volver a ejecutar el useEffect
	}, [search, page]);

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={() => setPage((prevPage) => prevPage + 1)}
			loader={<Spinner />}
		>
			<ul className={styles.movieGrid}>
				{movies.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />;
				})}
			</ul>
		</InfiniteScroll>
	);
}
