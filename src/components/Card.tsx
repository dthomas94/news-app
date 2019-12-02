import React from "react";
import { Box, Image, Text } from "grommet";
import { Link } from "react-router-dom";
import { truncate as _truncate } from 'lodash';
import ReactTooltip from 'react-tooltip';

type CardProps = {
	title: string;
	urlToImage: string;
  description: string;
  content: string;
};
            
const Card: React.FC<CardProps> = ({ title, urlToImage, description, content }) => {
	return (
		<Box className="card" justify="between" alignContent="center" responsive fill>
      <ReactTooltip id={title}>{title}</ReactTooltip>
			<Text data-tip data-for={title}>{_truncate(title, {length: 50})}</Text>
			<Box height="small" width="small">
				<Image fit="cover" src={urlToImage} />
			</Box>
			<Text>{description}</Text>
			<Link
				to={location => ({
					...location,
					pathname: location.pathname,
          hash: "#detail-view",
          state: {
            title,
            urlToImage,
            content
          }
				})}
			>
				More
			</Link>
		</Box>
	);
};

export default Card;
