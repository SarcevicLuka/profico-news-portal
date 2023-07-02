import { useEffect, useState } from "react";
import "../../assets/styles/newsBody/newsBody.scss";
import NewsBodyDesktop from "./NewsBodyDesktop";
import NewsBodyMobile from "./NewsBodyMobile";

function NewsBody() {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const checkIsMobile = () => {
		setIsMobile(window.innerWidth <= 767);
	};

	useEffect(() => {
		console.log("Use Effect from NewsCategoriesBody");
		window.addEventListener("resize", checkIsMobile);
		checkIsMobile(); // Initial check

		return () => {
			window.removeEventListener("resize", checkIsMobile);
		};
	}, []);

	return (
		<div className="newsBody-container">
			<div className="news-card-grid-latest">
				{isMobile ? <NewsBodyMobile /> : <NewsBodyDesktop />}
			</div>
		</div>
	);
}

export default NewsBody;
