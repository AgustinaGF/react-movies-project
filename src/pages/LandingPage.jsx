import useQuery from "../components/hooks/useQuery";
import MoviesGrid from "../components/MoviesGrid";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../components/hooks/useDebounce";

export default function LandingPage() {
	const query = useQuery();
	// esto nos va a traer el valor de search que pasamos en el parametro
	const search = query.get("search");
	// aca le paso la cantidad de tiempo que quiero que espere hasta que se ejecute
	const debounceSearch = useDebounce(search, 300);
	return (
		<div>
			<SearchBar />
			<MoviesGrid key={debounceSearch} search={debounceSearch} />
		</div>
	);
}
