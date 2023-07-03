import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import "../assets/styles/layout.scss";
import NewsCategoriesBody from "../components/newsBody/NewsCategoriesBody";
import { useState } from "react";
import { Article } from "../types/types";

function DefaultLayout() {
	const [searchResults, setSearchResults] = useState<Article[]>([]);
	return (
		<div>
			<Header />
			<div className="layout">
				<NavBar setSearchResults={setSearchResults} />
				<NewsCategoriesBody searchResults={searchResults} />
			</div>
		</div>
	);
}

export default DefaultLayout;
