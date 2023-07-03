import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/latestNewsCard.scss";
import { LatestArticle } from "../../types/types";

interface LatestNewsCardProps {
	latestArticle: LatestArticle;
}

function LatestNewsCard({ latestArticle }: LatestNewsCardProps) {
	//console.log(latestArticle);
	return (
		<div className="card-container">
			<div className="time">{latestArticle.publishedAt}</div>
			<div className="title">
				<Link to={"/"}>{latestArticle.title}</Link>
			</div>
			<hr id="latest-news-divider" />
		</div>
	);
}

export default LatestNewsCard;
