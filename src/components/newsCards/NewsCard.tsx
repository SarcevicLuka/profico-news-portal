import "../../assets/styles/newsBody/newsCard.scss";

function NewsCard() {
	return (
		<div className="card-container">
			<div className="card-image">
				<img src="../../assets/svg/placeholder.png" alt="Placeholder" />
			</div>
			<div className="card-info">
				<div className="category"></div>
				<div className="title"></div>
				<div className="author"></div>
			</div>
		</div>
	);
}

export default NewsCard;
