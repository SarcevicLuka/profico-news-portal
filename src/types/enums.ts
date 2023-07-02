export enum NewsToggle {
	Featured = "featured",
	Latest = "latest"
}

export enum CategoryQueriesByPage {
	MainPage = 'news_desk:("Technology", "Sports", "World", "BUsiness", "Health", "Science")',
	General = 'news_desk:("World")',
	Business = 'news_desk:("Business")',
	Health = 'news_desk:("Health")',
	Science = 'news_desk:("Science")',
	Sports = 'news_desk:("Sports")',
	Technology = 'news_desk:("Technology")'
}

export enum QueryParameters {
	FilterQuery = "fq",
	Page = "page",
	Sort = "sort",
	ApiKey = "api-key"
}
