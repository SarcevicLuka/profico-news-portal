import { useEffect, useState } from "react";
import NewsCard from "../newsCards/NewsCard";
import { Article } from "../../types/types";
import "../../assets/styles/favorites/favoritesGrid.scss";

function FavoritesGrid() {
	const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([]);

	useEffect(() => {
		const favorites = localStorage.getItem("favorites");
		if (favorites) setFavoriteArticles(JSON.parse(favorites));
	}, []);

	return (
		<div className="favorites-grid-container">
			{favoriteArticles.length === 0 ? (
				<div>No favorites</div>
			) : (
				favoriteArticles.map((article) => {
					return <NewsCard article={article} />;
				})
			)}
		</div>
	);
}

export default FavoritesGrid;
