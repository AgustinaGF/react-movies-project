import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
	return (
		<form className={styles.searchContainer}>
			<div className={styles.searchBox}>
				<input className={styles.searchInput}></input>
				<button className={styles.searchButton} type="submit">
					{/* el icono lo pongo como componente */}
					<FaSearch size={20} />
				</button>
			</div>
		</form>
	);
}
