/** @format */

import { createContext } from "react";
interface TitleContextType {
	setTitle: React.Dispatch<React.SetStateAction<string | number>>;
}
const Title = createContext<TitleContextType | undefined>(undefined);

export default Title;
