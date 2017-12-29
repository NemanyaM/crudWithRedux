import { createReducer } from '../utils/createReducer';
import * as fetchNews from '../actions/fetchNews';


const receiveNews = (state, action) => {

    return {
        ...state,
        isFetching: false,
        items: action.data,
    };
};
 const news = createReducer({items: {data: []}, ids: [], isFetching: false}, {
    [fetchNews.NEWS_FETCHED]: receiveNews,
});

export default news;