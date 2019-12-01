import React from "react";
import "./App.css";
import { Box } from "grommet";
import {
	NavLink,
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import TopNews from "./TopNews";
import Categories from "./Categories";
import Search from "./Search";
import queryString from "query-string";

const routes = [
	{
		label: "Top News",
		path: "/",
		view: <TopNews />,
	},
	{
		label: "Categories",
		path: "/categories",
		view: <Categories />,
	},
	{
		label: "Search",
		path: "/search",
		view: <Search />,
	},
];

const countries = ["gb", "us"];

const App: React.FC = () => {
	return (
		<Router>
			<Box pad="small">
				<Box
					id="nav"
					direction="row"
					justify="between"
					border={{ side: "all", size: "1px" }}
					align="center"
				>
					<Box direction="row">
						{routes.map(({ path, label }) => (
							<NavLink
								key={label}
                to={path}
                exact
								activeStyle={{ background: "gray", color: "white" }}
								className="nav-link"
							>
								{label}
							</NavLink>
						))}
					</Box>
					<Box direction="row">
						{countries.map(country => (
							<NavLink
								key={country}
								to={location => `${location.pathname}?country=${country}`}
								activeStyle={{ background: "gray", color: "white" }}
								className="context-link"
								isActive={(match, location) => {
									const values = queryString.parse(location.search);
									return values.country === country;
								}}
							>
								{country.toUpperCase()}
							</NavLink>
						))}
					</Box>
				</Box>
				<Switch>
					{routes.map(({ path, view }) => (
						<Route path={path}>{view}</Route>
					))}
				</Switch>
			</Box>
		</Router>
	);
};

export default App;
