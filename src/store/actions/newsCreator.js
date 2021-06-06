import axios from 'axios';

import {
	GET_NEWS_START,
	GET_NEWS_SUCCESS,
	GET_NEWS_ERROR,
} from './actionTypes';

const optionsURL = {
	country: 'us',
	apiKey: '6d41955b692f48af8723e07a089d203d',
};

export function getNewsCreator() {
	return async (dispatch) => {
		dispatch(getNewsStart());

		try {
			const response = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=${optionsURL.country}&apiKey=${optionsURL.apiKey}`,
			);

			const newsData = response.data.articles;

			const news = newsData.map((el) => {
				const { title, description, url, urlToImage } = el;
				return { title, description, url, urlToImage };
			});

			dispatch(getNewsSuccess(news));
		} catch (e) {
			dispatch(getNewsError(e));
		}
	};
}

export function getNewsStart() {
	return {
		type: GET_NEWS_START,
	};
}

export function getNewsSuccess(news) {
	return {
		type: GET_NEWS_SUCCESS,
		payload: news,
	};
}

export function getNewsError(e) {
	return {
		type: GET_NEWS_ERROR,
		payload: e,
	};
}
