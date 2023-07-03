import "../../assets/styles/newsBody/newsCategoriesBody.scss";
import Categories from "../navigation/Categories";
import NewsBody from "./NewsBody";

//interface NewsCategoriesBodyProps {
//	searchTerm: string;
//}

function NewsCategoriesBody() {
	return (
		<div className="news-body-container">
			<div className="categories">
				<Categories />
			</div>
			<div className="news">
				<div className="news-title">News</div>
				<NewsBody />
			</div>
		</div>
	);
}

export default NewsCategoriesBody;
