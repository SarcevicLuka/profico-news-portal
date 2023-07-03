import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import "../assets/styles/layout.scss";
import NewsCategoriesBody from "../components/newsBody/NewsCategoriesBody";

function DefaultLayout() {
	return (
		<div>
			<Header />
			<div className="layout">
				<NavBar />
				<NewsCategoriesBody />
			</div>
		</div>
	);
}

export default DefaultLayout;
