/** @format */
import { lazy, Suspense, useState } from "react";
// @ts-ignore
import { Loader } from 'circle-loader';
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
				<Suspense fallback={Loader.start('')}>
					<Home />
				</Suspense>
			),
		},
		{
			path: "/blog",
			element: (
				<Suspense fallback={Loader.start('')}>
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
