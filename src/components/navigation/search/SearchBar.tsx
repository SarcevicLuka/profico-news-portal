import "../../../assets/styles/navbar/searchBar.scss";

function SearchBar() {
	return (
		<div className="navbar__search-bar">
			<label>
				<input type="text" placeholder="Search news" />
				<button>Search</button>
			</label>
		</div>
	);
}

export default SearchBar;
