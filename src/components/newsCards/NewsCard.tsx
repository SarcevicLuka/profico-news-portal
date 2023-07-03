import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/newsCard.scss";
import { Article } from "../../types/types";

interface NewsCardProps {
	article: Article;
}

function NewsCard({ article }: NewsCardProps) {
	//console.log(article);

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
					<div className="card-info__author">
						{article.author ? article.author : "No author"}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default NewsCard;
