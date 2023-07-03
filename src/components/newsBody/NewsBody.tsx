import { useEffect, useRef, useState } from "react";
import "../../assets/styles/newsBody/newsBody.scss";
import NewsBodyDesktop from "./NewsBodyDesktop";
import NewsBodyMobile from "./NewsBodyMobile";
import { useLocation } from "react-router-dom";
import { Article } from "../../types/types";
import { CategoryQueriesByPage, QueryParameters } from "../../types/enums";
import { getArticles } from "../../api/articles/apiCalls";

interface NewsBodyProps {
	searchResults: Article[];
}

function NewsBody({ searchResults }: NewsBodyProps) {
	console.log(searchResults);

	const location = useLocation();
	const path = location.pathname.substring(1);

	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [page, setPage] = useState<number>(0);
	const [articles, setArticles] = useState<Article[]>([]);
	const dataFetchedRef = useRef(false);

	const handleArticles = async () => {
		const filterParams = new URLSearchParams();
		if (path === "/") {
			filterParams.append(
				QueryParameters.FilterQuery,
				CategoryQueriesByPage.MainPage
			);
		} else if (path === "general") {
			filterParams.append(
				QueryParameters.FilterQuery,
				CategoryQueriesByPage.General
			);
		} else {
			const queryParam = `news_desk:("${path}")`;
			filterParams.append(QueryParameters.FilterQuery, queryParam);
		}
		filterParams.append(QueryParameters.Page, page.toString());
		filterParams.append(QueryParameters.Sort, "relevance");

		getArticles(filterParams)
			.then((response) => {
				console.log(response.data);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				response.data.response.docs.forEach((data: any) => {
					const article: Article = {
						title: data.abstract,
						category: data.news_desk,
						author: data.byline.original?.substring(3),
						//image: articleData.
						url: data.url,
						apiId: data._id,
						isFavorite: false
					};

					setArticles((current) => [...current, article]);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		handleArticles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const checkIsMobile = () => {
		setIsMobile(window.innerWidth <= 767);
	};

	useEffect(() => {
		window.addEventListener("resize", checkIsMobile);
		checkIsMobile(); // Initial check

		return () => {
			window.removeEventListener("resize", checkIsMobile);
		};
	}, []);

	return (
		<div className="newsBody-container">
			<div className="news-card-grid-latest">
				{isMobile ? (
					<NewsBodyMobile
						articles={articles}
						setPage={setPage}
						handleArticles={handleArticles}
						searchResults={searchResults}
					/>
				) : (
					<NewsBodyDesktop
						articles={articles}
						setPage={setPage}
						handleArticles={handleArticles}
						searchResults={searchResults}
					/>
				)}
			</div>
		</div>
	);
}

export default NewsBody;
