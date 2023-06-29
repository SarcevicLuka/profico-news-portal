import GeneralPage from "../pages/GeneralPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { AvailableRoutes } from "./AvailableRoutes";

type RouteInformation = {
	path: string;
	component: () => JSX.Element | null;
};

const RouteConfiguration: RouteInformation[] = [
	{
		path: AvailableRoutes.Home,
		component: HomePage
	},
	{
		path: AvailableRoutes.General,
		component: GeneralPage
	},
	{ path: "*", component: NotFoundPage }
];

export default RouteConfiguration;
