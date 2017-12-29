import { createReducer } from '../utils/createReducer';
import * as saveNews from '../actions/saveNews';


const savedNews = (state, action) => {

    return {
        ...state,
        isFetching: false,
        items: action.data,
    };
};
 const newNews = createReducer({items: {data: []}, ids: [], isFetching: false}, {
    [saveNews.NEWS_SAVED]: savedNews,
});

export default newNews;