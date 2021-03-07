import { combineReducers } from 'redux';

import settingsReducer from './settings';
// import errorReducer from './error.reducer';
// import searchReducer from './search.reducer';
// import filtersReducer from './filters.reducer';
// import feedsReducer from './feeds.reducer';
// import apppreferencesReducer from './apppreferences.reducer';

export default combineReducers({
    settings: settingsReducer,
    // error: errorReducer,
    // search: searchReducer,
    // filters: filtersReducer,
    // app_preferences: apppreferencesReducer,
    // feeds: feedsReducer
})