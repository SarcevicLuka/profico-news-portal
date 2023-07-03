export type Article = {
	title: string;
	category: string;
	author?: string;
	//image: string;
	url: string;
	apiId: string;
	isFavorite: boolean;
};

export type LatestArticle = {
	publishedAt: string;
	title: string;
	url: string;
	apiId: string;
};
