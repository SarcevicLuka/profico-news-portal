import { useEffect, useRef, useState } from "react";
import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import {
	CategoryQueriesByPage,
	NewsToggle,
	QueryParameters
} from "../../types/enums";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";
import { Article } from "../../types/types";
import { useLocation } from "react-router-dom";
import { getArticles } from "../../api/articles/apiCalls";

function NewsBodyMobile() {
	// Don't have to split the news, just put everything in a grid that exists
	const [toggle, setToggle] = useState<NewsToggle>(NewsToggle.Featured);

	const location = useLocation();
	const path = location.pathname.substring(1);

	const [page, setPage] = useState<number>(1);
	const [articles, setArticles] = useState<Article[]>([]);
	const dataFetchedRef = useRef(false);
	//const [latestArticles, setLatestArticles] = useState<LatestArticle[]>([]);

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
			filterParams.append(QueryParameters.FilterQuery, path);
		}
		filterParams.append(QueryParameters.Page, page.toString());

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
						apiId: data._id
					};

					setArticles((current) => [...current, article]);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		console.log("UseEffect from desktop");
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		handleArticles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="news-toggle">
				<button
					onClick={() => setToggle(NewsToggle.Featured)}
					className={toggle === "featured" ? "active" : ""}
				>
					Featured
				</button>
				<button
					onClick={() => setToggle(NewsToggle.Latest)}
					className={toggle === "latest" ? "active" : ""}
				>
					Latest
				</button>
			</div>
			<div className="grid-container">
				{toggle === "latest" && (
					<div className="grid-item latest">
						<Latest />
					</div>
				)}
				{toggle === "featured" && (
					<>
						{articles?.map((article) => {
							return (
								<div className="grid-item">
									<NewsCard
										key={article.apiId}
										article={article}
									/>
								</div>
							);
						})}
					</>
				)}
			</div>
		</>
	);
}

export default NewsBodyMobile;
