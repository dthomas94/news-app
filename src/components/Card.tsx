import React from "react";
import { Box, Image, Text } from "grommet";
import { Link } from "react-router-dom";

type CardProps = {
	title: string;
	urlToImage: string;
	description: string;
};

const Card: React.FC<CardProps> = ({title, urlToImage, description}) => {
	return (
		<Box justify="between" alignContent="center">
			<Text>{title}</Text>
			<Image fit="cover" src={urlToImage} />
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
