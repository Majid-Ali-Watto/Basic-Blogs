/** @format */

import data from "../assets/data";
import { useEffect, useState } from "react";
interface Props {
	blogTitle: string | number;
}
export const BlogPage = (props: Props): React.JSX.Element => {
	let newIndex: number = 0;
	const [blogs, setBlogs] = useState<string[] | undefined>([]);
	const [images, setImages] = useState<string[] | undefined>([]);
	const [subtitle, setSubTitle] = useState<string>("");
	function findBlog(blogTitle: string | number): string[] | undefined {
		const blogT = data.find((blog) => blog.title == blogTitle);
		if (blogT) {
			setSubTitle(blogT.subtitle);
			setImages(blogT.images);
			return blogT.para;
		} else return undefined;
	}
	useEffect(() => {
		setBlogs(findBlog(props.blogTitle));
	}, [props.blogTitle]);

	return (
		<>
			<div className="blogBody">
				<h1>{props.blogTitle}</h1>

				{subtitle && <span>{subtitle}</span>}
				<div key={props.blogTitle} className="blogBody">
					{blogs &&
						blogs.map((blg, index) => {
							newIndex = index;
							return (
								<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
									{blg.startsWith("<mt") ? (
										<span style={{ marginTop: "40px" }}>{""}</span>
									) : blg.startsWith("<c") ? (
										<span style={{ textAlign: "center", fontWeight: "bold" }}>{blg.substring(3, blg.length)}</span>
									) : blg.startsWith("<l") ? (
										<p style={{ textAlign: "left" }}>{blg.substring(3, blg.length)}</p>
									) : blg.startsWith("<r") ? (
										<p style={{ textAlign: "right" }}>{blg.substring(3, blg.length)}</p>
									) : (
										<p key={index}>
											{blg.startsWith("(") ? (
												<i>{blg}</i>
											) : blg.startsWith("<h") ? (
												<h3>{blg.substring(3, blg.length)}</h3>
											) : blg.startsWith("<") ? (
												<q>
													<i>{blg.substring(1, blg.length)}</i>
												</q>
											) : blg.includes("~") ? (
												blg.split("~").map((m) => {
													return <address style={{ textAlign: "right" }}>{m}</address>;
												})
											) : (
												blg
											)}
										</p>
									)}
									{images?.[index] && <img src={images[index]} alt="" style={{ width: "50vw" }} />}
								</div>
							);
						})}
					{images?.slice(newIndex + 1).map((imgurl: string) => {
						return (
							<div className="blog" style={{ marginTop: "20px" }}>
								<img src={imgurl} alt="" style={{ width: "50vw" }} />;
							</div>
						);
					})}
					{!blogs && (
						<div
							style={{
								backgroundColor: "azure",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								/* Apply glassy effect to the background */
								background: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(10px)",
								padding: "16px",
								boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
							}}
						>
							<img src="../../public/sad.png" alt="" style={{ width: "20vw", mixBlendMode: "multiply" }} />
							<p style={{ textAlign: "center" }}>Blog body is missing.</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default BlogPage;
