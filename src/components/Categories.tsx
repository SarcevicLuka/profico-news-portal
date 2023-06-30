import { Link, useLocation } from "react-router-dom";
import "../assets/styles/categories.scss";
import BusinessIcon from "./icons/BusinessIcon";
import GeneralIcon from "./icons/GeneralIcon";
import HealthIcon from "./icons/HealthIcon";
import HomeIcon from "./icons/HomeIcon";
import ScienceIcon from "./icons/ScienceIcon";
import SportsIcon from "./icons/SportsIcon";
import TechIcon from "./icons/TechIcon";
import { AvailableRoutes } from "../routes/AvailableRoutes";

function Categories() {
	const location = useLocation();
	const path = location.pathname;
	console.log(path);

	return (
		<div className="categories-container">
			<Link to={AvailableRoutes.Home}>
				<div
					className={
						path === "/" ? "category-item active" : "category-item"
					}
				>
					<HomeIcon />
					<p>Home</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.General}>
				<div
					className={
						path === "/general"
							? "category-item active"
							: "category-item"
					}
				>
					<GeneralIcon />
					<p>General</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.Business}>
				<div
					className={
						path === "/business"
							? "category-item active"
							: "category-item"
					}
				>
					<BusinessIcon />
					<p>Business</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.Health}>
				<div
					className={
						path === "/health"
							? "category-item active"
							: "category-item"
					}
				>
					<HealthIcon />
					<p>Health</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.Science}>
				<div
					className={
						path === "/science"
							? "category-item active"
							: "category-item"
					}
				>
					<ScienceIcon />
					<p>Science</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.Sports}>
				<div
					className={
						path === "/sports"
							? "category-item active"
							: "category-item"
					}
				>
					<SportsIcon />
					<p>Sports</p>
				</div>
			</Link>
			<Link to={AvailableRoutes.Technology}>
				<div
					className={
						path === "/technology"
							? "category-item active"
							: "category-item"
					}
				>
					<TechIcon />
					<p>Tech</p>
				</div>
			</Link>
		</div>
	);
}

export default Categories;
