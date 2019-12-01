import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2/top-headlines";
axios.defaults.headers.common["X-API-KEY"] = "35998373698b4b279d3d85431bee45a0";

export const getTopNewsInCountry = async (country: string) => {
	try {
		const response = await axios.get(`?country=${country}`);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const getTopNewsInAllCategories = async (country: string, limit: number) => {
	const categories = [
		"entertainment",
		"general",
		"health",
		"science",
		"sports",
		"technology",
	];
	try {
    const promises = categories.map(category => axios.get(`?country=${country}&category=${category}`))
		const response = await Promise.all(promises);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const getTopNewsInCategory = async (
	country: string,
	category: string
) => {
	try {
		const response = await axios.get(
			`?country=${country}&category=${category}`
		);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};

export const search = async (country: string, term: string) => {
	try {
		const response = await axios.get(`?country=${country}&q=${term}`);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};
