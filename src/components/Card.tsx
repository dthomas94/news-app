import React from "react";
import { Box, Image, Text } from "grommet";
import { Link } from "react-router-dom";

type CardProps = {
	title: string;
	urlToImage: string;
	description: string;
};

const Card: React.FC<CardProps> = ({ title, urlToImage, description }) => {
	return (
		<Box className="card" justify="between" alignContent="center" responsive fill>
			<Text>{title}</Text>
			<Box height="small" width="small">
				<Image fit="cover" src={urlToImage} />
			</Box>
			<Text>{description}</Text>
			<Link
				to={location => ({
					...location,
					pathname: location.pathname,
					hash: "#detail-view",
				})}
			>
				More
			</Link>
		</Box>
	);
};

export default Card;
