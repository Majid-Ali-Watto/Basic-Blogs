/** @format */
import { lazy, Suspense, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const BlogPage = lazy(() => import("./pages/blog-page"));
import Title from "./context";
function App() {
	const [title, setTitle] = useState<string | number>("");
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Suspense>
					<Home />
				</Suspense>
			),
		},
		{
			path: "/blog",
			element: (
				<Suspense>
					<BlogPage blogTitle={title} />
				</Suspense>
			),
		},
	]);
	return (
		<Title.Provider value={{ setTitle }}>
			<RouterProvider router={router} />
		</Title.Provider>
	);
}

export default App;
