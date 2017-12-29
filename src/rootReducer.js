import { combineReducers } from 'redux';

import news from './reducers/news';
import newNews from './reducers/saveNews';

export default combineReducers({
    news,
    newNews
});