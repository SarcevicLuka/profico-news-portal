import "../../assets/styles/newsBody/newsBody.scss";
import LatestNews from "./LatestNews";

function NewsBody() {
	return (
		<div className="newsBody-container">
			<div className="news-card-grid-latest">
				<LatestNews />
			</div>
			<div className="news-card-grid-rest">Rest</div>
		</div>
	);
}

export default NewsBody;
