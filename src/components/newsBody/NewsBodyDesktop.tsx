import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";

function NewsBodyDesktop() {
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

export default NewsBodyDesktop;
