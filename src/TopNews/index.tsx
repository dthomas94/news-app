import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import { getTopNews } from "../utils";
import Card from "../components/Card";

type TopNewsProps = {
	country: string;
};

const TopNews: React.FC<TopNewsProps> = ({ country }) => {
	const [articles, setArticles] = useState<Array<any>>([]);

	useEffect(() => {
		getTopNews(country).then(data => {
			setArticles(data.articles);
		});
	}, [country]);

	return (
		<Box pad="small" direction="row" wrap justify="between" >
			{articles.map(({ title, description, urlToImage, content }) => (
				<Box width="medium">
					<Card
						title={title}
						description={description}
						urlToImage={urlToImage}
						content={content}
					/>
				</Box>
			))}
		</Box>
	);
};

export default TopNews;
