import { useState } from "react";
import "../../../assets/styles/navbar/searchBar.scss";
import { NavBarProps } from "../NavBar";
import { searchArticles } from "../../../api/articles/apiCalls";
import { Article } from "../../../types/types";

function SearchBar({ setSearchResults }: NavBarProps) {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleSearch = () => {
		if (searchTerm === "") setSearchResults([]);
		searchArticles(searchTerm)
			.then((response) => {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				response.data.response.docs.forEach((data: any) => {
					const article: Article = {
						title: data.abstract,
						category: data.news_desk,
						author: data.byline.original?.substring(3),
						//image: articleData.
						url: data.url,
						apiId: data._id,
						isFavorite: false
					};

					setSearchResults((current) => [...current, article]);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="navbar__search-bar">
			<form
				className="search-bar__form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSearch();
				}}
			>
				<label className="search-bar__form__label">
					<input
						className="search-bar__form__input"
						type="text"
						placeholder="Search news"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						type="submit"
						onClick={handleSearch}
						className="search-bar__form__submit"
					>
						Search
					</button>
				</label>
			</form>
		</div>
	);
}

export default SearchBar;
