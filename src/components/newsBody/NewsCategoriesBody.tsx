import "../../assets/styles/newsBody/newsCategoriesBody.scss";
import Categories from "../Categories";
import NewsBody from "./NewsBody";

function NewsCategoriesBody() {
	return (
		<div className="news-body-container">
			<div className="categories">
				<Categories />
			</div>
			<div className="news">
				<NewsBody />
			</div>
		</div>
	);
}

export default NewsCategoriesBody;
