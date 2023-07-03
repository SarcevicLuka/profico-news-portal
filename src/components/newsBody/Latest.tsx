import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/newsBody/latest.scss";
import RedDotIcon from "../icons/RedDotIcon";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import RightArrowIcon from "../icons/RightArrowIcon";
import LatestNewsCard from "../newsCards/LatestNewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useRef, useState } from "react";
import { LatestArticle } from "../../types/types";
import { CategoryQueriesByPage, QueryParameters } from "../../types/enums";
import { getArticles } from "../../api/articles/apiCalls";

function Latest() {
	const location = useLocation();
	const path = location.pathname.substring(1);

	const [page, setPage] = useState<number>(0);
	const [latestArticles, setLatestArticles] = useState<LatestArticle[]>([]);
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
			filterParams.append(QueryParameters.FilterQuery, path);
		}
		filterParams.append(QueryParameters.Page, page.toString());
		filterParams.append(QueryParameters.Sort, "newest");

		getArticles(filterParams)
			.then((response) => {
				console.log(response.data);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				response.data.response.docs.forEach((data: any) => {
					const article: LatestArticle = {
						title: data.abstract,
						publishedAt: data.pub_date.substring(11, 16),
						//image: articleData.
						url: data.url,
						apiId: data._id
					};

					setLatestArticles((current) => [...current, article]);
				});
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setPage((prev) => prev + 1);
			});
	};

	useEffect(() => {
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		handleArticles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="latest-container">
			<div className="latest-title">
				<RedDotIcon />
				<div className="title">Latest news</div>
			</div>
			<InfiniteScroll
				next={function () {
					console.log("Latest infinite scroll");
					handleArticles();
				}}
				hasMore={true}
				loader={<p></p>}
				dataLength={latestArticles.length}
				scrollableTarget={"latest-news-widget"}
			>
				<div className="latest-body" id="latest-news-widget">
					{latestArticles?.map((article) => {
						return <LatestNewsCard latestArticle={article} />;
					})}
				</div>
			</InfiniteScroll>
			<div className="latest-footer">
				<Link to={AvailableRoutes.Latest}>
					See all news
					<RightArrowIcon />
				</Link>
			</div>
		</div>
	);
}

export default Latest;
