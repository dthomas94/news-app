import React, { useState } from "react";
import "./App.css";
import { Box, Grommet } from "grommet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNews from "./TopNews";
import Categories from "./Categories";
import Search from "./Search";
import Nav from "./components/Nav";
import theme from './theme';

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
		view: (props: any) => <Search {...props}/>,
	},
];

const App: React.FC = () => {
  const [currentCountry, setCountry] = useState("gb");

	return (
		<Router>
			<Grommet theme={theme}>
				<Box pad="small">
					<Nav routes={routes} currentCountry={currentCountry} setCountry={setCountry}/>
					<Switch>
						{routes.map(({ path, view }) => (
							<Route path={path} component={() => view({currentCountry})} />
						))}
					</Switch>
				</Box>
			</Grommet>
		</Router>
	);
};

export default App;
