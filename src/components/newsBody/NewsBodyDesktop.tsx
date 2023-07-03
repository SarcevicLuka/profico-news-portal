import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";
import InfiniteScroll from "react-infinite-scroll-component";
import { NewsBodyMobileDesktopProps } from "./NewsBodyMobile";

function NewsBodyDesktop({
	articles,
	setPage,
	handleArticles
}: NewsBodyMobileDesktopProps) {
	return (
		<>
			<InfiniteScroll
				next={function () {
					console.log("Body infinite scroll");
					setPage((prev) => prev + 1);
					handleArticles();
				}}
				hasMore={true}
				loader={<p>Loading...</p>}
				dataLength={articles.length}
			>
				<div className="grid-container">
					<div className="grid-item latest">
						<Latest />
					</div>

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
				</div>
			</InfiniteScroll>
		</>
	);
}

export default NewsBodyDesktop;
