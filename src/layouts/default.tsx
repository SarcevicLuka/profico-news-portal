import Categories from "../components/navigation/Categories";
import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import { ChildrenProps } from "../types/types";
import "../assets/styles/layout.scss";

function DefaultLayout({ children }: ChildrenProps) {
	return (
		<div className="layout-container">
			<Header />
			<NavBar />
			<Categories />
			<div>{children}</div>
		</div>
	);
}

export default DefaultLayout;
