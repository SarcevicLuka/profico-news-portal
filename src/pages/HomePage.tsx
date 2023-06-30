import NewsCategoriesBody from "../components/newsBody/NewsCategoriesBody";
import DefaultLayout from "../layouts/default";

function HomePage() {
	return (
		<>
			<DefaultLayout>
				<NewsCategoriesBody />
			</DefaultLayout>
		</>
	);
}

export default HomePage;
