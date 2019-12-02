import React, { useState, useRef, useEffect } from "react";

import { Search as SearchIcon } from "grommet-icons";
import { Box, TextInput } from "grommet";
import { search } from "../utils";
import { debounce as _debounce } from "lodash";
import Card from "../components/Card";

type SearchProps = {
	country: string;
};

const Search: React.FC<SearchProps> = ({ country }) => {
	const [articleQuery, setArticleQuery] = useState("");
	const delayedQuery = useRef(
		_debounce((query: string) => search(country, query), 200)
	).current;
	const [articles, setArticles] = useState<Array<any>>([]);

	useEffect(() => {
		const queryResult = delayedQuery(articleQuery);
		if (queryResult) {
			queryResult.then((data: any) => setArticles(data.articles));
		}
	}, [articleQuery, delayedQuery]);

	const onChange = (e: any) => {
		setArticleQuery(e.target.value);
	};

	return (
		<Box background="dark-1" fill align="center" pad={{ top: "large" }}>
			<Box
				width="large"
				direction="row"
				align="center"
				pad={{ horizontal: "small", vertical: "xsmall" }}
				round="small"
			>
				<SearchIcon color="white" />
				<TextInput
					type="text"
					plain
					value={articleQuery}
					onChange={onChange}
					placeholder="Search term..."
				/>
			</Box>
			<Box pad="small" direction="row" wrap>
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
		</Box>
	);
};

export default Search;
