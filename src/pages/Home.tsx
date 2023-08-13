/** @format */

import "../App.css";
import Header from "../components/Header";
import { CardsList } from "../pages/cards-list";

function Home() {
	return (
		<>
			<Header />

			<main>
				<div className="blog-img">
					<figcaption className="water-effect">Baca Blog Hebat</figcaption>
				</div>
				<div style={{ height: "1%" }}></div>
				<CardsList />
			</main>
		</>
	);
}

export default Home;
