import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Box, Text } from "grommet";
import {
	getTopNewsInAllCategories,
	categories,
	getTopNewsInCategory,
} from "../utils";
import Card from "../components/Card";

type CategoriesProps = {
	country: string;
};

type CategoryProp = {
	articles: Array<any>;
	category: string;
	setCategoryHeading: Dispatch<SetStateAction<string | null>>;
	showHeading: boolean;
};

const Category: React.FC<CategoryProp> = ({
	articles,
	category,
	setCategoryHeading,
	showHeading,
}) => (
	<Box fill>
		{showHeading && (
			<Text onClick={() => setCategoryHeading(category)}>{category}</Text>
		)}

		<Box direction="row" justify="evenly" alignContent="center" fill wrap>
			{articles.map(({ title, description, urlToImage }) => (
        <Box width="small">
				<Card key={title} title={title} description={description} urlToImage={urlToImage} />
        </Box>
			))}
		</Box>
	</Box>
);

const Categories: React.FC<CategoriesProps> = ({ country }) => {
	const [content, setContent] = useState<Array<any>>([]);
	const [categoryHeading, setCategoryHeading] = useState<string | null>(null);

	useEffect(() => {
		getTopNewsInAllCategories(country, 5).then(results => {
			if (results && results.length) {
				const content = results.map(
					//@ts-ignore
					({ articles }, index) => {
						return { articles, category: categories[index] };
					}
				);
				setContent(content);
			}
		});
	}, [country]);

	useEffect(() => {
		if (categoryHeading) {
			getTopNewsInCategory(country, categoryHeading).then(({ articles }) => {
				if (articles.length) {
					setContent([{ articles, category: categoryHeading }]);
				}
			});
		}
	}, [categoryHeading, country]);

	return (
		<Box pad="small">
			{categoryHeading && (
				<Text>
					Top {categoryHeading} news from {country}
				</Text>
			)}
			{content.map(({ articles, category }) => (
				<Category
          key={category}
					articles={articles}
					category={category}
					setCategoryHeading={setCategoryHeading}
					showHeading={!categoryHeading}
				/>
			))}
		</Box>
	);
};

export default Categories;
