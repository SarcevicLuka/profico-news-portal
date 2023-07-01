import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/latest.scss";
import RedDotIcon from "../icons/RedDotIcon";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import RightArrowIcon from "../icons/RightArrowIcon";
import LatestNewsCard from "../newsCards/LatestNewsCard";

function Latest() {
	return (
		<div className="latest-container">
			<div className="latest-title">
				<RedDotIcon />
				<div className="title">Latest news</div>
			</div>
			<div className="latest-body">
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
				<LatestNewsCard />
			</div>
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
