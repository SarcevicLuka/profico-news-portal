import Header from "../components/Header";
import FavoritesGrid from "../components/favorites/FavoritesBody";

function FavoritesPage() {
	return (
		<div>
			<Header />
			<div className="layout">
				<FavoritesGrid />
			</div>
		</div>
	);
}

export default FavoritesPage;
