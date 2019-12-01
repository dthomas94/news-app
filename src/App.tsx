import React, { useState, useEffect } from "react";
import "./App.css";
import { Box, Grommet, Text } from "grommet";
import {
	Switch,
	Route,
	useLocation,
	useParams,
} from "react-router-dom";
import TopNews from "./TopNews";
import Categories from "./Categories";
import Search from "./Search";
import Nav from "./components/Nav";
import theme from "./theme";

const routes = [
	{
		label: "Top News",
		path: "/",
		view: (props: any) => <TopNews {...props} />,
	},
	{
		label: "Categories",
		path: "/categories",
		view: (props: any) => <Categories {...props} />,
	},
	{
		label: "Search",
		path: "/search",
		view: (props: any) => <Search {...props} />,
	},
];

const App: React.FC = () => {
	const [selectedCountry, setCountry] = useState("gb");
	const [selectedCategory, setCategory] = useState(null);
	const [heading, setHeading] = useState("Top News from Great Britain");
	const location = useLocation();

	useEffect(() => {
		let heading = "";
		switch (location.pathname) {
			case "/":
				heading = `Top News from ${selectedCountry}:`;
				break;
			case "/categories":
				if (selectedCategory) {
					heading = `Top ${selectedCategory} news from ${selectedCountry}:`;
				} else {
					heading = `Top 5 news by categories from ${selectedCountry}:`;
				}
				break;
			case "/search":
				heading = `Search top news from ${selectedCountry} by term:`;
		}
		setHeading(heading);
	}, [selectedCountry, selectedCategory, location.pathname]);

	return (
			<Grommet theme={theme}>
				<Box pad="small">
					<Nav
						routes={routes}
						selectedCountry={selectedCountry}
						setCountry={setCountry}
					/>
					<Text>{heading}</Text>
					<Switch>
						{routes.map(({ path, view }) => (
							<Route path={path} component={() => view({ selectedCountry })} />
						))}
					</Switch>
				</Box>
			</Grommet>
	);
};

export default App;
