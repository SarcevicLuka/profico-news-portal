import HamburgerIcon from "../icons/HamburgerIcon";
import "../../assets/styles/navbar/navBar.scss";
import { useState } from "react";
import SearchBar from "./search/SearchBar";
import ExitIcon from "../icons/ExitIcon";
import Categories from "./Categories";

function NavBar() {
	const [isNavFullscreen, setIsNavFullscreen] = useState<boolean>(false);

	return (
		<>
			<div className="navbar">
				<div className="screen-toggle">
					<div className="navbar__inner">
						<div className="navbar__inner-logo">
							<span className="navbar__inner-logo-red">My</span>
							<span>News</span>
						</div>
						<button
							className="navbar__inner-icon"
							onClick={() => setIsNavFullscreen(!isNavFullscreen)}
						>
							<HamburgerIcon />
						</button>
					</div>
					<SearchBar />
				</div>

				<div className={isNavFullscreen ? "nav active" : "nav"}>
					<div className="navbar__active">
						<div className="navbar__active-logo">
							<span className="navbar__active-logo-red">My</span>
							<span>News</span>
						</div>
						<button
							className="exit"
							onClick={() => setIsNavFullscreen(!isNavFullscreen)}
						>
							<ExitIcon />
						</button>
						<SearchBar />
						<div className="navbar__active-categories">
							<Categories />
						</div>
					</div>
				</div>
			</div>

			<hr id="navbar-line" />
		</>
	);
}

export default NavBar;
