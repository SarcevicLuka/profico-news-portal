import axios from "axios";
import { QueryParameters } from "../../types/enums";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const apiKey = "HUamtrrPIz1WG5A5aFUzYqK69kRvXjL8";

const getArticles = async (filterParams: URLSearchParams) => {
	console.log("Api called");
	return await axios.get(
		`${baseURL}?${filterParams}&${QueryParameters.ApiKey}=${apiKey}`
	);
};

const searchArticles = async (searchTerm: string) => {
	console.log("Search called");
	return await axios.get(
		`${baseURL}?q=${searchTerm}&${QueryParameters.ApiKey}=${apiKey}`
	);
};

export { getArticles, searchArticles };
