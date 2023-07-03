import { useState } from "react";
import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import { NewsToggle } from "../../types/enums";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";
import InfiniteScroll from "react-infinite-scroll-component";
import { Article } from "../../types/types";

export interface NewsBodyMobileDesktopProps {
	articles: Article[];
	searchResults: Article[];
	setPage: React.Dispatch<React.SetStateAction<number>>;
	handleArticles: () => Promise<void>;
}

function NewsBodyMobile({
	articles,
	searchResults,
	setPage,
	handleArticles
}: NewsBodyMobileDesktopProps) {
	// Don't have to split the news, just put everything in a grid that exists
	const [toggle, setToggle] = useState<NewsToggle>(NewsToggle.Featured);

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
				<InfiniteScroll
					next={function () {
						setPage((prev) => prev + 1);
						handleArticles();
					}}
					hasMore={true}
					loader={<p></p>}
					dataLength={articles.length}
				>
					{toggle === "latest" && (
						<div className="grid-item latest">
							<Latest />
						</div>
					)}
				</InfiniteScroll>
				{toggle === "featured" && (
					<>
						<InfiniteScroll
							next={function () {
								setPage((prev) => prev + 1);
								handleArticles();
							}}
							hasMore={true}
							loader={<p>Loading...</p>}
							dataLength={articles.length}
						>
							{searchResults.length > 0
								? searchResults?.map((article) => {
										return (
											<div className="grid-item">
												<NewsCard
													key={article.apiId}
													article={article}
												/>
											</div>
										);
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  })
								: articles?.map((article) => {
										return (
											<div className="grid-item">
												<NewsCard
													key={article.apiId}
													article={article}
												/>
											</div>
										);
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  })}
						</InfiniteScroll>
					</>
				)}
			</div>
		</>
	);
}

export default NewsBodyMobile;
