import { ReactNode } from "react";

export type ChildrenProps = {
	readonly children: ReactNode;
};

export type Article = {
	title: string;
	category: string;
	author?: string;
	//image: string;
	url: string;
	apiId: string;
};

export type LatestArticle = {
	publishedAt: string;
	title: string;
	url: string;
	apiId: string;
};
