import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import useQuery from "./hooks/useQuery";

export default function SearchBar() {
	const [searchText, setSearchText] = useState("");
	const history = useHistory();
	const query = useQuery();
	const search = query.get("search");

	// funcionalidad de la barra de busqueda
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push("/?search=" + searchText);
	};
	useEffect(() => {
		setSearchText(search || "");
	}, [search]);

	return (
		<form className={styles.searchContainer} onSubmit={handleSubmit}>
			<div className={styles.searchBox}>
				<input
					className={styles.searchInput}
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				></input>
				<button className={styles.searchButton} type="submit">
					{/* el icono lo pongo como componente */}
					<FaSearch size={20} />
				</button>
			</div>
		</form>
	);
}
