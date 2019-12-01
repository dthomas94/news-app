import React, { useEffect, useState } from "react";
import { Box, Text } from "grommet";
import { getTopNewsInAllCategories, categories } from "../utils";
import Card from "../components/Card";

type CategoriesProps = {
	country: string;
};

type CategoryProp = {
	articles: Array<any>;
	title: string;
};

const Category: React.FC<CategoryProp> = ({ articles, title }) => (
	<Box fill>
		<Text>{title}</Text>
		<Box direction="row" justify="between" alignContent="center">
			{articles.map(({ title, description, urlToImage }) => (
				<Card title={title} description={description} urlToImage={urlToImage} />
			))}
		</Box>
	</Box>
);
const Categories: React.FC<CategoriesProps> = ({ country }) => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		getTopNewsInAllCategories(country, 5).then(results => {
			if (results !== undefined) {
				setContent(
					results.map(
						//@ts-ignore
						(result: { data: { articles: Array<any> } }, index) => {
							const {
								data: { articles },
							} = result;
							return <Category articles={articles} title={categories[index]} />;
						}
					)
				);
			}
		});
	}, [country]);

	return <Box pad="small">{content}</Box>;
};

export default Categories;
