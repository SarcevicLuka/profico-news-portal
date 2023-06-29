import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./App.css";
import "./assets/styles.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
