import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2/top-headlines";
axios.defaults.headers.common["X-API-KEY"] = "35998373698b4b279d3d85431bee45a0";

export const categories = [
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology",
];

export const getTopNews = async (country: string, category="", limit=100) => {
	try {
		const data = axios.get(`?country=${country}&category=${category}&pageSize=${limit}`).then(resp => resp.data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getTopNewsInAllCategories = async (country: string, limit: number) => {
	try {
		const requests = categories.map(category =>
			getTopNews(country, category, limit)
    );
		const response = axios.all(requests).then(
			resp => resp
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const search = async (country: string, term: string) => {
	try {
		const response = await axios.get(`?country=${country}&q=${term}`).then(resp => resp.data);
		return response;
	} catch (error) {
		console.error(error);
	}
};
