import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/newsCard.scss";
import { AvailableRoutes } from "../../routes/AvailableRoutes";

function NewsCard() {
	return (
		<Link to={AvailableRoutes.Latest}>
			<div className="newsCard-container">
				<div className="card-image">
					<img
						src="/src/assets/svg/placeholder.png"
						alt="Placeholder"
					/>
				</div>
				<div className="card-info">
					<div className="category-title">
						<div className="category">Tech</div>
						<div className="title">
							Some titleSome titleSome titleSome titleSome
							titleSome titleSome titleSome titleSome titleSome
							titleSome titleSome titleSome titleSome title
						</div>
					</div>
					<div className="card-info__author">Author Me</div>
				</div>
			</div>
		</Link>
	);
}

export default NewsCard;
