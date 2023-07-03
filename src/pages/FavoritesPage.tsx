import Header from "../components/Header";
import FavoritesGrid from "../components/favorites/FavoritesBody";
import NavBar from "../components/navigation/NavBar";

function FavoritesPage() {
	return (
		<div>
			<Header />
			<div className="layout">
				<NavBar />
				<FavoritesGrid />
			</div>
		</div>
	);
}

export default FavoritesPage;
