import NewsBody from "../components/newsBody/NewsBody";
import DefaultLayout from "../layouts/default";

function HomePage() {
	return (
		<>
			<DefaultLayout>
				<NewsBody />
			</DefaultLayout>
		</>
	);
}

export default HomePage;
