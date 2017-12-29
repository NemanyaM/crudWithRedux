import axios from 'axios';
import { makeActionCreator } from "../utils/actionCreator";

export const NEWS_FETCHED = 'NEWS_FETCHED';
export const receiveNews = makeActionCreator(NEWS_FETCHED, 'data');

export function fetchNews()
{
    return dispatch => {
        return axios.get('/api/v1/news')
            .then(function (response) {
                dispatch(receiveNews(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}