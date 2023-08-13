/** @format */
import Title from "./context";
import { useContext } from "react";
export const useTitleContext = () => {
	const context = useContext(Title);
	if (!context) {
		throw new Error("useTitleContext must be used within a TitleProvider");
	}
	return context;
};
