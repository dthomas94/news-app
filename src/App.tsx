import React, { useState, useEffect } from "react";
import "./App.css";
import { Box, Grommet, Text } from "grommet";
import { Switch, Route, useLocation } from "react-router-dom";
import TopNews from "./TopNews";
import Categories from "./Categories";
import Search from "./Search";
import Nav from "./components/Nav";
import theme from "./theme";
import Card from "./components/Card";

const routes = [
	{
		label: "Top News",
		path: "/topNews",
		view: (props: any) => {
			return <TopNews {...props} />;
		},
	},
	{
		label: "Categories",
		path: "/categories",
		view: (props: any) => {
			return <Categories {...props} />;
		},
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
	const { pathname, hash, state } = useLocation();

	useEffect(() => {
		let heading = "";
		switch (pathname) {
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
	}, [selectedCountry, selectedCategory, pathname]);

	return (
		<Grommet theme={theme}>
			<Box pad="small">
				<Nav
					routes={routes.map(route => ({
						label: route.label,
						path: route.path,
					}))}
					selectedCountry={selectedCountry}
					setCountry={setCountry}
				/>
				<Text>{heading}</Text>
				<Switch>
					{hash ? (
            <Box fill>
								<Card
									title={state.title}
									content={state.content}
									urlToImage={state.urlToImage}
								/>
                </Box>
					) : (
						routes.map(({ path, view }) => (
							<Route
								exact
								strict
								key={path}
								path={path}
								component={() => view({ country: selectedCountry })}
							/>
						))
					)}
				</Switch>
			</Box>
		</Grommet>
	);
};

export default App;
