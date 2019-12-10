import React from "react";
import { Box, Image, Text, Button } from "grommet";
import { Link, useLocation, useHistory } from "react-router-dom";
import { truncate as _truncate } from "lodash";
import ReactTooltip from "react-tooltip";

type CardProps = {
	title: string;
	urlToImage: string;
	description?: string;
	content?: string;
};

const Card: React.FC<CardProps> = ({
	title,
	urlToImage,
	description,
	content
}) => {
	const { hash } = useLocation();
	const history = useHistory();
	return (
		<Box
			className="card"
			justify="between"
			alignContent="center"
			responsive
			fill
			elevation="small"
			round="small"
			pad="small"
		>
			{!hash && <ReactTooltip id={title}>{title}</ReactTooltip>}
			<Text data-tip data-for={title}>
				{hash ? title : _truncate(title, { length: 50 })}
			</Text>
			<Box height="small" width="small">
				<Image fit="cover" src={urlToImage} />
			</Box>
			{description && <Text size="12">{description}</Text>}
			{content && <Text size="12">{content}</Text>}
			{hash ? (
				<Button plain onClick={() => history.goBack()} label="Back to list" />
			) : (
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
			)}
		</Box>
	);
};

export default Card;
