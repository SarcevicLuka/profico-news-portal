import { Route, Routes as DomRoutes } from "react-router-dom";
import RouteConfiguration from "./RoutesConfig";

function Routes() {
	return (
		<DomRoutes>
			{RouteConfiguration.map((route) => {
				return (
					<Route
						element={<route.component />}
						key={route.path}
						path={route.path}
					/>
				);
			})}
		</DomRoutes>
	);
}

export default Routes;
