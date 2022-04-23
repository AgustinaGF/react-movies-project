import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
	const [query, setQuery] = useSearchParams();
	const search = query.get("search");

	// funcionalidad de la barra de busqueda
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={styles.searchContainer} onSubmit={handleSubmit}>
			<div className={styles.searchBox}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Title"
					aria-label="Search Movies"
					value={search}
					onChange={(e) => {
						// debounce
						const value = e.target.value;
						setQuery({ search: value });
					}}
				></input>
				{/* el icono lo pongo como componente */}
				<FaSearch color="black" className={styles.searchButton} size={20} />
			</div>
		</form>
	);
}
