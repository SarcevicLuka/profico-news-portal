import "../../../assets/styles/navbar/searchBar.scss";

function SearchBar() {
	const handleSearch = () => {
		console.log("Search");
	};

	return (
		<div className="navbar__search-bar">
			<label>
				<input type="text" placeholder="Search news" />
				<button onClick={handleSearch}>Search</button>
			</label>
		</div>
	);
}

export default SearchBar;
