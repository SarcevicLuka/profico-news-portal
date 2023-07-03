import "../../assets/styles/newsBody/newsCategoriesBody.scss";
import { Article } from "../../types/types";
import Categories from "../navigation/Categories";
import NewsBody from "./NewsBody";

interface NewsCategoriesBodyProps {
	searchResults: Article[];
}

function NewsCategoriesBody({ searchResults }: NewsCategoriesBodyProps) {
	return (
		<div className="news-body-container">
			<div className="categories">
				<Categories />
			</div>
			<div className="news">
				<div className="news-title">News</div>
				<NewsBody searchResults={searchResults} />
			</div>
		</div>
	);
}

export default NewsCategoriesBody;
