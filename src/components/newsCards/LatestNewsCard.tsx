import { Link } from "react-router-dom";
import "../../assets/styles/newsBody/latestNewsCard.scss";

function LatestNewsCard() {
	return (
		<div className="card-container">
			<div className="time">12:30</div>
			<div className="title">
				<Link to={"/"}>
					JHF OIDJF sdoijfsjfodsjfds fsdijf sd JHF OIDJF
					sdoijfsjfodsjfds fsdijf sd JHF OIDJF sdoijfsjfodsjfds fsdijf
					sd JHF OIDJF sdoijfsjfodsjfds fsdijf sd
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default LatestNewsCard;
