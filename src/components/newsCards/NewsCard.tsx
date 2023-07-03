import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/newsCard.scss";
import { Article } from "../../types/types";
import StarIcon from "../icons/StarIcon";
import { useEffect, useState } from "react";

interface NewsCardProps {
	article: Article;
}

function NewsCard({ article }: NewsCardProps) {
	const [isFavorite, setIsFavorite] = useState<boolean>(article.isFavorite);

	const handleFavorite = () => {
		let array: Article[] = [];
		article.isFavorite = !article.isFavorite;
		const favorites: string | null = localStorage.getItem("favorites");
		if (favorites) {
			console.log("Favorites exist");
			array = JSON.parse(favorites);
			const art = array.filter((a) => a.title === article.title);
			console.log(art);

			if (art.length > 0) {
				array = array.filter((a) => a.title !== article.title);
			} else {
				console.log("New article");
				array.push(article);
			}
		} else {
			array.push(article);
		}
		localStorage.setItem("favorites", JSON.stringify(array));
	};

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useEffect(() => {}, [isFavorite]);

	return (
		<Link to={article.url}>
			<div className="newsCard-container">
				<div className="card-image">
					<img
						src="/src/assets/svg/placeholder.png"
						alt="Placeholder"
					/>
				</div>
				<div className="card-info">
					<div className="category-title">
						<div className="category">
							{article.category ? article.category : "SPORTS"}
						</div>
						<div className="title">
							{article.title ? article.title : "Some title"}
						</div>
					</div>
					<div className="card-footer">
						<div className="card-info__author">
							{article.author ? article.author : "No author"}
						</div>
						<div
							className="card-info__favorite"
							onClick={() => {
								setIsFavorite((prev) => !prev);
								handleFavorite();
							}}
						>
							<button
								className={
									isFavorite || article.isFavorite
										? "card-info__favorite__toggle active"
										: "card-info__favorite__toggle"
								}
							>
								<StarIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default NewsCard;
