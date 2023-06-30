import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import { ChildrenProps } from "../types/types";
import "../assets/styles/layout.scss";

function DefaultLayout({ children }: ChildrenProps) {
	return (
		<div>
			<Header />
			<div className="layout">
				<NavBar />
				<div>{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
