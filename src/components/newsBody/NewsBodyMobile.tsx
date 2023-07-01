import { useState } from "react";
import "../../assets/styles/newsBody/newsBodyDeskTopMobile.scss";
import { NewsToggle } from "../../types/enums";
import NewsCard from "../newsCards/NewsCard";
import Latest from "./Latest";

function NewsBodyMobile() {
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
				{toggle === "latest" && (
					<div className="grid-item latest">
						<Latest />
					</div>
				)}
				{toggle === "featured" && (
					<>
						<div className="grid-item">
							<NewsCard />
						</div>
						<div className="grid-item">
							<NewsCard />
						</div>
						<div className="grid-item">
							<NewsCard />
						</div>
						<div className="grid-item">
							<NewsCard />
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default NewsBodyMobile;
