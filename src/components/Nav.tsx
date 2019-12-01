import React from "react";
import { Button, Box, Text } from "grommet";
import { NavLink } from "react-router-dom";

const countries = ["gb", "us"];

type NavRoute = {
	label: string;
	path: string;
};

type NavProps = {
  routes: Array<NavRoute>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedCountry: string;
};

const Nav: React.FC<NavProps> = ({ routes, setCountry, selectedCountry }) => {
	return (
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
						<Button
							plain
							key={country}
							active={country === selectedCountry}
							onClick={() => {
								setCountry(country);
							}}
						>
              {
              //@ts-ignore
							({ hover }) => (
								<Box
									background={hover ? "accent-1" : undefined}
									pad={{ horizontal: "small", vertical: "xsmall" }}
									border={{ side: "left", size: "1px" }}
								>
									<Text size="small">{country.toUpperCase()}</Text>
								</Box>
							)}
						</Button>
					))}
			</Box>
		</Box>
	);
};

export default Nav;
