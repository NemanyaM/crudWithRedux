import axios from 'axios';
import { makeActionCreator } from "../utils/actionCreator";

export const NEWS_SAVED = 'NEWS_SAVED';
export const savedNews = makeActionCreator(NEWS_SAVED, 'data');


export function saveNews()
{
    return dispatch => {
        return axios.post('/api/v1/news')
            .then(function (response) {
                dispatch(savedNews(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}