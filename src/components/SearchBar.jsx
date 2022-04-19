import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import useQuery from "./hooks/useQuery";

export default function SearchBar() {
	const history = useHistory();
	const query = useQuery();
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
					value={search}
					onChange={(e) => {
						// debounce
						const value = e.target.value;

						history.push("/?search=" + value);
					}}
				></input>
				<button className={styles.searchButton} type="submit">
					{/* el icono lo pongo como componente */}
					<FaSearch size={20} />
				</button>
			</div>
		</form>
	);
}
