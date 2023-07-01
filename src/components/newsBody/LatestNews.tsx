import "../../assets/styles/newsBody/latestNews.scss";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";

function LatestNews() {
	return (
		<div className="grid-container">
			<div className="grid-item latest">
				<Latest />
			</div>
			<div className="grid-item">
				<NewsCard />
			</div>
			<div className="grid-item">
				<NewsCard />
			</div>
			<div className="grid-item">
				<NewsCard />
			</div>
			<div className="grid-item">
				<NewsCard />
			</div>
		</div>
	);
}

export default LatestNews;
