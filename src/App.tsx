import React from "react";
import "./App.css";
import { Box } from "grommet";
import { NavLink, Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNews from './TopNews';
import Categories from './Categories';
import Search from './Search';

const routes = [
	{
		label: "Top News",
    path: "/topNews",
    view: <TopNews /> 
	},
	{
		label: "Categories",
    path: "/categories",
    view: <Categories />
	},
	{
		label: "Search",
    path: "/search",
    view: <Search />
	},
];

const countries = ["gb", "us"];

const App: React.FC = () => {
	return (
		<Router>
			<Box>
				<Box id="nav" direction="row" justify="between">
					<Box direction="row">
						{routes.map(({ path, label }) => (
							<NavLink key={label} to={path}>
								{label}
							</NavLink>
						))}
					</Box>
					<Box direction="row">
						{countries.map(country => (
							<Link to={location => `${location.pathname}?country=${country}`}>
								{country.toUpperCase()}
							</Link>
						))}
					</Box>
				</Box>
        <Switch>
          {
            routes.map(({path, view}) => (
              <Route path={path}>
                {view}
              </Route>
            ))
          }
        </Switch>
			</Box>
		</Router>
	);
};

export default App;
