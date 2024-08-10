/** @format */

import data from "../assets/data";
import { useEffect, useState } from "react";
import './blog-page.css'
interface Props {
	blogTitle: string | number;
}

export const BlogPage = (props: Props): React.JSX.Element => {
	const [blogs, setBlogs] = useState<string[]>([]);
	const [images, setImages] = useState<string[]>([]);
	const [subtitle, setSubTitle] = useState<string>("");

	function findBlog(blogTitle: string | number): string[] | undefined {
		const blogT = data.find((blog) => blog.title === blogTitle);
		if (blogT) {
			setSubTitle(blogT.subtitle);
			setImages(blogT.images || []);
			return blogT.para;
		} else {
			return [];
		}
	}

	useEffect(() => {
		setBlogs(findBlog(props.blogTitle) || []);
	}, [props.blogTitle]);

	return (
		<div className="blogBody">
			<h1>{props.blogTitle}</h1>

			{subtitle && <span className="blog-subtitle">{subtitle}</span>}

			<div className="blog-content">
				{blogs.map((blg, index) => {
					return (
						<div
							key={`blog-content-${index}`}
							className="blog-content-item"
						>
							{blg.startsWith("<mt") ? (
								<span className="margin-top">{""}</span>
							) : blg.startsWith("<c") ? (
								<span className="center-text">
									{blg.substring(3)}
								</span>
							) : blg.startsWith("<l") ? (
								<p className="left-text">{blg.substring(3)}</p>
							) : blg.startsWith("<r") ? (
								<p className="right-text">{blg.substring(3)}</p>
							) : (
								<p key={`text-${index}`}>
									{blg.startsWith("(") ? (
										<i>{blg}</i>
									) : blg.startsWith("<h") ? (
										<h3>{blg.substring(3)}</h3>
									) : blg.startsWith("<") ? (
										<q><i>{blg.substring(1)}</i></q>
									) : blg.includes("~") ? (
										blg.split("~").map((m, mIndex) => (
											<address key={`address-${mIndex}`} className="right-address">
												{m}
											</address>
										))
									) : (
										blg
									)}
								</p>
							)}
							{images[index] && (
								<img
									src={images[index]}
									alt={`Image ${index}`}
									className="blog-image"
								/>
							)}
						</div>
					);
				})}
				{images.slice(blogs.length).map((imgurl, imgIndex) => (
					<div className="blog" key={`image-extra-${imgIndex}`}>
						<img src={imgurl} alt={`Extra Image ${imgIndex}`} className="blog-image" />
					</div>
				))}
				{!blogs.length && (
					<div className="missing-blog">
						<img src="/sad.png" alt="Missing Blog" className="sad-image" />
						<p className="missing-message">Blog body is missing.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogPage;
