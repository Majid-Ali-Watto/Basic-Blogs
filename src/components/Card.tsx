/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useTitleContext } from "../context-provider";
interface Props {
	title: string | number;
	url: string | undefined;
}
export const Card = (props: Props): React.ReactElement => {
	const navigate = useNavigate();
	const { setTitle } = useTitleContext();
	return (
		<figure
			className="card"
			onClick={() => {
				setTitle(props.title);
				navigate("/blog");
			}}
		>
			<img src={props.url} alt="" className="card-img" />
			<figcaption className="card-title"> {props.title}</figcaption>
		</figure>
	);
};
